// ==UserScript==
// @name     Google Docs fluent type
// @version  2
// @grant    none
// @match		 https://docs.google.com/document/*
// ==/UserScript==

const addedStyle = document.createElement("style");
addedStyle.innerText = `
.kix-cursor {
	transition: left .15s cubic-bezier(0,0,.11,1.03);
}
`;

document.head.appendChild(addedStyle);
