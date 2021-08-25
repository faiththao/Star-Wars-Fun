import dayjs from 'dayjs'

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs)
    const nowDayjs = dayjs();
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    }
}

console.log(dayjs(1659983662000))
console.log(dayjs())

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padZeros(seconds, 2)
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padZeros(minutes, 2)
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 12;
    return padZeros(hours, 2)
}

function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString()
}

function padZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString
}