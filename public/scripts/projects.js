const openLink = (card) => {
    if(card.target.querySelector(".card-content > .card-title > a")?.href != null) {
        card.target.querySelector(".card-content > .card-title > a").click();
    }
}

Array.from(document.querySelectorAll("section.card")).forEach((card) => {
	card.addEventListener("click", openLink);
	card.addEventListener("keydown", (e) => {
	// 	if (e.keyCode === 32) return e.preventDefault();
		if (e.keyCode === 13) {
			//e.preventDefault();
			openLink(e);
		}
	});
	card.addEventListener("keyup", (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
			openLink(e);
		}
	});
});