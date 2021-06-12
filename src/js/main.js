"use strict";

(() => {

	const fetchCharactersButton = document.querySelector(".fetch-characters");
	const charactersElement = document.querySelector(".characters");

	// TODO: convert to HTML template - https://www.w3schools.com/TagS/tag_template.asp
	const buildCharacterElement = (name, image) => {
		const imgElement = document.createElement("img");
		imgElement.setAttribute("src", image);
		imgElement.setAttribute("alt", name);

		const nameElement = document.createElement("h4");
		nameElement.innerText = name;

		const divElement = document.createElement("div");
		divElement.append(imgElement, nameElement);
		return divElement;
	};

	fetchCharactersButton.addEventListener("click", () => {
		const fetchResult = fetch("https://rickandmortyapi.com/api/character");
		fetchResult.then((data) => {
			return data.json();
		})
			.then((response) => {
				const characters = response.results;
				const charactersElements = characters.map((character) => {
					const { name, image } = character;
					return buildCharacterElement(name, image);
				});

				charactersElements.forEach(element => {
					charactersElement.append(element);
				});

				console.log(response); // eslint-disable-line no-console
			});
	}, false);

})();
