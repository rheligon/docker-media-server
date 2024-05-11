import json
from urllib import request, parse

with open('radarr-quality-profile.json', 'r') as f:
    data = json.load(f)

host = '192.168.1.220:7878'
url = f'http://{host}/api/v3/qualityprofile'
headers = {
    'x-api-key': 'c1add0b532eb49fb8d0ad5b84a3d61f6',
    'Content-Type': 'application/json'
}

body = json.dumps(data)
req = request.Request(url, data=body.encode(), headers=headers)
response = request.urlopen(req)
print(response.status)