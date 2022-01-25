const config = require("../config/settings.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete 
};

async function authenticate({ email, password }) {
  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.toObject().hash)) {
    const token = jwt.sign(user.toJSON(), config.secret, {
      expiresIn: "7d",
    });
    return {
      ...user.toJSON(),
      token,
    };
  }
}
 

async function getAll() {
  return await User.find({ email: { $ne: "admin@mkcovid19.com" } });
}

async function getById(id) {
  return await User.findById(id);
}

async function create(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  const user = userParam;

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }
  return await new User(user).save();
}

async function update(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw "User not found";
  if (
    user.email !== userParam.email &&
    (await User.findOne({ username: userParam.email }))
  ) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }else{
    delete userParam.password;
  }

  // copy userParam properties to user
  Object.assign(user, userParam);
  return await User.findByIdAndUpdate(id, userParam);
  
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
