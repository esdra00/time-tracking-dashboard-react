import React from "react";
import { Container, Profile, ProfileImg, Wrapper, Title, FullName, TimeframeSelect, TimeFrame } from "./CardProfileStyle";
import imgJeremy from "../../images/image-jeremy.png";

export default function CardProfile(props) {
    const handleSwitch = (e) => {
        return props.setTimeFrame(e.currentTarget.dataset.switch);
    }

    return (
        <Container>
            <Profile>
                <ProfileImg src={imgJeremy} alt="jeremy" />
                <Wrapper>
                    <Title>Report of</Title>
                    <FullName>Jeremy Robson</FullName>
                </Wrapper>
            </Profile>
            <TimeframeSelect>
                <TimeFrame data-switch="daily" active={props.timeFrame === "daily"} onClick={handleSwitch}>Daily</TimeFrame>
                <TimeFrame data-switch="weekly" active={props.timeFrame === "weekly"} onClick={handleSwitch}>Weekly</TimeFrame>
                <TimeFrame data-switch="monthly" active={props.timeFrame === "monthly"} onClick={handleSwitch}>Monthly</TimeFrame>
            </TimeframeSelect>
        </Container>
    );
}