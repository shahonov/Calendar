import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { DateSelections } from './DateSelections';
import { CalendarWrapper } from './CalendarWrapper';
import { ClassProcessor } from '../utilities/ClassProcessor';
import { CalendarBorder } from '../styledComponents/CalendarBorder';

type Style = 'neutral' | 'sky' | 'tender';
type Size = 'small' | 'medium' | 'big';

export interface Theme {
    style: Style;
    size: Size;
}

export interface Props {
    theme?: Theme;
}

interface State {
    date: Date;
}

export class Calendar extends React.Component<Props, State> {

    static defaultProps: Props = {
        theme: {
            style: 'neutral',
            size: 'small'
        }
    }

    constructor(props: any) {
        super(props);

        this.state = {
            date: new Date(Date.now())
        }

        this.incrementDate = this.incrementDate.bind(this);
        this.decrementDate = this.decrementDate.bind(this);
        this.incrementMonth = this.incrementMonth.bind(this);
        this.decrementMonth = this.decrementMonth.bind(this);
        this.incrementYear = this.incrementYear.bind(this);
        this.decrementYear = this.decrementYear.bind(this);
        this.setNewDate = this.setNewDate.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    private monthFriendlyName(monthIndex: number): string {
        switch (monthIndex) {
            case 0: return 'January';
            case 1: return 'February';
            case 2: return 'March';
            case 3: return 'April';
            case 4: return 'May';
            case 5: return 'June';
            case 6: return 'July';
            case 7: return 'August';
            case 8: return 'September';
            case 9: return 'October';
            case 10: return 'November';
            case 11: return 'December';
            default: return '';
        }
    }

    private incrementDate(): void {
        const { date } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth();
        const dateDate = date.getDate() + 1;
        const newDate = new Date(year, month, dateDate);
        this.setNewDate(newDate);
    }

    private decrementDate(): void {
        const { date } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth();
        const dateDate = date.getDate() - 1;
        const newDate = new Date(year, month, dateDate);
        this.setNewDate(newDate);
    }

    private incrementMonth(): void {
        const { date } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const newDate = new Date(year, month, 1);
        this.setNewDate(newDate);
    }

    private decrementMonth(): void {
        const { date } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth() - 1;
        ClassProcessor.clearSelectedBoxes();
        const newDate = new Date(year, month, 1);
        this.setNewDate(newDate);
    }

    private incrementYear(): void {
        const { date } = this.state;
        const year = date.getFullYear() + 1;
        const month = date.getMonth();
        const newDate = new Date(year, month, 1);
        this.setNewDate(newDate);
    }

    private decrementYear(): void {
        const { date } = this.state;
        const year = date.getFullYear() - 1;
        const month = date.getMonth();
        const newDate = new Date(year, month, 1);
        this.setNewDate(newDate);
    }

    private setNewDate(date: Date): void {
        ClassProcessor.clearSelectedBoxes();
        this.setState({ date: date });
    }

    private updateDate(dateNumber: number): void {
        const { date } = this.state;
        const year = date.getFullYear();
        const month = date.getMonth();
        const newDate = new Date(year, month, dateNumber);
        this.setNewDate(newDate);
    }

    public render(): React.ReactNode {
        const { date } = this.state;
        const dateOfDate = date.getDate();
        const month = this.monthFriendlyName(date.getMonth());
        const year = date.getFullYear();
        return (
            <ThemeProvider theme={this.props.theme}>
                <CalendarBorder>
                    <DateSelections
                        dateOfDate={dateOfDate}
                        incrementDate={this.incrementDate}
                        decrementDate={this.decrementDate}
                        month={month}
                        incrementMonth={this.incrementMonth}
                        decrementMonth={this.decrementMonth}
                        year={year}
                        incrementYear={this.incrementYear}
                        decrementYear={this.decrementYear} />
                    <CalendarWrapper date={date} updateDate={this.updateDate} />
                </CalendarBorder>
            </ThemeProvider>
        )
    }
}