import styled from "styled-components";

export const Layout = styled.main`
	display: grid;
	grid-template-columns: repeat(4, 200px);
	grid-template-rows: 200px;
	grid-gap: 15px;

	@media screen and (max-width: 880px) {
		margin: 25px;
		grid-template-columns: repeat(3, 200px);
		grid-template-rows: repeat(3, 200px);
		align-items: center;
		grid-gap: 25px;
	}

	@media screen and (max-width: 730px) {
		grid-template-columns: repeat(2, 200px);
		grid-template-rows: repeat(3, 200px);
		align-items: center;
	}

	@media screen and (max-width: 500px) {
		margin: 25px;
		grid-template-columns: auto;
		grid-template-rows: repeat(7, 200px);
		align-items: center;
	}
`;