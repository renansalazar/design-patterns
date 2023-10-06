/**
 * Singleton: Este patron permite crear instancias de un objeto unico para todo el sistema
 */

class Database {
  private static instance: Database
  private constructor () {
    // conexión a DB
    console.log('DB connected')
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

function controller () {
  const connection = Database.getInstance()
  const connection2 = Database.getInstance()
  if (connection && connection2) {
    console.log('Conexión con singleton exitosa')
  } else {
    console.log('Conexión con singleton fallida')
  }
}

controller()