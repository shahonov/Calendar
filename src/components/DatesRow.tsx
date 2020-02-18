import * as React from 'react';
import { DateBox } from './DateBox';

export interface Props {
    dates: number[];
    dateSelected?: number;
    updateDate: (dateNumber: number) => void;
}

export class DatesRow extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        this.mapWithSelected = this.mapWithSelected.bind(this);
        this.mapWithNoSelected = this.mapWithNoSelected.bind(this);
    }

    private mapWithSelected(): React.ReactNode {
        const { dates, dateSelected, updateDate } = this.props;
        const nodes = dates?.map((x, i) => {
            if (dateSelected === x) {
                return <DateBox date={x} key={i} isSelected={true} updateDate={updateDate} />;
            } else {
                return <DateBox date={x} key={i} isSelected={false} updateDate={updateDate} />;
            }
        });
        return nodes;
    }

    private mapWithNoSelected(): React.ReactNode {
        const { dates, updateDate } = this.props;
        const nodes = dates?.map((x, i) => {
            return <DateBox date={x} key={i} isSelected={false} updateDate={updateDate} />;
        });
        return nodes;
    }

    public render(): React.ReactNode {
        const { dateSelected } = this.props;
        let shouldShowSelected = false;
        if (dateSelected) {
            shouldShowSelected = true;
        }
        return (
            shouldShowSelected ? this.mapWithSelected() : this.mapWithNoSelected()
        );
    }
}