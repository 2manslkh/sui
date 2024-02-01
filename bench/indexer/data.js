window.BENCHMARK_DATA = {
  "lastUpdate": 1706750978590,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f7ad3afc1c395239d6a8406a8c327c13c20d2c7",
          "message": "[Consensus] add network interface (#15994)\n\n## Description \r\n\r\nAdd the minimum network traits. In the beginning, implementations of the\r\ntraits will just wrap anemo unicast RPCs. Later, streaming and\r\nconnection management logic can be added inside `NetworkClient` and\r\n`NetworkServer` implementations.\r\n\r\n## Test Plan \r\n\r\nn/a\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T02:16:48Z",
          "tree_id": "fc5dc184b0cd1ac1d603dbe1af875b9311f2cc26",
          "url": "https://github.com/MystenLabs/sui/commit/6f7ad3afc1c395239d6a8406a8c327c13c20d2c7"
        },
        "date": 1706667861384,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 357486,
            "range": "± 25545",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2677541836f2b79bdcc9531a13053b9000f3cf36",
          "message": "move: use source package layout to resolve Move.lock path (#16017)\n\n## Description \r\n\r\nTidying up some lock file logic and spotted this\r\n\r\n## Test Plan \r\n\r\nCovered by existing tests\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-30T21:18:01-08:00",
          "tree_id": "d9f7a9c0eed473d5dc029f126c8bb301acc29cad",
          "url": "https://github.com/MystenLabs/sui/commit/2677541836f2b79bdcc9531a13053b9000f3cf36"
        },
        "date": 1706678714660,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 315316,
            "range": "± 25612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "135084671+stefan-mysten@users.noreply.github.com",
            "name": "stefan-mysten",
            "username": "stefan-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a7c5b33a5228a26f2a5d63b1efe8842e0b153c6",
          "message": "[graphql] Improve the health check (#16016)\n\n## Description \r\n\r\nImprove the health check by removing the query to the DB and replacing\r\nit with a status code 200 if all is OK, or 500 on error. It also cleans\r\nup the previous health check checks in the logging logic.\r\n\r\nIt also moves metrics and connection under a `AppState` struct as `axum`\r\ndoes not allow states with different types on the router, so we need to\r\nbundle them under one state and then have `FromRef` implementations for\r\nthe substates.\r\n\r\n## Test Plan \r\n\r\nExisting tests, manually analyzing the logs.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T05:32:48Z",
          "tree_id": "f6ac748504b8bdce897f90eaeb29d1dc53b03f09",
          "url": "https://github.com/MystenLabs/sui/commit/5a7c5b33a5228a26f2a5d63b1efe8842e0b153c6"
        },
        "date": 1706679616908,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 362886,
            "range": "± 16403",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6cd39fceda9b44d56614d1dd6a39340593ae6e4c",
          "message": "[GraphQL] implement some missing fields (#15993)\n\n## Description \r\n\r\nImplement missing fields from the schema including:\r\n- StakedSui's pool id\r\n- epoch total transactions\r\n- a number of fields in ValidatorSet\r\n- liveObjectDigest to Epoch\r\n\r\n## Test Plan \r\n\r\nAdded to existing tests.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-30T23:34:17-08:00",
          "tree_id": "7904089e86d9fe629c4e8e7a2c947cc7db1a2335",
          "url": "https://github.com/MystenLabs/sui/commit/6cd39fceda9b44d56614d1dd6a39340593ae6e4c"
        },
        "date": 1706686909088,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 396199,
            "range": "± 25678",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112846738+benr-ml@users.noreply.github.com",
            "name": "benr-ml",
            "username": "benr-ml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de3c158b8a88c8a214d8b61f4cb1c4eb37c99e08",
          "message": "Expose EC APIs for BLS12-381 (#12337)\n\n## Description \r\nAdd Move modules for BLS12-381 group operations.\r\nRistretto group operations can be added in the future (tested in\r\nhttps://github.com/MystenLabs/sui/tree/ben/ecops_rist).\r\nEnabled in devnet only.\r\n\r\n## Test Plan \r\nExisting and many newly added tests.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nAdd Move modules for BLS12-381 group operations (allowing developers to\r\nimplement cryptographic protocols directly in Move). Enabled in devnet\r\nonly.",
          "timestamp": "2024-01-31T10:48:59+02:00",
          "tree_id": "748c197111ad2cdf1e5daa8adc3ce56ef747a837",
          "url": "https://github.com/MystenLabs/sui/commit/de3c158b8a88c8a214d8b61f4cb1c4eb37c99e08"
        },
        "date": 1706691508122,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 347145,
            "range": "± 20970",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7dba3620093942cfd5de7d90761b87529bbf262",
          "message": "[GraphQL/Docs][RFC] Move GraphQL References out from Sui API heading (#16019)\n\n## Description\r\n\r\nCreate distinct top-level headings under \"References\" for \"Sui JSON-RPC\r\nAPI\" and \"Sui GraphQL API\". This was to avoid a couple of confusing\r\naspects of the previous IA:\r\n\r\n- It was unclear when reading \"Sui API\" what that was referring to\r\n(GraphQL or JSON-RPC).\r\n- The \"RPC Best Practices\" page (intended for JSON-RPC) was confusingly\r\nnext to the GraphQL references.\r\n\r\n## Test Plan\r\n\r\n```\r\ndocs/site$ pnpm build && pnpm start\r\n```\r\n\r\n+ :eyes:",
          "timestamp": "2024-01-31T12:08:13Z",
          "tree_id": "b17c6e7e2dd3ef05b2823906bc198dbc2613f9fa",
          "url": "https://github.com/MystenLabs/sui/commit/a7dba3620093942cfd5de7d90761b87529bbf262"
        },
        "date": 1706703451864,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 364319,
            "range": "± 31163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "147538877+pei-mysten@users.noreply.github.com",
            "name": "pei-mysten",
            "username": "pei-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c9417482cd7cceae006811e403693d0f4ac05f",
          "message": "[suiop-cli] check go installation and run go mod tidy by default (#15975)\n\n## Description \r\n\r\nsuiop-cli should:\r\n1. check whether Go is installed\r\n2. run `go mod tidy` by default after creating a new pulumi project\r\n3. print out the `pulumi new` command for easier debugging\r\n\r\n## Test Plan \r\nran `suiop pulumi init --app` locally and seeing expected output\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T08:41:23-08:00",
          "tree_id": "d07575e9a0a4fb4496e4fc8d24b41067e81ebfd6",
          "url": "https://github.com/MystenLabs/sui/commit/18c9417482cd7cceae006811e403693d0f4ac05f"
        },
        "date": 1706720392191,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 368438,
            "range": "± 25560",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "halfprice@users.noreply.github.com",
            "name": "Zhe Wu",
            "username": "halfprice"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a732934a7250391afbf777b6d5a73e54278ed9d",
          "message": "Remove unused scoped_counter (#15964)\n\n## Description \r\n\r\nNot sure if this is necessary.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T08:47:24-08:00",
          "tree_id": "e24ac0f179ec500b3b49ad7e93632232950242b7",
          "url": "https://github.com/MystenLabs/sui/commit/2a732934a7250391afbf777b6d5a73e54278ed9d"
        },
        "date": 1706720643987,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 354748,
            "range": "± 18081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1db774591e06159b471e902db114109fefe65d3c",
          "message": "[shared-object-deletion] Turn on shared object deletion in mainnet (#16008)\n\n## Description \r\n\r\nTurn on shared object deletion in mainnet. This is a flag-only PR (+\r\nupdates) that adds a new protocol version (version 36).\r\n\r\n## Test Plan \r\n\r\nExisting tests + has been running in devnet/testnet for the past couple\r\nmonths.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [X] protocol change\r\n- [X] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nEnable shared object deletion in mainnet.",
          "timestamp": "2024-01-31T17:22:41Z",
          "tree_id": "b5f310fdbba9c3d68c55a40ffb5a1c24ee228715",
          "url": "https://github.com/MystenLabs/sui/commit/1db774591e06159b471e902db114109fefe65d3c"
        },
        "date": 1706722202739,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 365343,
            "range": "± 44188",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c045478b951a2610f62f60a2e73a7a209d3f7c4",
          "message": "Fix simtest determinism (#16029)",
          "timestamp": "2024-01-31T11:57:15-08:00",
          "tree_id": "6de7fae0b287c82fd0ad53ee54a4948a9ff530d7",
          "url": "https://github.com/MystenLabs/sui/commit/7c045478b951a2610f62f60a2e73a7a209d3f7c4"
        },
        "date": 1706731529716,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 356916,
            "range": "± 30294",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kklas@users.noreply.github.com",
            "name": "Krešimir Klas",
            "username": "kklas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b2847fca5ef7d4d64bf5517c83864d091c3c128",
          "message": "move-package: make `nested_deps_git_local` use sui repo for dep (#16023)\n\n## Description \r\n\r\nForgot this yesterday with the nits. It's related to this\r\nhttps://github.com/MystenLabs/sui/pull/15867/files/3ee2e7f1df0cfea267a0b25896b46a5d6c61629b#r1466324788\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\nN/A\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T12:11:07-08:00",
          "tree_id": "213a78847e2de2067e71347393d50e2ae84d0639",
          "url": "https://github.com/MystenLabs/sui/commit/8b2847fca5ef7d4d64bf5517c83864d091c3c128"
        },
        "date": 1706732293968,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 381537,
            "range": "± 29441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2250c8681d52dcbc5a06a34f60a81d96f102091",
          "message": "[easy][sui-package-resolver] Switch package resolver tests to using insta test for expected value tests (#16030)\n\n## Description \r\n\r\nConverts the expected value tests in the sui-package-resolver crate to\r\nusing insta test. This makes it easier to update/review and also to have\r\nlarger resolution tests.\r\n\r\nNote that I kept alternate display formatting for the layouts since that\r\nmakes things easier to read in the snapshots.\r\n\r\n## Test Plan \r\n\r\nMake sure existing tests pass, and that the new expected insta snapshots\r\nmatch the old ones.",
          "timestamp": "2024-01-31T20:41:19Z",
          "tree_id": "1c8547b5864cbcdc1f13ea1908baf2629b13d152",
          "url": "https://github.com/MystenLabs/sui/commit/f2250c8681d52dcbc5a06a34f60a81d96f102091"
        },
        "date": 1706734125169,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 357291,
            "range": "± 18765",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bbd4cf05a584072ed61b038034de155ba815f19",
          "message": "move: tidy lock file header read interface (#16015)\n\n## Description \r\n\r\nJust a cleanup of how we do lock file header reads. See separate commits\r\nfor a breakdown of the change, and inline comments for more.\r\n\r\nFollow up of\r\nhttps://github.com/MystenLabs/sui/pull/15751#pullrequestreview-1829957061.\r\n\r\n## Test Plan \r\n\r\nShould not be changing anything functionally, covered by existing tests.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T20:41:38Z",
          "tree_id": "51a91bd371b07432edc68b04c22fc931536dae03",
          "url": "https://github.com/MystenLabs/sui/commit/5bbd4cf05a584072ed61b038034de155ba815f19"
        },
        "date": 1706734289239,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 359416,
            "range": "± 36807",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97870774+arun-koshy@users.noreply.github.com",
            "name": "Arun Koshy",
            "username": "arun-koshy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92c7d112c2148ebaec01f0e0013b5bf4e4e61772",
          "message": "[consensus] Add universal committer (#15839)\n\n## Description\r\nThe `UniversalCommitter` uses a collection of `BaseCommitter`'s to\r\ncommit a sequence of leaders. It will be configured to enable\r\nmulti-leader & pipelining in Mysticeti.\r\n\r\nNote: Feel free to ignore test util changes as most of that will be\r\nreviewed and checked in with\r\n[PR#15806](https://github.com/MystenLabs/sui/pull/15806)\r\n\r\n## Test Plan\r\nAdded a few basic tests to ensure things are working, but will add more\r\ntests in a follow up PR so this PR can remain small.",
          "timestamp": "2024-01-31T13:02:44-08:00",
          "tree_id": "662da848565f932ef2b1d5c774718d817c9c62bc",
          "url": "https://github.com/MystenLabs/sui/commit/92c7d112c2148ebaec01f0e0013b5bf4e4e61772"
        },
        "date": 1706735420924,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 355192,
            "range": "± 20717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "860bfed2cd32e0b69c0dd89ef43b9343f74e5a2f",
          "message": "[gql][consistent-reads][n/n] Implement consistent reads (#15913)\n\n## Description \r\n\r\nThe top-level commit of a stack of PRs for ensuring that a `GraphQL`\r\nquery is consistent from its root to leaf. To do so, we thread a\r\n`checkpoint_viewed_at: Option<u64>` field through each `GraphQL` type.\r\nThis field is populated when a type is resolved and when a cursor is\r\nbuilt. This field needs to be on cursors as well, so that when\r\npaginating through a connection, we can lock the pagination queries to a\r\nspecific checkpoint in time.\r\n\r\nA few queries to demonstrate:\r\n```\r\n{\r\n  transactionBlock(digest:\"digest\"){\r\n    sender {\r\n      objects {\r\n        nodes {\r\n          address, version\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n```\r\nThe query is made at checkpoint 10, thus `checkpoint_viewed_at=10`. The\r\nnested `objects` field inherits `checkpoint_viewed_at=10`.\r\n\r\n```\r\n{\r\n  object(address: \"address\", version: 10) {\r\n    owner {\r\n      ... on AddressOwner {\r\n        owner {\r\n          objects {\r\n            nodes {\r\n              digest\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n```\r\nSimilarly, the nested owner and objects all inherit\r\n`checkpoint_viewed_at=10`.\r\n\r\n```\r\nquery {\r\n  address(address: \"...\") {\r\n    coins(type: \"0x2::sui::SUI\") {\r\n      nodes { \r\n        owner {\r\n          ... on AddressOwner {\r\n            owner { asAddress { balance(type: \"0x2::sui::SUI\") { totalBalance } } }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n```\r\nIf `checkpoint_viewed_at=10`, then each coin result will yield an owner\r\nthat inherits `checkpoint_viewed_at=10`. Subsequently, each balance\r\nresult reflects the owner's balance at checkpoint 10.\r\n\r\n```\r\nquery {\r\n  address(address: \"...\") {\r\n    coins(type: \"0x2::sui::SUI\", cursor:\"checkpoint=10\") {\r\n      nodes { \r\n        owner {\r\n          ... on AddressOwner {\r\n            owner { asAddress { balance(type: \"0x2::sui::SUI\") { totalBalance } } }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n```\r\nSome time later, the user makes another query using a cursor from the\r\nfirst query. Now, `checkpoint_viewed_at=20`. When we hit the coins\r\nconnection field, `checkpoint_viewed_at` is set to `10`, and this value\r\nis inherited by the rest of the children.\r\n\r\n\r\n\r\n## Stack\r\nThis stack adds consistent context to the remaining types, and completes\r\nthe consistency framework.\r\nhttps://github.com/MystenLabs/sui/pull/16006\r\nhttps://github.com/MystenLabs/sui/pull/15996\r\nhttps://github.com/MystenLabs/sui/pull/15962\r\nhttps://github.com/MystenLabs/sui/pull/15961\r\nhttps://github.com/MystenLabs/sui/pull/15960\r\nhttps://github.com/MystenLabs/sui/pull/15959\r\n\r\nThis stack implements historical queries for `Object` and its subtypes.\r\nIt also sets up a nascent framework for supporting consistent reads.\r\nhttps://github.com/MystenLabs/sui/pull/15967\r\nhttps://github.com/MystenLabs/sui/pull/15958\r\nhttps://github.com/MystenLabs/sui/pull/15963\r\nhttps://github.com/MystenLabs/sui/pull/15932\r\nhttps://github.com/MystenLabs/sui/pull/15931\r\nhttps://github.com/MystenLabs/sui/pull/15915\r\nhttps://github.com/MystenLabs/sui/pull/15914\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T13:26:51-08:00",
          "tree_id": "f3810eb509d6a4a6473c96379bf79a28a2e62a32",
          "url": "https://github.com/MystenLabs/sui/commit/860bfed2cd32e0b69c0dd89ef43b9343f74e5a2f"
        },
        "date": 1706736834906,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 347421,
            "range": "± 20799",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0186d01efd4839c6eba5837dada7eb3c07afbe70",
          "message": "[move] Warn on unknown attributes  (#15744)\n\n## Description \r\n\r\n- Move will now warn on unknown attributes \r\n- To help with this, I refactored `lint_allow` and any `<prefix>_allow`\r\nto `allow(<prefix>(_))`. Though to not break everyone's code, I still\r\nsupport `lint_allow`, but manually.\r\n- Added a warning about unused `#[verify_only]`. Originally, I removed\r\nthe filtering and made this an error, but that felt too invasive for\r\nanyone using it previously.\r\n\r\n## Test Plan \r\n\r\n- Added new tests\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [X] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nMove's `#[lint_allow(_)]` annotations can now be written as\r\n`#[allow(lint(_))]` and can be grouped with other `#[allow(_)]`\r\nannotations.\r\nMove will now warn for any unknown attributes.",
          "timestamp": "2024-01-31T21:50:05Z",
          "tree_id": "d9d30386cb7ff5da0412b11330bb2714ff7b96e3",
          "url": "https://github.com/MystenLabs/sui/commit/0186d01efd4839c6eba5837dada7eb3c07afbe70"
        },
        "date": 1706738251553,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 378594,
            "range": "± 29839",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rvantonder@gmail.com",
            "name": "Rijnard van Tonder",
            "username": "rvantonder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4acefbd67c6adec6ea18d68fb43be9d2f20aee06",
          "message": "move: pause tracking a package in config.toml (#16032)\n\n## Description \r\n\r\nThe source for this package is moving on the `master` branch\r\nhttps://github.com/kunalabs-io/sui-smart-contracts/commit/e6fcbd69ed330de2824abb45c876f4b360923de2\r\nwhich shouldn't happen when we're tracking it for bytecode verification.\r\nWhen it moves, but the published address stays the same, the bytecode no\r\nlonger matches upstream and the service pauses.\r\n\r\nI'll get in touch with package maintainers to figure out how we can pin\r\nthe source to a branch that doesn't move or is being actively developed\r\nagainst, and will then re-enable.\r\n\r\n## Test Plan \r\n\r\nN/A, maintaining source service.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2024-01-31T22:40:48Z",
          "tree_id": "a3dbdb9ee15aaf0a89680f1afd32217f57cbd498",
          "url": "https://github.com/MystenLabs/sui/commit/4acefbd67c6adec6ea18d68fb43be9d2f20aee06"
        },
        "date": 1706741306036,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 347689,
            "range": "± 22630",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@mystenlabs.com",
            "name": "Adam Welc",
            "username": "awelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6c87565bbcfdfec4b5b54a305d58fe29895f948",
          "message": "[move-compiler] Parsing error recovery for top-level definitions (#15794)\n\n## Description \r\n\r\nThis PR attempts to provide error recovery during parsing for top-level\r\nmodule definitions.\r\n\r\nConceptually what we want is to stop parsing a top-level definition if a\r\nparsing error has been encountered, skip this top-level definition\r\naltogether, and move on to parsing the next one.\r\n\r\nThe challenge is in the \"skipping\" part - how do we \"reset\" parser to\r\nthe right state so that it can start parsing the next top-level\r\ndefinition.\r\n\r\nThe idea is as follows. When encountering a parsing error when parsing\r\nany top-level definition, we keep advancing the parser until we see the\r\nbeginning of the next definition (e.g., `#` starting attributes list,\r\n`fun` keyword, `const` keyword, etc.). Then we resume parsing and\r\neventually return a partially complete parsed AST.\r\n\r\nOne wrinkle here is what happens when more than one module is defined in\r\nthe same file, and the definition of the previous module ends in a\r\nparsing error:\r\n```\r\nmodule ParseError::M3 {\r\n    const c: u64 = 7;\r\n\r\n    const d\r\n}\r\n\r\n#[test]\r\nmodule ParseError::M4 {\r\n    const c: u64 = 7;\r\n}\r\n```\r\nUpon encountering parsing error at the end of `M3` we would keep\r\nadvancing the parser searching of the next top-level definition in `M3`.\r\nThis would not be a problem if `M3` was the only module defined in a\r\nfile as the parser would eventually encounter EOF and quit.\r\n\r\nAs it happens, it's not a big problem even if `M3` is succeeded by `M4.\r\nThe parser will encounter start of attributes definition for `M4`. It\r\nwill \"think\" it's another top-level definition of `M3` and try to parse\r\nit. It will fail upon encountering the `module` keyword, but it will be\r\nin the correct place to simply finish parsing `M3` and start parsing\r\n`M4` (with optional attributes that have to be kept on the side for\r\nthis).\r\n\r\n## Test Plan \r\n\r\nTests have been updated and new tests added.\r\n\r\n---\r\nIf your changes are not user-facing and do not break anything, you can\r\nskip the following section. Otherwise, please briefly describe what has\r\nchanged under the Release Notes section.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] protocol change\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nDevelopers may see more compiler diagnostics than before as parsing\r\nerrors no longer stop compilation and diagnostics from later compilation\r\nstages my get included as well in the compilation result.",
          "timestamp": "2024-01-31T17:19:36-08:00",
          "tree_id": "cc19b4eec53532177dca6fc4dcd909844c52b493",
          "url": "https://github.com/MystenLabs/sui/commit/c6c87565bbcfdfec4b5b54a305d58fe29895f948"
        },
        "date": 1706750975227,
        "tool": "cargo",
        "benches": [
          {
            "name": "get_checkpoint",
            "value": 374327,
            "range": "± 26874",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}