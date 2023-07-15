Array.from(document.querySelectorAll(".pronounciation")).forEach((ipa) => {
	ipa.addEventListener("click", () => {
		document.querySelector(".pronounciation-audio").play();
	});
});