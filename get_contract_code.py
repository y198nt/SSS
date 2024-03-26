import os
import re
from os import makedirs

import requests
from bs4 import BeautifulSoup

contract_addr = "0xdfdcdbc789b56f99b0d0692d14dbc61906d9deed"

r = requests.get(
    "https://blastscan.io/token/" + contract_addr,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.112 Safari/537.36"
    },
)

soup = BeautifulSoup(r.text, "html.parser")

token = soup.select(".media-body > span:nth-child(1)")[0].get_text().strip()
makedirs(token, exist_ok=True)

names = re.findall(r"File \d+ of \d+ : (.*?)<", r.text)
print(names)

sources = soup.find_all("pre", {"id": re.compile(r"editor\d+")})

assert len(names) == len(sources)

for name, source in zip(names, sources):
    with open(os.path.join(token, name), "w") as f:
        f.write(source.string)
        print(name)
