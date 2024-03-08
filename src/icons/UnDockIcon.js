import styled from "styled-components";

const Svg = styled.svg`
    fill: var(--clr-text);
    stroke: var(--clr-text);
    stroke-width: 0.5;
`

const UnDockIcon = () => {
    return (   
        <Svg height="24" viewBox="0 0 24 24" width="24">
            <path d="M21,8.59V4c0-0.55-0.45-1-1-1h-4.59c-0.89,0-1.34,1.08-0.71,1.71l1.59,1.59l-10,10l-1.59-1.59C4.08,14.08,3,14.52,3,15.41 V20c0,0.55,0.45,1,1,1h4.59c0.89,0,1.34-1.08,0.71-1.71l-1.59-1.59l10-10l1.59,1.59C19.92,9.92,21,9.48,21,8.59z"/>
        </Svg>
    );
}

export default UnDockIcon;