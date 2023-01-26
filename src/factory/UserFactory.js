const UserRepository = require('../repository/UserRepository')
const UserService = require('../service/UserService')
const Database = require('../utils/Database')

class UserFactory {
  async build() {
    const db = new Database({ connectionString: 'mongodb://localhost' })
    const dbConnection = await db.connect()
    const userRepository = new UserRepository({ dbConnection })
    const userService = new UserService({ userRepository })
    return userService
  }
}

module.exports = UserFactory