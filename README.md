## Installation

```bash
$ npm install
```

## Running Docker
- The Postgres DB will be running on a docker container. To start it, run:

```bash
$ docker compose up -d
```

## Prisma Commands
- To config the DB, run this sequence of commands: 
```bash
$ npm run generate
```
Reads the `schema.prisma` file and updates the generated Prisma Client inside `node_mocules/@prisma/client`

```bash
$ npx prisma migrate dev --name {InsertAMigrationNameInThisFormat} init
```
Reads the `schema.prisma` file, create and execute a migration

```bash
$ npm run migrate:deploy
```
Run all undeployed migrations

```bash
$ npm run seed
```
Seed the database

- If you want to access a graphical interface of your DB, run:
```bash
$ npm run studio
```
Generates a Prisma Interface

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

```

## Documentation

- When the app is running, access http://localhost:3333/api-docs if you're running it locally or ____ to access it on deployed environment

## License

Nest is [MIT licensed](LICENSE).
