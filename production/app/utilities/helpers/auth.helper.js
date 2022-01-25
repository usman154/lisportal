function isSuperAdmin(req, res, next) {
  const userData = req.userInfo,
  isSuperAdmin = userData.email === "admin@mkcovid19.com";
  if(isSuperAdmin){
      next();
  }else{
      next('Not authorizaed');
  }
}
exports.isSuperAdmin = isSuperAdmin;
