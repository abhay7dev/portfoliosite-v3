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

// Toggle Top Nav
const toggleMenu = () => {
	document.querySelector(".menu").classList.toggle("active");
	document.querySelector(".hamburger").setAttribute("aria-pressed", document.querySelector(".hamburger").getAttribute("aria-pressed") == "false" ? "true" : "false");
	Array.from(document.querySelectorAll(".menu > ul > li > a")).forEach((link) => {
		link.tabIndex = link.tabIndex == "-1" ? "0" : "-1";
	});
}

Array.from(document.querySelectorAll(".hamburger")).forEach((ham) => {
	ham.addEventListener("click", toggleMenu);
	ham.addEventListener("keydown", (e) => {
		if (e.keyCode === 32) return e.preventDefault();
		if (e.keyCode === 13) {
			e.preventDefault();
			toggleMenu();
		}
	});
	ham.addEventListener("keyup", (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
			toggleMenu();
		}
	});
});