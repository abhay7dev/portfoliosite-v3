import { SkinViewer } from "./skinview3d.bundle.js";

try {

    const skin = (await (await fetch("/api/minecraft")).json()).skin;

    let skinViewer = new SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 400,
        skin: skin
    });
} catch(err) {
    alert("Failed to initialize skinview3d: " + err);
}