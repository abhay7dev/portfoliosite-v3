import { SkinViewer, WalkingAnimation } from "./lib/skinview3d.bundle.js";
try {
    const skin = (await (await fetch("/api/minecraft")).json()).skin;
    const canvas = document.querySelector(".skin-container");
    
    if(window.innerWidth < window.innerHeight) {
        canvas.width = window.innerWidth * 0.7;
        canvas.height = window.innerHeight * 0.6;
    } else {
        canvas.width = window.innerWidth * 0.2;
        canvas.height = window.innerHeight * 0.6;
    }

    let skinViewer = new SkinViewer({
        canvas: canvas,
        width: canvas.width,
        height: canvas.height,
        skin: skin, 
        model: "default",
    });

    skinViewer.animation = new WalkingAnimation();
    skinViewer.nameTag = "MisterChief007"
    skinViewer.zoom = 0.5;

    skinViewer.cameraLight.intensity = 0.0;
skinViewer.globalLight.intensity = 1.0;

    if(window.innerWidth < window.innerHeight) {
        skinViewer.zoom = 0.3;
    } else {
        skinViewer.zoom = 0.5;
    }

} catch(err) {
    alert("Failed to initialize skinview3d: " + err);
}