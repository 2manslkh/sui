window.BENCHMARK_DATA = {
  "lastUpdate": 1706678718755,
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
      }
    ]
  }
}