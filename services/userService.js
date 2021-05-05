export default class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getAllUsers() {
    // const allUsers = await this.userModel.getAll();

    const allUsers = [
      { id: 1, name: 'nitzan1' },
      { id: 2, name: 'nitzan2' },
      { id: 3, name: 'nitzan3' },
    ]

    return allUsers;
  }
}