// ==UserScript==
// @name         Polytoria Decline/Accept All Friend Requests
// @icon         https://cdn.discordapp.com/attachments/898314728219242597/900157044009611284/image.png
// @license      Apache-2.0
// @namespace    lol
// @version      1.0.0
// @description  Grants you the ability to decline or accept every friend request on the friends page.
// @author       levisurely
// @match        http://polytoria.com/my/friends
// @match        https://polytoria.com/my/friends
// @grant        none
// ==/UserScript==

(function () {
function acceptAllFriendRequests() {
    const acceptButtons = document.querySelectorAll('.btn-success[data-user-id]');
    acceptButtons.forEach(button => {
        acceptFriendRequest(button);
    });
}

function declineAllFriendRequests() {
    const declineButtons = document.querySelectorAll('.btn-danger[data-user-id]');
       declineButtons.forEach(button => {
        declineFriendRequest(button);
    });
}

    const acceptAllButton = document.createElement('button');
    acceptAllButton.classList.add('btn', 'btn-success', 'me-2');
    acceptAllButton.textContent = 'Accept All';
    acceptAllButton.addEventListener('click', acceptAllFriendRequests);

    const declineAllButton = document.createElement('button');
    declineAllButton.classList.add('btn', 'btn-danger');
    declineAllButton.textContent = 'Decline/Remove All';
    declineAllButton.addEventListener('click', declineAllFriendRequests);

    const buttonContainer = document.querySelector('.container');
    buttonContainer.insertBefore(acceptAllButton, buttonContainer.firstChild);
    buttonContainer.insertBefore(declineAllButton, buttonContainer.firstChild);

})();
