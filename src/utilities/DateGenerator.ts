const MONDAY = 'Monday';
const TUESDAY = 'Tuesday';
const WEDNESDAY = 'Wednesday';
const THURSDAY = 'Thursday';
const FRIDAY = 'Friday';
const SATURDAY = 'Saturday';
const SUNDAY = 'Sunday';

export interface Dates {
    first: number[];
    second: number[];
    third: number[];
    fourth: number[];
    fifth: number[];
    sixth: number[];
}

export class DateGenerator {
    
    public dayFriendlyName(day: number): string {
        switch (day) {
            case 1: return MONDAY;
            case 2: return TUESDAY;
            case 3: return WEDNESDAY;
            case 4: return THURSDAY;
            case 5: return FRIDAY;
            case 6: return SATURDAY;
            case 0: return SUNDAY;
            default: return '';
        }
    }

    public getDates(date: Date): Dates {
        const dates: Dates = {
            first: this.getFirstSevenDates(date),
            second: this.getSecondSevenDates(date),
            third: this.getThirdSevenDates(date),
            fourth: this.getFourthSevenDates(date),
            fifth: this.getFifthSevenDates(date),
            sixth: this.getSixthSevenDates(date)
        }
        return dates;
    }

    private getDayDatePairs(date: Date): Map<number, string> {
        const year = date.getFullYear();
        const month = date.getMonth();
        const newDate = new Date(year, month, 1);
        const pairs = new Map<number, string>();
        while (newDate.getMonth() === month) {
            const dd = newDate.getDate();
            const day = this.dayFriendlyName(newDate.getDay());
            pairs.set(dd, day);
            newDate.setDate(newDate.getDate() + 1);
        }
        return pairs;
    }

    private getFirstSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const day = pairs.get(1);
        switch (day) {
            case MONDAY: return [1, 2, 3, 4, 5, 6, 7];
            case TUESDAY: return [0, 1, 2, 3, 4, 5, 6];
            case WEDNESDAY: return [0, 0, 1, 2, 3, 4, 5];
            case THURSDAY: return [0, 0, 0, 1, 2, 3, 4];
            case FRIDAY: return [0, 0, 0, 0, 1, 2, 3];
            case SATURDAY: return [0, 0, 0, 0, 0, 1, 2];
            case SUNDAY: return [0, 0, 0, 0, 0, 0, 1];
            default: return [0, 0, 0, 0, 0, 0, 0];
        }
    }

    private getSecondSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const day = pairs.get(8);
        switch (day) {
            case MONDAY: return [8, 9, 10, 11, 12, 13, 14];
            case TUESDAY: return [7, 8, 9, 10, 11, 12, 13];
            case WEDNESDAY: return [6, 7, 8, 9, 10, 11, 12];
            case THURSDAY: return [5, 6, 7, 8, 9, 10, 11];
            case FRIDAY: return [4, 5, 6, 7, 8, 9, 10];
            case SATURDAY: return [3, 4, 5, 6, 7, 8, 9];
            case SUNDAY: return [2, 3, 4, 5, 6, 7, 8];
            default: return [0, 0, 0, 0, 0, 0, 0];
        }
    }

    private getThirdSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const day = pairs.get(15);
        switch (day) {
            case MONDAY: return [15, 16, 17, 18, 19, 20, 21];
            case TUESDAY: return [14, 15, 16, 17, 18, 19, 20];
            case WEDNESDAY: return [13, 14, 15, 16, 17, 18, 19];
            case THURSDAY: return [12, 13, 14, 15, 16, 17, 18];
            case FRIDAY: return [11, 12, 13, 14, 15, 16, 17];
            case SATURDAY: return [10, 11, 12, 13, 14, 15, 16];
            case SUNDAY: return [9, 10, 11, 12, 13, 14, 15];
            default: return [0, 0, 0, 0, 0, 0, 0];
        }
    }

    private getFourthSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const day = pairs.get(22);
        switch (day) {
            case MONDAY: return [22, 23, 24, 25, 26, 27, 28];
            case TUESDAY: return [21, 22, 23, 24, 25, 26, 27];
            case WEDNESDAY: return [20, 21, 22, 23, 24, 25, 26];
            case THURSDAY: return [19, 20, 21, 22, 23, 24, 25];
            case FRIDAY: return [18, 19, 20, 21, 22, 23, 24];
            case SATURDAY: return [17, 18, 19, 20, 21, 22, 23];
            case SUNDAY: return [16, 17, 18, 19, 20, 21, 22];
            default: return [0, 0, 0, 0, 0, 0, 0];
        }
    }

    private getFifthSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const day = pairs.get(29);
        const daysCount = pairs.size;
        if (daysCount === 29) {
            switch (day) {
                case MONDAY: return [29, 0, 0, 0, 0, 0, 0];
                case TUESDAY: return [28, 29, 0, 0, 0, 0, 0];
                case WEDNESDAY: return [27, 28, 29, 0, 0, 0, 0];
                case THURSDAY: return [26, 27, 28, 29, 0, 0, 0];
                case FRIDAY: return [25, 26, 27, 28, 29, 0, 0];
                case SATURDAY: return [24, 25, 26, 27, 28, 29, 0];
                case SUNDAY: return [23, 24, 25, 26, 27, 28, 29];
                default: return [0, 0, 0, 0, 0, 0, 0];
            }
        } else if (daysCount === 30) {
            switch (day) {
                case MONDAY: return [29, 30, 0, 0, 0, 0, 0];
                case TUESDAY: return [28, 29, 30, 0, 0, 0, 0];
                case WEDNESDAY: return [27, 28, 29, 30, 0, 0, 0];
                case THURSDAY: return [26, 27, 28, 29, 30, 0, 0];
                case FRIDAY: return [25, 26, 27, 28, 29, 30, 0];
                case SATURDAY: return [24, 25, 26, 27, 28, 29, 30];
                case SUNDAY: return [23, 24, 25, 26, 27, 28, 29];
                default: return [0, 0, 0, 0, 0, 0, 0];
            }
        } else if (daysCount === 31) {
            switch (day) {
                case MONDAY: return [29, 30, 31, 0, 0, 0, 0];
                case TUESDAY: return [28, 29, 30, 31, 0, 0, 0];
                case WEDNESDAY: return [27, 28, 29, 30, 31, 0, 0];
                case THURSDAY: return [26, 27, 28, 29, 30, 31, 0];
                case FRIDAY: return [25, 26, 27, 28, 29, 30, 31];
                case SATURDAY: return [24, 25, 26, 27, 28, 29, 30];
                case SUNDAY: return [23, 24, 25, 26, 27, 28, 29];
                default: return [0, 0, 0, 0, 0, 0, 0];
            }
        } else {
            return [0, 0, 0, 0, 0, 0, 0];
        }
    }

    private getSixthSevenDates(date: Date): number[] {
        const pairs = this.getDayDatePairs(date);
        const daysCount = pairs.size;
        const day = pairs.get(29);
        if (daysCount === 30) {
            switch (day) {
                case SUNDAY: return [30, 0, 0, 0, 0, 0, 0];
                default: return [0, 0, 0, 0, 0, 0, 0];
            }
        } else if (daysCount === 31) {
            switch (day) {
                case SATURDAY: return [30, 0, 0, 0, 0, 0, 0];
                case SUNDAY: return [30, 31, 0, 0, 0, 0, 0];
                default: return [0, 0, 0, 0, 0, 0, 0];
            }
        } else {
            return [0, 0, 0, 0, 0, 0, 0];
        }
    }
}