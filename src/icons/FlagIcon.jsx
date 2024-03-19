import styled from "styled-components";

const Svg = styled.svg`
    stroke: #990000;
    fill: #990000;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`

const FlagIcon = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
            <path d="M5 21v-7" />
        </Svg>
    );
}

export default FlagIcon;