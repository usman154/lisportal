class Utils {
  getPagination(page, size, defaultSize = 30) {
    const limit = size ? +size : defaultSize;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  }
  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return { hours, minutes };
  }
}
module.exports = new Utils();
