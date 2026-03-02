import dayjs, { Dayjs } from 'dayjs'

class DateUtility {
    static korean_date(date: string) {
        const now = dayjs()
        const target = dayjs(date)

        const betweenTime = Math.floor((now.unix() - target.unix()) / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 31) {
            return `${betweenTimeDay}일전`;
        }

        const betweenTimeMonth = Math.round(betweenTime / 60 / 24 / 31);
        if (betweenTimeMonth < 12) {
            return `${betweenTimeMonth}달전`;
        }

        return `${Math.floor(betweenTimeMonth / 12)}년전`;
    }

    static date_format(date?: string | Date | Dayjs, format: string = 'YYYY-MM-DD') {
        return (date ? dayjs(date) : dayjs()).format(format);
    }
}

export default DateUtility