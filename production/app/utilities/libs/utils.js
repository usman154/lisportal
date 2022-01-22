class Utils {
  getPagination(page, size, defaultSize = 30) {
    const limit = size ? +size : defaultSize;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  }
}
module.exports = new Utils();
