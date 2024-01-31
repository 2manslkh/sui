window.BENCHMARK_DATA = {
  "lastUpdate": 1706731533712,
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
      }
    ]
  }
}