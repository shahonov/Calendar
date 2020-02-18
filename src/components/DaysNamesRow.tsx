import * as React from 'react';
import styled from 'styled-components';
import { Style } from '../utilities/Style';

const DayName = styled.span`
    text-align: center;
    font-size: 10px;
    width: calc(100% / 7.5);
    color: ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['exceptDateBox']['text']['color'];
            }
        }
        return style;
    }};
    border: 1px solid ${(props) => {
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
    border-radius: 5px;
    font-family: "Lucida Console", Monaco, monospace;
    padding: 5px 0 5px 0;
`;

export class DaysNamesRow extends React.Component {
    public render(): React.ReactNode {
        return (
            <>
                <DayName>Mon</DayName>
                <DayName>Tue</DayName>
                <DayName>Wed</DayName>
                <DayName>Thu</DayName>
                <DayName>Fri</DayName>
                <DayName>Sat</DayName>
                <DayName>Sun</DayName>
            </>
        );
    }
}