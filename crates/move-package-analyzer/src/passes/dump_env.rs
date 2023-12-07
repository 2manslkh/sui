// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
#![allow(unused)]

use crate::{
    model::{
        global_env::GlobalEnv,
        model_utils::type_name,
        move_model::{FunctionIndex, Module},
    },
    write_to,
};
use move_binary_format::file_format::{AbilitySet, Visibility};
use serde::Serialize;
use serde_json;
use std::collections::BTreeSet;
use std::{collections::BTreeMap, fs::File, io::Write, path::Path};
use sui_types::base_types::ObjectID;
use tracing::error;

#[derive(Serialize)]
struct JsonEnvironment {
    packages: Vec<JsonPackage>,
}

#[derive(Serialize)]
struct JsonPackage {
    id: ObjectID,
    version: u64,
    root: ObjectID,
    versions: Vec<ObjectID>,
    type_origins: Vec<(String, ObjectID)>,
    dependencies: BTreeMap<ObjectID, (ObjectID, u64)>,
    modules: Vec<JsonModule>,
}

#[derive(Serialize)]
struct JsonModule {
    package: ObjectID,
    name: String,
    structs: Vec<JsonStruct>,
    functions: Vec<JsonFunction>,
}

#[derive(Serialize)]
struct JsonStruct {
    package: ObjectID,
    module: String,
    name: String,
    visibility: JsonVisibility,
    abilities: JsonAbilitySet,
    fields: Vec<(String, JsonType)>,
}

#[derive(Serialize)]
struct JsonFunction {
    package: ObjectID,
    module: String,
    name: String,
    visibility: JsonVisibility,
    entry: bool,
    args: Vec<JsonType>,
    returns: Vec<JsonType>,
    type_parameters: Vec<JsonAbilitySet>,
}

#[derive(Serialize)]
struct JsonType {}

#[derive(Serialize)]
enum JsonVisibility {
    Public,
    Package,
    Private,
}

#[derive(Serialize)]
enum JsonAbilitySet {
    Empty,
    Key,
    Store,
    Copy,
    Drop,
}

/// Write `GlobalEnv` to `environment.json` file.
pub fn run(env: &GlobalEnv, output: &Path) {
    environment(env, output);
}

fn environment_json(env: &GlobalEnv, output: &Path) {
    // let file = &mut File::create(output.join("environment.json"))
    //     .unwrap_or_else(|_| panic!("Unable to create file environment.json in {}", output.display()));
}

fn environment(env: &GlobalEnv, output: &Path) {
    let file = &mut File::create(output.join("environment.txt")).unwrap_or_else(|_| {
        panic!(
            "Unable to create file environment.txt in {}",
            output.display()
        )
    });
    for package in env.packages.iter() {
        let move_package = package.package.as_ref().unwrap();
        write_to!(file, "package {} [{}]", package.id, package.version);
        if let Some(root) = package.root_version {
            write_to!(file, "\tpackage origin: {}", env.packages[root].id);
        };
        write_to!(file, "\ttype origins:");
        package
            .type_origin
            .iter()
            .for_each(|((module, type_), origin)| {
                write_to!(file, "\t\t{}::{} -> {}", module, type_, origin);
            });
        write_to!(file, "\tdependencies:");
        move_package
            .linkage_table()
            .iter()
            .for_each(|(module, version)| {
                write_to!(
                    file,
                    "\t\t{} -> {} [{}]",
                    module,
                    version.upgraded_id,
                    version.upgraded_version.value(),
                );
            });
        write_to!(file, "\tdirect dependencies:");
        package.direct_dependencies.iter().for_each(|version| {
            write_to!(
                file,
                "\t\t{} [{}]",
                env.packages[*version].id,
                env.packages[*version].version,
            );
        });
        write_to!(file, "\tindirect dependencies:");
        package
            .dependencies
            .values()
            .cloned()
            .collect::<BTreeSet<_>>()
            .difference(&package.direct_dependencies)
            .for_each(|dep| {
                write_to!(
                    file,
                    "\t\t{} [{}]",
                    env.packages[*dep].id,
                    env.packages[*dep].version,
                );
            });
        // print modules
        for module_idx in &package.modules {
            let module = &env.modules[*module_idx];
            write_to!(file, "\tmodule {}", env.module_name(module));
            print_structs(env, module, file);
            print_functions(env, module, file);
        }
    }
}

