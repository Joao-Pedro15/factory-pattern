const UserRepository = require('../repository/UserRepository')
const UserService = require('../service/UserService')

class UserFactory {
  async build() {
    const userRepository = new UserRepository({ dbConnection: 'mongo://localhost' })
    const userService = new UserService({ userRepository })
    return userService
  }
}

module.exports = UserFactory