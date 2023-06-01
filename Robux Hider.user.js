// ==UserScript==
// @name         Robux Hider
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @namespace    lol
// @namespace    *://www.roblox.com/
// @version      1.1.1
// @description  Hides how much robux you have.
// @author       levisurely
// @license      Apache-2.0
// @match        *://www.roblox.com/*
// @match        *://web.roblox.com/*
// @match        *://roblox.com/*
// @grant        none
// ==/UserScript==

setInterval(function(){
    var robux = document.getElementById("nav-robux-amount");
if (typeof(robux) != 'undefined' && robux != null)
{
    robux.remove();
}
}, 100);