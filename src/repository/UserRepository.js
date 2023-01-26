class UserRepository {
  constructor({ dbConnection }) {
    this.dbConnection = dbConnection
  }

  async find(id){
    return this.dbConnection.find(id)
  }
}

module.exports = UserRepository 