import { uManager } from "../dao/users.dao.js";
import { hashData } from "../utils.js";

/* export const findAll = () => {
  const users = uManager.getAll();
  return users;
}; */

export const findById = (id) => {
  const user = uManager.findUserByID(id);
  return user;
};

export const findByEmail = (id) => {
    const user = uManager.findUserByEmail(id);
    return user;
  };

export const createOne = (obj) => {
  const hashedPassword = hashData(obj.password);
  const newObj = { ...obj, password: hashedPassword };
  const createdUser = uManager.createUser(newObj);
  return createdUser;
};