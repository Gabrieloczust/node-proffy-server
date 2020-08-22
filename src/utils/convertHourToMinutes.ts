export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes = (hour * 6) + minutes
    return timeInMinutes
}