// ==UserScript==
// @name         Roblox+ Icon Hider
// @icon         https://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @namespace    lol
// @namespace    https://www.roblox.com/
// @version      1.1.1
// @description  Hides Roblox+ Icon
// @author       levisurely
// @license      Apache-2.0
// @match        https://www.roblox.com/*
// @match        https://web.roblox.com/*
// @match        https://roblox.com/*
// @grant        none
// ==/UserScript==

//lev#9999 On Discord
//discord.gg/tmYQr99wTa

setInterval(function(){
    var robux = document.querySelector(".rplus-icon-32x32");
if (typeof(robux) != 'undefined' && robux != null)
{
    robux.remove();
}
}, 100);