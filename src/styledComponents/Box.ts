import styled from "styled-components";
import { Style } from "../utilities/Style";

export const Box = styled.div`
    color: ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['dateBox']['text']['color'];
            }
        }
        return style;
    }};
    border: 1px solid #FFF;
    &.active {
        border: 1px solid ${(props) => {
        let style = 'red'; // exception - easy for spotting
        for (const prop in Style) {
            if (prop === props.theme.style) {
                // this hack provides flexability when new style is added in style configuration
                //@ts-ignore
                return Style[prop]['dateBox']['border']['color'];
            }
        }
        return style;
    }};
    }
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 9px;
    width: calc(100% / 7.5);
    text-align: center;
    padding: 3px 0 3px 0;
    margin: 2px 0 2px 0;
    &.active:hover {
        color: ${(props) => {
            let style = 'red'; // exception - easy for spotting
            for (const prop in Style) {
                if (prop === props.theme.style) {
                    // this hack provides flexability when new style is added in style configuration
                    //@ts-ignore
                    return Style[prop]['dateBox']['text']['hoverColor'];
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
                    return Style[prop]['dateBox']['border']['hoverColor'];
                }
            }
            return style;
    }};
        border-radius: 5px;
        background-color: ${(props) => {
            let style = 'red'; // exception - easy for spotting
            for (const prop in Style) {
                if (prop === props.theme.style) {
                    // this hack provides flexability when new style is added in style configuration
                    //@ts-ignore
                    return Style[prop]['dateBox']['background']['hoverColor'];
                }
            }
            return style;
    }};
        cursor: pointer;
        font-weight: 900;
        text-decoration: underline;
        transition: .3s;
    }
    &.selected, &.selected:hover {
        color: ${(props) => {
            let style = 'red'; // exception - easy for spotting
            for (const prop in Style) {
                if (prop === props.theme.style) {
                    // this hack provides flexability when new style is added in style configuration
                    //@ts-ignore
                    return Style[prop]['dateBox']['text']['selectedColor'];
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
                    return Style[prop]['dateBox']['border']['selectedColor'];
                }
            }
            return style;
    }};
        border-radius: 5px;
        background-color: ${(props) => {
            let style = 'red'; // exception - easy for spotting
            for (const prop in Style) {
                if (prop === props.theme.style) {
                    // this hack provides flexability when new style is added in style configuration
                    //@ts-ignore
                    return Style[prop]['dateBox']['background']['selectedColor'];
                }
            }
            return style;
    }};
        text-decoration: underline;
        font-weight: 900;
        transition: .3s;
    }
`;