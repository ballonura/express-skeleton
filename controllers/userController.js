import UserService from '../services/userService.js';
import userModel from '../models/userModel.js';
const userService = new UserService(userModel);

export default class UserController {
  async getUserList(req, res, next) {
    const allUsers = await userService.getAllUsers();
    res.json(allUsers)
  }
}