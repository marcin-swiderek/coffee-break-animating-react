import styled from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
	background: #e8f7f3;
`;

export const AppWrapper = styled(motion.div)`
	width: 340px;
	height: 700px;
	background: #e8f7f3;
	border: solid 20px;
	border-radius: 50px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
		rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;

	box-sizing: border-box;
	padding: 16px;

	overflow: hidden;
`;

export const TabsContainer = styled.div`
	width: 100%;
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, 1fr);
`;

export const TabWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr min-content;
	place-items: center;
	gap: 6px;
`;

export const Tab = styled(motion.div)`
	width: 100%;
	height: 40px;
	background: ${({ bg }) => bg};
	border-radius: 12px;
	cursor: pointer;
`;

export const Underline = styled(motion.div)`
	width: 95%;
	height: 4px;
	border-radius: 16px;
	background: black;
`;

export const ContentContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Image = styled(motion.img)`
	position: absolute;
	bottom: 0;
	width: 140%;
	left: -50px;

	z-index: 300;
`;

export const FruitInfoContainer = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
`;

export const FruitName = styled.div`
	font-family: "Merriweather", serif;
	font-weight: 900;
	font-size: 64px;
	line-height: 90%;
	margin-bottom: 20px;
	color: #333;

	z-index: 200;
`;

export const FruitPronouncination = styled.div`
	font-family: "Merriweather", serif;
	font-style: italic;
	font-weight: 700;
	font-size: 24px;
	margin-bottom: 20px;
	color: #333;
`;

export const FruitDescription = styled.div`
	font-family: "Karla", sans-serif;
	font-weight: 400;
	line-height: 22px;
	color: #333;
`;

export const FruitBackground = styled.div`
	position: absolute;
	bottom: -75px;
	right: -100px;
	border-radius: 100%;
	width: 350px;
	height: 350px;
	opacity: 0.15;
	z-index: 100;
	background: black;
`;
