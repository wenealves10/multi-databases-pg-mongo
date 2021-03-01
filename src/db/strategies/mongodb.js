import { ICrud } from './interfaces/interfaceCrud.js'

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Item salved in mongodb')
  }
}

export { MongoDB }
