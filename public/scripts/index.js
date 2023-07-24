// Pronounciation Audio
const playPronAudio = () => document.querySelector(".pronounciation-audio").play();
Array.from(document.querySelectorAll(".pronounciation")).forEach((ipa) => {
	ipa.addEventListener("click", playPronAudio);
	ipa.addEventListener("keydown", (e) => {
		if (e.keyCode === 32) return e.preventDefault();
		if (e.keyCode === 13) {
			e.preventDefault();
			playPronAudio();
		}
	});
	ipa.addEventListener("keyup", (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
			playPronAudio();
		}
	});
});