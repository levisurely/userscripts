// ==UserScript==
// @name         Desktop Ad Hider
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @namespace    lol
// @namespace    *://www.roblox.com/
// @version      1.0.0
// @description  Hides stupid play on desktop app ad.
// @author       levisurely
// @license      Apache-2.0
// @match        *://www.roblox.com/*
// @match        *://web.roblox.com/*
// @match        *://roblox.com/*
// @grant        none
// ==/UserScript==

setInterval(function(){
    var robux = document.getElementById("desktop-app-banner");
if (typeof(robux) != 'undefined' && robux != null)
{
    robux.remove();
}
}, 100);