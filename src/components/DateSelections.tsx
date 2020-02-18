import * as React from 'react';
import { DateSelection } from './DateSelection';
import { YearSelection } from './YearSelection';
import { MonthSelection } from './MonthSelection';
import { DateSelectionsWrapper } from '../styledComponents/DateSelectionsWrapper';

export interface Props {
    dateOfDate: number;
    decrementDate: () => void;
    incrementDate: () => void;
    month: string;
    incrementMonth: () => void;
    decrementMonth: () => void;
    year: number;
    incrementYear: () => void;
    decrementYear: () => void;
}

export class DateSelections extends React.Component<Props> {
    public render(): React.ReactNode {
        const {
            dateOfDate,
            incrementDate,
            decrementDate,
            month,
            incrementMonth,
            decrementMonth,
            year,
            incrementYear,
            decrementYear
        } = this.props;

        return (
            <DateSelectionsWrapper>
                <DateSelection
                    dateOfDate={dateOfDate}
                    incrementDate={incrementDate}
                    decrementDate={decrementDate} />
                <MonthSelection
                    month={month}
                    incrementMonth={incrementMonth}
                    decrementMonth={decrementMonth} />
                <YearSelection
                    year={year}
                    incrementYear={incrementYear}
                    decrementYear={decrementYear} />
            </DateSelectionsWrapper>
        );
    }
}