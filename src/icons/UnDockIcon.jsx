import styled from "styled-components";

const Svg = styled.svg`
    stroke: var(--clr-text);
    stroke-width: 2;
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
`

const UnDockIcon = () => {
    return (
        <Svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 4l4 0l0 4" />
            <path d="M14 10l6 -6" />
            <path d="M8 20l-4 0l0 -4" />
            <path d="M4 20l6 -6" />
            <path d="M16 20l4 0l0 -4" />
            <path d="M14 14l6 6" />
            <path d="M8 4l-4 0l0 4" />
            <path d="M4 4l6 6" />
        </Svg>
    );
}

export default UnDockIcon;