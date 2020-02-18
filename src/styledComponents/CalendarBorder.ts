import styled from "styled-components";
import { Style } from "../utilities/Style";

export const CalendarBorder = styled.div`
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
`;