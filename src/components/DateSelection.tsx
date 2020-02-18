import * as React from 'react';
import styled from 'styled-components';
import { Selection } from '../styledComponents/Selection';
import { RoundButton } from '../styledComponents/RoundButton';
import { ButtonWrapper } from '../styledComponents/ButtonWrapper';
import { SelectionValue } from '../styledComponents/SelectionValue';

const StyledSelection = styled(Selection)`
    width: 20%;
`;

export interface Props {
    dateOfDate: number;
    incrementDate: () => void;
    decrementDate: () => void;
}

export class DateSelection extends React.Component<Props> {
    public render(): React.ReactNode {
        const {
            dateOfDate,
            incrementDate,
            decrementDate
        } = this.props;

        return (
            <StyledSelection>
                <ButtonWrapper>
                    <RoundButton onClick={decrementDate} />
                </ButtonWrapper>
                <SelectionValue>{dateOfDate}</SelectionValue>
                <ButtonWrapper>
                    <RoundButton onClick={incrementDate} />
                </ButtonWrapper>
            </StyledSelection>
        );
    }
}