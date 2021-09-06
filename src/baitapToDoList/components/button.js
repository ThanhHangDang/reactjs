import styled from "styled-components";

export const Button = styled.button`
    appearance: none;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    boder: ${props => props.theme.borderButton};
    padding: .25em .5em;
    transition: all .5s;
    front-size: 17px;
    &: hover {
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props => props.theme.hoverbgColor};
        boder: ${props => props.theme.borderButton};
    }
`