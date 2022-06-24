import React from "react";
import { Card, Container, ActivityInfo, ActivityType, InfoIcon, ActivityStat, CurrentStat, PreviousStat } from "./CardItemStyle";
import ellipsis from "../../images/icon-ellipsis.svg"
import dataDashboard from "../../data.json"
import iconWork from "../../images/icon-work.svg"
import iconPlay from "../../images/icon-play.svg"
import iconStudy from "../../images/icon-study.svg"
import iconExercise from "../../images/icon-exercise.svg"
import iconSocial from "../../images/icon-social.svg"
import iconSelfCare from "../../images/icon-self-care.svg"

export default function CardItem(props) {
	let bgColor = "red";
	let bgImage = "../../images/icon-work.svg";
	let activityIndex = 1;
	let activity = props.activity
	let timeFrame = props.timeFrame;

	timeFrame === "daily" ? (timeFrame = "daily") :
		timeFrame === "weekly" ? (timeFrame = "weekly") :
			(timeFrame = "monthly");

	switch (activity) {
		case "Work":
			bgColor = "--lightred-work"
			bgImage = iconWork
			activityIndex = 0;
			break
		case "Play":
			bgColor = "--softBlue-play"
			bgImage = iconPlay
			activityIndex = 1;
			break
		case "Study":
			bgColor = "--lightred-study"
			bgImage = iconStudy
			activityIndex = 2;
			break
		case "Exercise":
			bgColor = "--limeGreen-exercise"
			bgImage = iconExercise
			activityIndex = 3;
			break
		case "Social":
			bgColor = "--violet-social"
			bgImage = iconSocial
			activityIndex = 4;
			break
		case "SelfCare":
			bgColor = "--softOrange-self-care"
			bgImage = iconSelfCare
			activityIndex = 5;
			break
		default:
			break
	}

	return (
		<>
			<Card bgColor={bgColor} bgImage={bgImage.valueOf()}>
				<Container>
					<ActivityInfo>
						<ActivityType>{props.activity}</ActivityType>
						<InfoIcon src={ellipsis} alt="" />
					</ActivityInfo>
					<ActivityStat>
						<CurrentStat>
							{
								dataDashboard[activityIndex].timeframes[`${timeFrame}`]["current"]
							}hrs
						</CurrentStat>
						<PreviousStat>Previous -{" "}{dataDashboard[activityIndex].timeframes[
							`${timeFrame}`
						]["previous"]
						}{" "}hrs</PreviousStat>
					</ActivityStat>
				</Container>
			</Card>
		</>
	);
}