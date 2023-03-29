console.log("JS Running");

let bioLinks = document.querySelectorAll('#team-section button'),
    theLightBox = document.querySelector('#lightbox');

function getTeamData() {
    //change the lightbox content to match the hero data
    //this (the object reference) is coming from the custom data attribute we added to each anchor tag in the html

    theLightBox.querySelector('.lb_heading').textContent = team_data[this.dataset.member].name;
    theLightBox.querySelector('.lb_text').textContent = team_data[this.dataset.member].bio;

    theLightBox.style.backgroundImage = `url(${team_data[this.dataset.member].img})`;


    // change any other element's content using the same method - select it; add the object's data to it
    // as textContent; src attributes... whatever you need to change.
}

bioLinks.forEach(link => link.addEventListener('click', getTeamData));