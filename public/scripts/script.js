Array.from(document.querySelectorAll(".pronounciation")).forEach((ipa) => {
	ipa.addEventListener("click", () => {
		const audio = new Audio("/media/abhay.mp3");
		audio.play();
	});
});