fn print_structs(env: &GlobalEnv, module: &Module, file: &mut File) {
    for struct_idx in &module.structs {
        let struct_ = &env.structs[*struct_idx];
        let abilities = if struct_.abilities != AbilitySet::EMPTY {
            format!("has {}", pretty_abilities(struct_.abilities))
        } else {
            "".to_string()
        };
        if struct_.type_parameters.is_empty() {
            write_to!(
                file,
                "\t\tstruct {} {}",
                env.struct_name(struct_),
                abilities
            );
        } else {
            write_to!(
                file,
                "\t\tstruct {}<{}> {}",
                env.struct_name(struct_),
                struct_
                    .type_parameters
                    .iter()
                    .enumerate()
                    .map(|(idx, abilities)| {
                        let phantom = if abilities.is_phantom { "phantom " } else { "" };
                        if abilities.constraints == AbilitySet::EMPTY {
                            format!("{} {}", phantom, idx)
                        } else {
                            format!(
                                "{}{}: {}",
                                phantom,
                                idx,
                                pretty_abilities(abilities.constraints)
                            )
                        }
                    })
                    .collect::<Vec<_>>()
                    .join(", "),
                abilities,
            );
        }
        for field in &struct_.fields {
            write_to!(
                file,
                "\t\t\t{}: {}",
                env.field_name(field),
                type_name(env, &field.type_),
            );
        }
    }
}
fn print_functions(env: &GlobalEnv, module: &Module, file: &mut File) {
    let (public_entries, public, friend_entry, friend, private_entry, private) =
        module.functions.iter().fold(
            (vec![], vec![], vec![], vec![], vec![], vec![]),
            |(
                mut public_entries,
                mut public,
                mut friend_entry,
                mut friend,
                mut private_entry,
                mut private,
            ),
             func_idx| {
                let func = &env.functions[*func_idx];
                match func.visibility {
                    Visibility::Friend => {
                        if func.is_entry {
                            friend_entry.push(*func_idx);
                        } else {
                            friend.push(*func_idx);
                        }
                    }
                    Visibility::Public => {
                        if func.is_entry {
                            public_entries.push(*func_idx);
                        } else {
                            public.push(*func_idx);
                        }
                    }
                    Visibility::Private => {
                        if func.is_entry {
                            private_entry.push(*func_idx);
                        } else {
                            private.push(*func_idx);
                        }
                    }
                }
                (
                    public_entries,
                    public,
                    friend_entry,
                    friend,
                    private_entry,
                    private,
                )
            },
        );
    public
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));
    public_entries
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));
    friend_entry
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));
    private_entry
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));
    friend
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));
    private
        .iter()
        .for_each(|func_idx| write_function(env, *func_idx, file));

    fn write_function(env: &GlobalEnv, func_idx: FunctionIndex, file: &mut File) {
        let func = &env.functions[func_idx];
        let func_entry = if func.is_entry {
            "entry fun".to_string()
        } else {
            "fun".to_string()
        };
        let func_vis = match func.visibility {
            Visibility::Friend => format!("package {}", func_entry),
            Visibility::Public => format!("public {}", func_entry),
            Visibility::Private => func_entry,
        };
        let params = if func.parameters.is_empty() {
            "".to_string()
        } else {
            func.parameters
                .iter()
                .map(|type_| type_name(env, type_))
                .collect::<Vec<_>>()
                .join(", ")
                .to_string()
        };
        let func_proto = if func.type_parameters.is_empty() {
            format!("\t\t{} {}({})", func_vis, env.function_name(func), params)
        } else {
            format!(
                "\t\t{} {}<{}>({})",
                func_vis,
                env.function_name(func),
                func.type_parameters
                    .iter()
                    .enumerate()
                    .map(|(idx, ability_set)| {
                        if ability_set == &AbilitySet::EMPTY {
                            format!("{}", idx)
                        } else {
                            format!("{}: {}", idx, pretty_abilities(*ability_set))
                        }
                    })
                    .collect::<Vec<_>>()
                    .join(", "),
                params,
            )
        };
        if func.returns.is_empty() {
            write_to!(file, "{}", func_proto);
        } else {
            write_to!(
                file,
                "{}: {}",
                func_proto,
                func.returns
                    .iter()
                    .map(|type_| type_name(env, type_))
                    .collect::<Vec<_>>()
                    .join(", "),
            );
        }
    }
}

fn pretty_abilities(ability_set: AbilitySet) -> String {
    let mut abilities = vec![];
    if ability_set == AbilitySet::EMPTY {
        return "".to_string();
    }
    if ability_set.has_key() {
        abilities.push("key");
    }
    if ability_set.has_store() {
        abilities.push("store");
    }
    if ability_set.has_copy() {
        abilities.push("copy");
    }
    if ability_set.has_drop() {
        abilities.push("drop");
    }
    abilities.join(", ")
}
