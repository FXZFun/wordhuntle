import styled from "styled-components";

const Svg = styled.svg`
    stroke: var(--clr-text);
    stroke-width: 2;
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
`

const DockRightIcon = () => {
    return (
        <Svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
        </Svg>
    );
}

export default DockRightIcon;