import styled from "styled-components";

const Svg = styled.svg`
    stroke: var(--clr-text);
    stroke-width: 2;
`

const MenuIcon = () => {
    return (
        <Svg viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </Svg>
    );
}

export default MenuIcon;