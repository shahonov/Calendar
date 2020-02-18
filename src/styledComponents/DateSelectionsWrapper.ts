import styled from "styled-components";
import { Style } from "../utilities/Style";

export const DateSelectionsWrapper = styled.div`
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
    border-bottom: 1px solid ${(props) => {
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
    padding: 5px 0 5px 0;
    display: flex;
    flex-wrap: wrap;
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
    height: 20px;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2px;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 11px;
    text-decoration: underline;
`;