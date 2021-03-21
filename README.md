<h1 align="center">
<a href="https://covid19.zaironjacobs.com/" target="_blank">TRACK COVID-19</a>
</h1>
<br>
<div align="center">
<img alt="covid19" src="https://i.imgur.com/eTDkaMK.png" width="95%">
</div>

## Dependencies
- [Node.js >= 14](https://nodejs.org)
- [COVID-19 Data Fetcher](https://github.com/zaironjacobs/covid19-data-fetcher/)
- [COVID-19 API](https://github.com/zaironjacobs/covid19-api/)


## Download
```console
$ git clone https://github.com/zaironjacobs/track-covid19
```

## Usage
Copy the file .env.local.example to .env.local and fill in the environment variables.
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
