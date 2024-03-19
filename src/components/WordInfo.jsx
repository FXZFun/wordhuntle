import styled, { keyframes } from "styled-components";
import { useGame } from "../providers/GameProvider";
import FlagIcon from "../icons/FlagIcon";

const StyledWordInfo = styled.div`
    width: 100%;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CurrentWord = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 2.25rem;
    font-weight: 700;
`

const goodAnimation = keyframes`
    from {transform: translateY(1.25rem); opacity: 0}
    to {transform: translateY(0); opacity: 1}
`

const badAnimation = keyframes`
    0% {transform: translateX(0)}
    10% {transform: translateX(-0.5rem)}
    30% {transform: translateX(0.25rem)}
    50% {transform: translateX(-0.125rem)}
    70% {transform: translateX(0.0625rem)}
    90% {transform: translateX(-0.03125rem)}
    100% {transform: translateX(0)}
`

const InfoChip = styled.div`
    color: white;
    font-size: 1.125rem;
    font-weight: 400;
    padding: 0.25rem 1rem;
    width: fit-content;
    height: fit-content;
    border-radius: 20rem;
    &.error {
        background-color: #de3d2a;
        animation: ${badAnimation} 0.6s ease-in-out;
    }
    &.warning {
        background-color: #ebac00;
        animation: ${badAnimation} 0.6s ease-in-out;
    }
    &.success {
        background-color: #49b84f;
        animation: ${goodAnimation} 0.75s cubic-bezier(0, 0.75, 0.25, 1);
    }
    animation-fill-mode: forwards;
`

const Suggest = styled.div`
    color: white;
    text-decoration: underline;
    display: inline-block;
    font-size: .7rem;
    vertical-align: middle;
    cursor: pointer;
`

const WordInfo = () => {

    const { currentWord, wordInfo, lastSubmittedWord, setWordInfo } = useGame();

    let infoClass = "";
    let suggest = "";
    if (wordInfo !== null && (wordInfo.endsWith("too short") || wordInfo.startsWith("Oops"))) {
        infoClass = "error";
        suggest = "";
    } else if (wordInfo !== null && wordInfo.endsWith("not a word")) {
        infoClass = "error";
        suggest = "Add";
    } else if (wordInfo !== null && wordInfo.endsWith("already found")) {
        infoClass = "warning";
        suggest = "";
    } else if (wordInfo !== null && wordInfo.startsWith("Thanks")) {
        infoClass = "success";
        suggest = "";
    } else {
        infoClass = "success";
        suggest = <FlagIcon />;
    }

    return (
        <StyledWordInfo>
            {currentWord.length > 0 && (
                <CurrentWord>{currentWord}</CurrentWord>
            )}
            {wordInfo !== null && currentWord.length === 0 && (
                <InfoChip className={infoClass}>{wordInfo} <Suggest onClick={async () => {
                    let endpoint = "https://dubster.hazelhope.com/api/wordhuntle/suggest_removal.php";
                    if (suggest === "Add") {
                        endpoint = "https://dubster.hazelhope.com/api/wordhuntle/suggest_word.php";
                    }
                    let result = await fetch(endpoint + "?word=" + lastSubmittedWord);
                    if (result.ok) {
                        setWordInfo("Thanks!");
                    } else {
                        setWordInfo("Oops, that didn't work.");
                    }
                }}>{suggest}</Suggest></InfoChip>
            )}
        </StyledWordInfo>
    );
}

export default WordInfo;