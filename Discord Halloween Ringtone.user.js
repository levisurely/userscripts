// ==UserScript==
// @name         🎃Discord Halloween Ringtone
// @namespace    xd
// @version      1.0.1
// @description  Enables the Discord Halloween ringtone.
// @author       levisurely
// @license      Apache-2.0
// @match        *://discord.com/*
// @match        *://ptb.discord.com/*
// @match        *://canary.discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'bceeb2ba92c01584dcaafc957f769bae');
    return this._play();
};