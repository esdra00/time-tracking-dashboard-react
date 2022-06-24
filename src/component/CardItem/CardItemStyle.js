import styled from "styled-components";

export const Card = styled.section`
	height: 200px;
	width: 200px;
	background-image: url(${(props) => props.bgImage});
	background-position: top -5% right 10%;
	background-repeat: no-repeat;
	background-color: var(${(props) => props.bgColor});
	border-radius: 15px;
	overflow: hidden;
	position: relative;
	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const Container = styled.div`
	height: 80%;
	margin-top: 20%;
	padding: 1.5rem;
	border-radius: 15px 15px 0 0;
	background-color: var(--darkBlue);

	&:hover {
		background-color: var(--desaturatedBlue);
	}
	@media screen and (max-width: 500px) {
		height: 90%;
		margin-top: 10%;
		width: 100%;
	}
`;

export const ActivityInfo = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ActivityType = styled.h3`
	color: white;
	font-size: var(--fs);
`;

export const InfoIcon = styled.img``;

export const ActivityStat = styled.div`
	display: flex;
	margin-top: 1rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.25rem;
	@media screen and (max-width: 500px) {
		margin-top 1.5rem;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
export const CurrentStat = styled.span`
	font-size: 2.5rem;
	color: white;
`;
export const PreviousStat = styled.span`
	font-size: 0.85rem;
	color: var(--paleBlue);
`;
