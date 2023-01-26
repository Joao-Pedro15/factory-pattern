class UserService {
  constructor({ repository }){
    this.repository = repository
  }

  async findOne(id) {
    const user = await this.repository.findOne(id)
    return user
  }
}