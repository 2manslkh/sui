window.BENCHMARK_DATA = {
  "lastUpdate": 1706691512033,
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
      }
    ]
  }
}