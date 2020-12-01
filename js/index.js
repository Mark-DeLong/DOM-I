const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let domIsAwesome = document.querySelector("h1")
let domText = document.createTextNode(siteContent["cta"]["h1"])
domIsAwesome.appendChild(domText)

let getStarted = document.querySelector("button")
let buttonText = document.createTextNode(siteContent["cta"]["button"])
getStarted.appendChild(buttonText)

let img1337 = document.getElementById("cta-img");
img1337.setAttribute('src', siteContent["cta"]["img-src"])

let headings = document.querySelectorAll('h4')
let heading1 = document.createTextNode(siteContent["main-content"]["features-h4"])
let heading2 = document.createTextNode(siteContent["main-content"]["about-h4"])
let heading3 = document.createTextNode(siteContent["main-content"]["services-h4"])
let heading4 = document.createTextNode(siteContent["main-content"]["product-h4"])
let heading5 = document.createTextNode(siteContent["main-content"]["vision-h4"])

headings[0].appendChild(heading1)
headings[1].appendChild(heading2)
headings[2].appendChild(heading3)
headings[3].appendChild(heading4)
headings[4].appendChild(heading5)

let pTag = document.querySelectorAll('p')
let heading6 = document.createTextNode(siteContent["contact"]["contact-h4"])
let contactText1 = document.createTextNode(siteContent["contact"]["address"])
let contactText2 = document.createTextNode(siteContent["contact"]["phone"])
let contactText3 = document.createTextNode(siteContent["contact"]["email"])

headings[5].appendChild(heading6)
pTag[5].appendChild(contactText1)
pTag[6].appendChild(contactText2)
pTag[7].appendChild(contactText3)

let footerText = document.createTextNode(siteContent["footer"]["copyright"])
pTag[8].appendChild(footerText)

let navStyle = document.querySelectorAll('header nav a')
navStyle[0].style.color = 'green'
navStyle[1].style.color = 'green'
navStyle[2].style.color = 'green'
navStyle[3].style.color = 'green'
navStyle[4].style.color = 'green'
navStyle[5].style.color = 'green'

let nav = document.querySelectorAll('a')
let text1 = document.createTextNode(siteContent["nav"]["nav-item-1"])
let text2 = document.createTextNode(siteContent["nav"]["nav-item-2"])
let text3 = document.createTextNode(siteContent["nav"]["nav-item-3"])
let text4 = document.createTextNode(siteContent["nav"]["nav-item-4"])
let text5 = document.createTextNode(siteContent["nav"]["nav-item-5"])
let text6 = document.createTextNode(siteContent["nav"]["nav-item-6"])


nav[0].appendChild(text1)
nav[1].appendChild(text2)
nav[2].appendChild(text3)
nav[3].appendChild(text4)
nav[4].appendChild(text5)
nav[5].appendChild(text6)

let newNav1 = document.createElement("a")
let newNav2 = document.createElement("a")

let text7 = document.createTextNode("new")
let text8 = document.createTextNode("item")

newNav1.appendChild(text7)
newNav2.appendChild(text8)

document.nav.appendChild(newNav2)
