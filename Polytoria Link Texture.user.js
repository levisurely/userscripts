// ==UserScript==
// @name         Polytoria Link Texture
// @icon         *://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @license      Apache-2.0
// @namespace    lol
// @version      1.0.0
// @description  Adds A Button To Link Polytoria Textures!
// @author       levisurely
// @match        *://polytoria.com/shop/*
// @grant        none
// ==/UserScript==

(function () {
  const gid = Number(window.location.pathname.split("/")[2]);
  if (!gid) return;

  let btn = document.createElement("button");
  btn.id = "lev-texture";
  btn.onclick = function () {
    window.open(`*://polytoria.com/assets/catalog/${gid}.png`);
  };
  btn.type = "button";
  btn.href = `*://polytoria.com/assets/catalog/${gid}.png`;
  btn.innerHTML = "View Texture";
  btn.className = "btn btn-block";
  btn.style.backgroundColor = "#8c39d1";
  btn.style.color = "#fff";
  btn.style.borderCcolor = "#8c39d1";
  //console.log(document.getElementsByClassName("col-sm-8"));
  document.getElementsByClassName("col-sm-8")[0].prepend(btn);
})();
