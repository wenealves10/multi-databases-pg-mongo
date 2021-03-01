import { ICrud } from './interfaces/interfaceCrud.js'

class Postgres extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Item salved in postgres')
  }
}

export { Postgres }
