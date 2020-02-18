import * as React from 'react';
import styled from 'styled-components';
import { Style } from '../utilities/Style';
import { Selection } from '../styledComponents/Selection';
import { RoundButton } from '../styledComponents/RoundButton';
import { ButtonWrapper } from '../styledComponents/ButtonWrapper';
import { SelectionValue } from '../styledComponents/SelectionValue';

const StyledSelection = styled(Selection)`
    width: 45%;
    border-right: 1px solid ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['exceptDateBox']['border']['color'];
            }
        }
        return style;
    }};
    border-left: 1px solid ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['exceptDateBox']['border']['color'];
            }
        }
        return style;
    }};
`;

export interface Props {
    month: string;
    incrementMonth: () => void;
    decrementMonth: () => void;
}

export class MonthSelection extends React.Component<Props> {
    public render(): React.ReactNode {
        const {
            month,
            incrementMonth,
            decrementMonth
        } = this.props;

        return (
            <StyledSelection>
                <ButtonWrapper>
                    <RoundButton onClick={decrementMonth} />
                </ButtonWrapper>
                <SelectionValue>{month}</SelectionValue>
                <ButtonWrapper>
                    <RoundButton onClick={incrementMonth} />
                </ButtonWrapper>
            </StyledSelection>
        );
    }
}