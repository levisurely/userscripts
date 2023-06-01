// ==UserScript==
// @name         Age Menu Hider
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @namespace    lol
// @namespace    *://www.roblox.com/
// @version      1.0.1
// @description  Hides how much stupid age menu for old accs without age you have.
// @author       levisurely
// @license      Apache-2.0
// @match        *://www.roblox.com/*
// @match        *://web.roblox.com/*
// @match        *://roblox.com/*
// @grant        none
// ==/UserScript==

setInterval(function(){
    var e = document.getElementById("simplemodal-overlay");
    var robux = document.getElementById("simplemodal-container");
    if (typeof(robux) != 'undefined' && robux != null)
    {
        robux.remove();
    };
    if (typeof(e) != 'undefined' && e != null)
    {
        e.remove();
    }
}, 100);
