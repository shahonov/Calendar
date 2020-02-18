import * as React from 'react';
import styled from 'styled-components';
import { Selection } from '../styledComponents/Selection';
import { RoundButton } from '../styledComponents/RoundButton';
import { ButtonWrapper } from '../styledComponents/ButtonWrapper';
import { SelectionValue } from '../styledComponents/SelectionValue';

const StyledSelection = styled(Selection)`
    width: 30%;
`;

export interface Props {
    year: number;
    incrementYear: () => void;
    decrementYear: () => void;
}

export class YearSelection extends React.Component<Props> {
    public render(): React.ReactNode {
        const {
            year,
            incrementYear,
            decrementYear
        } = this.props;
        
        return (
            <StyledSelection>
                <ButtonWrapper>
                    <RoundButton onClick={decrementYear} />
                </ButtonWrapper>
                <SelectionValue>{year}</SelectionValue>
                <ButtonWrapper>
                    <RoundButton onClick={incrementYear} />
                </ButtonWrapper>
            </StyledSelection>
        );
    }
}