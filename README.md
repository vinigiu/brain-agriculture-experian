## Installation

```bash
$ npm install
```

## Running Docker

```bash
$ docker compose up -d
```

## Prisma Commands

Reads the `schema.prisma` file and updates the generated Prisma Client inside `node_mocules/@prisma/client`
```bash
$ npm run generate
```

Reads the `schema.prisma` file, create and execute a migration
```bash
$ npx prisma migration dev --{name} init
```

Seed the database
```bash
$ npm run seed
```

Generates a Prisma Interface
```bash
$ npm run studio
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
