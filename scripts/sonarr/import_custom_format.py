import json
from urllib import request, parse

# with open('anime-custom-formats.json', 'r') as f:
#     data = json.load(f)

host = '192.168.1.220:8990'
url = f'http://{host}/api/v3/qualityprofile'
headers = {
    'x-api-key': '268656042d6942f5a5814f16e5136a95',
    'Content-Type': 'application/json'
}

# for custom_format in data:
    # custom_format['id'] = 0
    # body = json.dumps(custom_format)
req = request.Request(url, None, headers=headers, method="get")
response = request.urlopen(req)

data = response.read().decode('utf-8')

# Parse the data as JSON and save to a file
parsed = json.loads(data)

with open('response.json', 'w') as json_file:
    json.dump(parsed, json_file, indent=4)