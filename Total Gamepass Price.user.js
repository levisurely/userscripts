// ==UserScript==
// @name         Total Gamepass Price
// @icon         https://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @namespace    lol
// @namespace    https://www.roblox.com/
// @version      1.0.0
// @description  Shows Total Robux Amount On Gamepasses
// @author       levisurely
// @license      Apache-2.0
// @match        https://www.roblox.com/games*
// @match        https://web.roblox.com/games*
// @match        https://roblox.com/games*
// @grant        none
// ==/UserScript==

//lev#9999 On Discord
//discord.gg/tmYQr99wTa

setInterval(function(){
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
        let total = 0
        for (const pass of document.querySelectorAll("span.text-robux")) {
            total = total + (parseInt(pass.textContent.replace(/,/g, '')) || 0)
        }
        const theme = document.getElementById('rbx-body')
            .className.includes('light')
        const passesTab = document.getElementById('rbx-game-passes')
            .getElementsByTagName('h3')
        passesTab[0].innerText = `Passes (${addCommas(total)} Robux)`
}, 100);