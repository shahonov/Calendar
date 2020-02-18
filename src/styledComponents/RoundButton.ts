import styled from "styled-components";
import { Style } from "../utilities/Style";

export const RoundButton = styled.div`
    width: 8px;
    height: 8px;
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
    &:hover {
        border: 2px solid ${(props) => {
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
        background-color: ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['exceptDateBox']['background']['color'];
            }
        }
        return style;
    }};
        cursor: pointer;
        transition: .3s;
    }
`;