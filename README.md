<h1 style="text-align:center;">
TRACK COVID-19
</h1>
<div style="text-align:center;">
Next.js app to track <a href="https://covid19.zaironjacobs.com/" target="_blank">COVID-19 data</a>.
</div>
<br>
<div style="text-align:center;">
<img alt="covid19" src="https://i.imgur.com/7GLaNum.png" width="80%">
<br><br>
<img alt="covid19" src="https://i.imgur.com/CrglbUY.png" width=80%">
</div>

## Dependencies
- [COVID-19 Data Fetcher](https://github.com/zaironjacobs/covid19-data-fetcher-python/)
- [COVID-19 API](https://github.com/zaironjacobs/covid19-api-fastapi/)


## Download
```console
$ git clone https://github.com/zaironjacobs/track-covid19
```

## Usage

Copy the file .env.example to .env and fill in the environment variables.
Example:
```
COVID19_API_URL=http://127.0.0.1:8050
```

To use:
```console
$ cd track-covid19
$ npm install
$ npm run build && npm run start
```