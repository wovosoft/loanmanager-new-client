export const getTodayYMD = (d = new Date(), separator = "-") => {
    let date = (d.getDate() < 9 ? "0" : "") + d.getDate();
    let m = (d.getMonth() < 9 ? "0" : "") + (1 + d.getMonth());
    return [d.getFullYear(), m, date].join(separator);
}
