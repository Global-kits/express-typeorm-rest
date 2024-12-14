

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Express.js with typeorm

[Express](https://github.com/expressjs/express) framework TypeScript starter repository. typeorm and RESTful API.

### Node Version - 20.11.1

## Installation

Install dependencies

```bash
$ npm install
```

## Copy env

.env

```bash
$ cp .env.example .env
```

After that you have to fill env requirements.

## Run development

development

```bash
$ npm run dev
```

## Run with docker

Run docker with build file.

> **_NOTE:_** If you want to connect with your local database. You have to change DATABASE_URL like this.

```bash
$ DATABASE_URL="mysql://youruser:yourpassword@host.docker.internal:3306/yourdatabase"

```

```bash
$ sh docker.sh
```

## Seed fake data

typeorm

```bash
$ npm run seed
```

## Let me know if you have any issues

Please write [here](https://github.com/Global-kits/express-prisma-rest/issues).

## Authors

- [@kaungkhantzaw](https://www.github.com/kaungkhantzawdev)

## License

[MIT](https://choosealicense.com/licenses/mit/)
