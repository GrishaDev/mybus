// Gets rule and subtracts minutes from it.
const subtractMinutes = (rule, minutes) => {
    let date = new Date();
    date.setHours(rule.hour);
    date.setMinutes(rule.minute);

    date = date.getTime() - minutes * 60000;
    date = new Date(date);
    // return { hour: date.getHours(), minute: date.getMinutes() };
    rule.hour = date.getHours();
    rule.minute = date.getMinutes();
    return rule;
}

module.exports = subtractMinutes;