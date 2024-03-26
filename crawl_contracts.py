#!/usr/bin/env python

import json
import os
import sys

import requests

SAVE_PATH = "./sources"


def parse_contracts(contracts):
    for source, addr in zip(contracts["result"], contracts["sourceInfo"]):
        contract_name = contracts["sourceInfo"][addr]["contractName"]
        os.makedirs(contract_name)

        for file in source["sources"]:
            source_path = file["sourcePath"]
            os.makedirs(os.path.join(contract_name, os.path.dirname(source_path)), exist_ok=True)

            full_source_path = os.path.join(contract_name, source_path)
            with open(full_source_path, "w") as f:
                f.write(file["source"])

            print(full_source_path)


# https://app.sentio.xyz/api/v1/solidity/fetch_and_compile?networkId=81457&txId.txHash=0x80012bf784b83baaf28f5549a9f233cae5f70be7afcd8f594dc757d431ed93c4&sourceOnly=true

if len(sys.argv) != 3:
    print("Usage: ./crawl_contracts.py <networkId> <txId.txHash>")
    sys.exit()

# params = {
#     "networkId": 81457,
#     "txId.txHash": "0x80012BF784B83BAAF28F5549A9F233CAE5F70BE7AFCD8F594DC757D431ED93C4",
#     "sourceOnly": True,
# }

params = {"networkId": sys.argv[1], "txId.txHash": sys.argv[2], "sourceOnly": True}

r = requests.get("https://app.sentio.xyz/api/v1/solidity/fetch_and_compile", params)
content = r.json()

os.makedirs(SAVE_PATH, exist_ok=True)
os.chdir(SAVE_PATH)

with open(params["txId.txHash"] + ".json", "w") as f:
    json.dump(content, f, indent=4)

parse_contracts(content)
