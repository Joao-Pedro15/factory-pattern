class UserService {
  constructor({ repository }){
    this.repository = repository
  }

  async find(id) {
    const users = await this.repository.find(id)
    return users.map(user => ({ ...user, name: user.name.toUpperCase() }))
  }
}

module.exports = UserService