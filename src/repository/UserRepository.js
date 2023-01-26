class UserRepository {
  constructor({ dbConnection }) {
    this.dbConnection = dbConnection
  }

  async findOne(id){
    return this.dbConnection.findOne(id)
  }
}