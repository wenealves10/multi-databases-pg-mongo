import { ContextStrategy } from './db/strategies/base/contextStrategy.js'
import { MongoDB } from './db/strategies/mongodb.js'
import { Postgres } from './db/strategies/postgres.js'

const contextMongoDB = new ContextStrategy(new MongoDB())

contextMongoDB.create()

const contextPostgres = new ContextStrategy(new Postgres())

contextPostgres.create()
