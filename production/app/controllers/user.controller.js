const userService = require('../services/user.service');
exports.authenticate = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
};

exports.register = (req, res, next) =>{
  userService
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

exports.getAll = (req, res, next) => {
  console.log(req.userInfo)
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

exports.getCurrent = (req, res, next) =>{
  userService
    .getById(req.user.sub)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

exports.getById = (req, res, next) => {
  userService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

exports.update = (req, res, next) => {
  userService
    .update(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

exports._delete = (req, res, next) => {
  userService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
 