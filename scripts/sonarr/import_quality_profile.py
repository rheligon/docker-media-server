import json
from urllib import request, parse

with open('anime-quality-profile.json', 'r') as f:
    data = json.load(f)

host = '192.168.1.220:8989'
url = f'http://{host}/api/v3/qualityprofile'
headers = {
    'x-api-key': '76b16bd6e287490290d1692709e25215',
    'Content-Type': 'application/json'
}

# for custom_format in data:
data['id'] = 0
body = json.dumps(data)
req = request.Request(url, data=body.encode(), headers=headers)
response = request.urlopen(req)
print(response.status)