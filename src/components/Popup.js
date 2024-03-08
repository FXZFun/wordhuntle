import useTransition from "react-transition-state";
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";
import DockLeftIcon from "../icons/DockLeftIcon";
import DockRightIcon from "../icons/DockRightIcon";
import UnDockIcon from "../icons/UnDockIcon";
import { useState } from "react";

const Background = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-color: var(--clr-overlay);
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    transition: opacity 300ms ease-in-out;
    ${props => ((props.state === "preEnter" || props.state === "exiting") && `
        opacity: 0;
    `)}

    ${props => props.docked !== 0 && `background-color: transparent;
    ${props.docked === 1 ? "left" : "right"}: 0;
    ${props.docked === 1 ? "right" : "left"}: unset;
    width: 30%;
    height: calc(100% - 55px);
    top: unset;
    bottom: 0;
    `}
`

const StyledPopup = styled.div`
    background-color: var(--clr-background);
    border-radius: 0.375rem 0.375rem 0 0;
    height: calc(100% - 1.5rem);
    width: 100%;
    max-width: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 1rem 1rem 0 1rem;

    transition: transform 300ms ease-in-out;
    ${props => ((props.state === "preEnter" || props.state === "exiting") && `
        transform: translateY(100%);
    `)}
`

const PopupControls = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    height: 0.875rem;
    width: 0.875rem;
    padding: 0;
    cursor: pointer;
`

const DockButton = CloseButton;

const Content = styled.div`
    width: 100%;
    flex: 1;
    overflow: auto;
`

const Popup = ({children, state, close}) => {
    // 0 = not docked, 1 = docked to the left, 2 = docked to the right
    const [docked, setDocked] = useState(0);
    return state === "unmounted" ? null : (
        <Background state={state} docked={docked}>
            <StyledPopup state={state}>
                <PopupControls>
                    {(docked === 0 && window.innerWidth > 999) ? (
                        <>
                        <DockButton onClick={() => {
                            setDocked(1);
                        }}>
                            <DockLeftIcon />
                        </DockButton>
                        <DockButton onClick={() => {
                            setDocked(2);
                        }}>
                            <DockRightIcon/>
                        </DockButton>
                        </>
                    ) : window.innerWidth > 999 ? (
                        <DockButton onClick={() => {
                            setDocked(0);
                        }}>
                            <UnDockIcon/>
                        </DockButton>
                    ) : <></>}
                    <CloseButton onClick={close}>
                        <CloseIcon/>
                    </CloseButton>
                </PopupControls>
                <Content>
                    {children}
                </Content>
            </StyledPopup>
        </Background>
    );
}

const usePopupTransition = () => {
    return useTransition({
        timeout: 300,
        mountOnEnter: true,
        unmountOnExit: true,
        preEnter: true
    });
}

export default Popup;
export { usePopupTransition };