import styled from "styled-components";

export const Container = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	grid-column: 1;
	grid-row: span 2;
	background-color: var(--darkBlue);
	border-radius: 10px;

	@media screen and (max-width: 880px) {
		grid-column: 1/4;
		grid-row: 1/2;
		align-items: center;
	}

	@media screen and (max-width: 730px) {
		grid-column: 1/-1;
		grid-row: 1/2;
		align-items: center;
	}

	@media screen and (max-width: 500px) {
		grid-template-columns: auto;
		grid-template-rows: repeat(auto, 7);
		align-items: center;
	}
`;

export const Profile = styled.div`
	flex: 0.8;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 1.25rem;
	background-color: var(--blue);
	border-radius: 0 0 10px 10px;

	@media screen and (max-width: 880px) {
		flex-direction: row;
	}

	@media screen and (max-width: 730px) {
		flex-direction: row;
	}
`;

export const ProfileImg = styled.img`
	border-radius: 50%;
	max-width: 35%;
	background-color: white;
	padding: 0.15rem;
	object-fit: cover;
	@media screen and (max-width: 880px) {
		max-width: 15%;
	}
	@media screen and (max-width: 730px) {
		max-width: 25%;
	}
	@media screen and (max-width: 375px) {
		max-width: 35%;
	
		margin-right: 10px;
	}
`;

export const Wrapper = styled.div`
	margin: 2rem auto auto auto;
	@media screen and (max-width: 880px) {
		margin: auto;
	}
`;

export const Title = styled.span`
	font-size: 0.85rem;
	font-weight: 500;
	color: var(--paleBlue);
`;

export const FullName = styled.h1`
	display: block;
	font-weight: lighter;
	color: white;
	font-size: 32px;
	@media screen and (max-width: 730px) {
		font-size: 1.75rem;
	}
`;

export const TimeframeSelect = styled.div`
	flex: 0.2;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	padding: 1.25rem;
	@media screen and (max-width: 880px) {
		flex-direction: row;
	}
`;

export const TimeFrame = styled.span`
	font-size: 0.85rem;
	cursor: pointer;
	transition: color 0.2s ease-in-out;
	color: ${(props) => (props.active ? "white" : "var(--desaturatedBlue)")};
	&:hover {
		color: white;
	}
`;
