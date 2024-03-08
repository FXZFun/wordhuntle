import styled from "styled-components";

const Svg = styled.svg`
    fill: var(--clr-text);
    stroke: var(--clr-text);
    stroke-width: 0.5;
`

const DockRightIcon = () => {
    return (
        <Svg height="24" viewBox="0 0 24 24" width="24">
            {/* <path d="M0 0h24v24H0V0z" fill="none"/> */}
            <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
        </Svg>
    );
}

export default DockRightIcon;