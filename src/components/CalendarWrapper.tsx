import * as React from 'react';
import { DatesRow } from './DatesRow';
import styled from 'styled-components';
import { Style } from '../utilities/Style';
import { DaysNamesRow } from './DaysNamesRow';
import { DateGenerator, Dates } from '../utilities/DateGenerator';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: ${(props) => {
        let size = 100;
        for (const prop in Style.width) {
            if (props.theme.size === prop) {
                //@ts-ignore
                size = Style.width[prop];
            }
        }
        return `${size}px`;
    }};
`;

export interface Props {
    date: Date;
    updateDate: (dateNumber: number) => void;
}

export class CalendarWrapper extends React.Component<Props> {

    private readonly generator: DateGenerator;
    private dates: Dates;

    constructor(props: Props) {
        super(props);

        this.generator = new DateGenerator();
        this.dates = this.generator.getDates(this.props.date);
    }

    shouldComponentUpdate(props: Props): boolean {
        this.dates = this.generator.getDates(props.date);
        return true;
    }

    public render(): React.ReactNode {
        const { updateDate } = this.props;
        const {
            first,
            second,
            third,
            fourth,
            fifth,
            sixth
        } = this.dates;

        const shouldRenderSixthSevenDates = sixth.some(x => x !== 0);
        const date = this.props.date.getDate();
        return (
            <Wrapper>
                <DaysNamesRow />
                {
                    first.includes(date)
                        ? <DatesRow dates={first} dateSelected={date} updateDate={updateDate} />
                        : <DatesRow dates={first} updateDate={updateDate} />
                }
                {
                    second.includes(date)
                        ? <DatesRow dates={second} dateSelected={date} updateDate={updateDate} />
                        : <DatesRow dates={second} updateDate={updateDate} />
                }
                {
                    third.includes(date)
                        ? <DatesRow dates={third} dateSelected={date} updateDate={updateDate} />
                        : <DatesRow dates={third} updateDate={updateDate} />
                }
                {
                    fourth.includes(date)
                        ? <DatesRow dates={fourth} dateSelected={date} updateDate={updateDate} />
                        : <DatesRow dates={fourth} updateDate={updateDate} />
                }
                {
                    fifth.includes(date)
                        ? <DatesRow dates={fifth} dateSelected={date} updateDate={updateDate} />
                        : <DatesRow dates={fifth} updateDate={updateDate} />
                }
                {
                    shouldRenderSixthSevenDates
                    &&
                    (
                        sixth.includes(date)
                            ? <DatesRow dates={sixth} dateSelected={date} updateDate={updateDate} />
                            : <DatesRow dates={sixth} updateDate={updateDate} />
                    )

                }
            </Wrapper>
        );
    }
}