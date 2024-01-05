// SCROLL FUNCTION
let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }

})



// NAV BAR FUNCTION
document.querySelector('.nav-bar').addEventListener('click', (ev) => {
    
       
    const linkHref = ev.target.href;
   
    console.log('Link points to:', linkHref);
    
    if (linkHref.includes('#experience')) {
        renderExperience();
    } else if (linkHref.includes('#projects')) {
        renderProjects();
    } else if (linkHref.includes('#person')) {
        renderHome();
    }
});

function renderHome() {
    document.querySelector('.nav-bar a[href="#person"]').setAttribute('href', '#person'); 
}

function renderExperience() {
    document.querySelector('.nav-bar a[href="#experience"]').setAttribute('href', '#experience');
}

function renderProjects() {
    document.querySelector('.nav-bar a[href="#projects"]').setAttribute('href', '#projects');
}



// HAMBURGER MENU FUNCTION
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navList = document.getElementById('list-menu');

    hamburgerMenu.addEventListener('click', function () {
      console.log('Hamburger menu clicked');
      navList.classList.toggle('show');
  });
});


// SOCIAL MEDIA LINKS
document.addEventListener('DOMContentLoaded', function () {
  
    let linksContainer = document.querySelector('.links');

    let githubURL = 'https://github.com/Dianadev-uk';
    let instagramURL = 'https://www.instagram.com/dianajacobsen_uk/';
    let linkedinURL = 'https://www.linkedin.com/in/diana-jacobsen-da-silva-1aa315278/';

    let githubLink = createSocialLink(githubURL, 'icon-github', './images/git.png');
    linksContainer.appendChild(githubLink);
    
    let instagramLink = createSocialLink(instagramURL, 'icon-instagram', './images/insta.jpg');
    linksContainer.appendChild(instagramLink);

    let linkedinLink = createSocialLink(linkedinURL, 'icon-linkedin', './images/linkedin.png');
    linksContainer.appendChild(linkedinLink);

     
    function createSocialLink(url, alt, imgSrc) {
        let link = document.createElement('a');
        link.href = url;
        link.target = '_blank';

        let img = document.createElement('img');
        img.src = imgSrc;
        img.alt = alt;

        link.appendChild(img);

        return link;
    }
});

// TECHS IMAGES
const techsData = [
    { name: 'HTML', imgSrc: './images/HTML.png' },
    { name: 'CSS', imgSrc: './images/CSS.png' },
    { name: 'JS', imgSrc: './images/JAVASCRIPT.png' },
    { name: 'VITE', imgSrc: './images/VITE.png' },
    { name: 'NODE', imgSrc: './images/nodejs.png' }
];

const stacksContainer = document.getElementById('dynamicStacks');

techsData.forEach(tech => {
    const listItem = document.createElement('ul');
    listItem.innerHTML = `
    <li>
    <div data="${tech.name}"><img src="${tech.imgSrc}" alt="${tech.name}-icon><div>"
    <li>
    `;
        
    stacksContainer.appendChild(listItem);
       
});

