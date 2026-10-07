# Service station

App for service station to manage of micro business

## Stack

- Vue
- Vite
- Bootstrap

## Deploy local

```bash
yarn install
docker build -t servise-station .
docker run -itd -p 3000:3000 -v $PWD:/app --name service-station service-station
```
