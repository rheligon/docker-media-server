import json
from urllib import request, parse

with open('radarr-custom-formats.json', 'r') as f:
    data = json.load(f)

host = '192.168.1.220:7878'
url = f'http://{host}/api/v3/customformat'
headers = {
    'x-api-key': 'c1add0b532eb49fb8d0ad5b84a3d61f6',
    'Content-Type': 'application/json'
}

for custom_format in data:
    custom_format['id'] = 0
    body = json.dumps(custom_format)
    req = request.Request(url, data=body.encode(), headers=headers)
    response = request.urlopen(req)
    print(response.status)