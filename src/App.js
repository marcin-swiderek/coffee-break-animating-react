import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dragonImg from "./assets/dragon_shadow.png";
import appleImg from "./assets/apple3_shadow.png";
import bananaImg from "./assets/bananas_shadow.png";
import {
	AppContainer,
	AppWrapper,
	TabsContainer,
	Tab,
	Underline,
	TabWrapper,
	ContentContainer,
	Image,
	FruitName,
	FruitBackground,
	FruitDescription,
	FruitInfoContainer,
	FruitPronouncination,
} from "./styled";

const fruits = [
	{
		id: 0,
		name: "Dragon fruit",
		color: "#CC617F",
		img: dragonImg,
		pronouncination: "dra · guhn · froot",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste sint architecto iusto odit cupiditate suscipit recusandae, aliquid quod. Consequuntur.",
	},
	{
		id: 1,
		name: "Green Apple",
		color: "#8FC32D",
		img: appleImg,
		pronouncination: "a · pl",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod modi ratione dicta eaque, porro eius excepturi totam sint facere cumque animi!",
	},
	{
		id: 2,
		name: "Nana Banana",
		color: "#ffe135",
		img: bananaImg,
		pronouncination: "buh · na · nuh",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusantium, quis ex reprehenderit libero repudiandae soluta nihil ab amet facere unde a libero.",
	},
];

function App() {
	const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
	const [prevSelectedFruit, setPrevSelectedFruit] = useState(fruits[0]);
	const [direction, setDirection] = useState("right");

	const selectFruit = (fruit) => {
		setPrevSelectedFruit(selectedFruit);
		setSelectedFruit(fruit);

		setDirection(fruit.id > selectedFruit.id ? "right" : "left");
	};

	const renderTabs = () =>
		fruits.map((fruit, index) => {
			const isSelected = selectedFruit.id === fruit.id;

			return (
				<TabWrapper key={fruit.id}>
					<Tab
						bg={fruit.color}
						onClick={() => selectFruit(fruits[index])}
					/>
					{isSelected && <Underline />}
				</TabWrapper>
			);
		});

	return (
		<AppContainer>
			<AppWrapper>
				<TabsContainer>{renderTabs()}</TabsContainer>
				<ContentContainer>
					<Image
						key={selectedFruit.img}
						src={selectedFruit.img}
						alt="Dragon fruit"
					/>

					<FruitInfoContainer>
						<FruitName>{selectedFruit.name}</FruitName>
						<FruitPronouncination>
							{selectedFruit.pronouncination}
						</FruitPronouncination>
						<FruitDescription>
							{selectedFruit.desc}
						</FruitDescription>
					</FruitInfoContainer>

					<FruitBackground />
				</ContentContainer>
			</AppWrapper>
		</AppContainer>
	);
}

export default App;
