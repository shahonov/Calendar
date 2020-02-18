import * as React from 'react';
import { Box } from '../styledComponents/Box';
import { ClassProcessor } from '../utilities/ClassProcessor';

export interface Props {
    date: number;
    isSelected: boolean;
    updateDate: (dateNumber: number) => void;
}

export class DateBox extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (event.currentTarget.innerText !== '') {
            ClassProcessor.clearSelectedBoxes();
            event.currentTarget.classList.add('selected');
            this.props.updateDate(+event.currentTarget.innerText);
        }
    }

    public render(): React.ReactNode {
        const { date, isSelected } = this.props;
        const value = date === 0 ? '' : date;
        const className = date === 0 ? '' : 'active';
        return (
            <Box className={`datebox ${className} ${isSelected ? 'selected' : ''}`} onClick={this.handleClick}>
                {value}
            </Box>
        );
    }
}