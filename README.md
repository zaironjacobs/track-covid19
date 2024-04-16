# Track COVID-19

<div>
    <img alt="covid19" src="https://i.imgur.com/X8iwgOV.png" width="95%">
</div>

## Dependencies

- [Node.js >= 14](https://nodejs.org)
- [COVID-19 Data Fetcher](https://github.com/zaironjacobs/covid19-data-fetcher/)
- [COVID-19 API](https://github.com/zaironjacobs/covid19-api/)

## Usage

Copy the file .env.local.example to .env.local and fill in the environment variables. Example:

```
COVID19_API_URL=http://127.0.0.1:8050
```

## Install

```bash
npm install
npm run build
```

## Run

```console
npm run start -- -p [PORT_NUMBER]
```
