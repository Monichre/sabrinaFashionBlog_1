// var links = [{label: 'Bahamas', bg: '#c0392b'},
//              {label: 'Jamaica', bg: '#16a085'},
//              {label: 'Spain', bg: '#8e44ad'},
//              {label: 'Italy', bg: '#27ae60'},
//              {label: 'LA', bg: '#f39c12'},
//              {label: 'Hawaii', bg: '#2980b9'}];
//
// var travelNavHeight = document.getElementById('travel-nav').clientHeight;
// console.log(document.querySelector('#travel-nav'));
// console.log(travelNavHeight);
//
// if(travelNavHeight === 0) {
//     travelNavHeight = 238;
// }
// var radius = travelNavHeight*0.6,
//     circle = document.createElement('div'),
//     borderSize = radius*0.021;
//     totalArea = 48,
//     increment = totalArea/(links.length-1),
//     startPoint = 0-(totalArea/2),
//     fontSize = radius*0.12,
//     linkSize = radius*0.25;
//
// styleCircle();
// addCircle();
// addLinks();
// styleLinks();
//
// function styleCircle() {
//   circle.style.border= borderSize+'px solid #333';
//   circle.style.width = radius*2 + 'px';
//   circle.style.height = radius*2 + 'px';
//   circle.style.borderRadius = radius+'px';
//   circle.style.position = 'absolute';
//   circle.style.top = '-'+radius*0.2+'px';
//   circle.style.left = radius*-1+'px';
// }
//
// function addCircle() {
//   document.querySelector('#travel-nav').appendChild(circle);
// }
//
// function addLinks() {
//   for (var i=0, l=links.length; i<l; i++) {
//     link = document.createElement('a'),
//     hover = document.createElement('span');
//     link.href = "#";
//     // link.dataset.color = links[i].bg;
//     link.style.display = 'inline-block';
//     link.style.textDecoration = 'none';
//     link.style.color = '#333';
//     link.style.position = 'absolute';
//     link.style.zIndex = 100;
//     link.innerHTML = links[i].label;
//     hover.style.position = 'absolute';
//     hover.style.display = 'inline-block';
//     hover.style.zIndex = 50;
//     hover.style.opacity = 0;
//     document.querySelector('#travel-nav').appendChild(link);
//     document.querySelector('#travel-nav').appendChild(hover);
//
//
//     link.addEventListener('mouseover', linkOver);
//     link.addEventListener('mouseout', linkOut);
//     links[i].elem = link;
//     links[i].hover = hover;
//   }
// }
//
// function styleLinks() {
//   for (var i=0, l=links.length; i<l; i++) {
//     var link = links[i].elem, hover = links[i].hover, deg = startPoint+(i*increment);
//     link.style.paddingLeft = radius*1.2+'px';
//     link.style.fontSize = fontSize+'px';
//     link.style.height = linkSize+'px';
//     link.style.lineHeight = linkSize+'px';
//     setTransformOrigin(link, '0px '+linkSize*0.5+'px');
//     setTransition(link, 'all 0.2s ease-out');
//     setTransform(link, 'rotate('+ deg+'deg)');
//     link.style.left = borderSize+'px';
//     link.style.top = (travelNavHeight/2) - (travelNavHeight*0.1)+borderSize+'px';
//
//     hover.style.left = borderSize+'px';
//     setTransformOrigin(hover, '0px '+linkSize*0.5+'px');
//     setTransition(hover, 'all 0.2s ease-out');
//     setTransform(hover, 'rotate('+deg+'deg)');
//     hover.style.top = (travelNavHeight*0.4)+borderSize +'px';
//     hover.style.width = radius+(borderSize/2)+'px';
//     hover.style.height = linkSize+'px';
//     hover.style.borderRight = borderSize +'px solid #ba2424';
//
//   }
// }
//
// window.onresize = function() {
//   travelNavHeight = document.querySelector('#travel-nav').height;
//   radius = travelNavHeight*0.6,
//   borderSize = radius*0.021;
//   fontSize = radius*0.12,
//   linkSize = radius*0.25;
//   styleCircle();
//   styleLinks();
// }
//
// function linkOver(e) {
//   var thisLink = e.target, thisHover = thisLink.nextSibling;
//   thisLink.style.paddingLeft = radius*1.25+'px';
//   thisHover.style.opacity = 1;
//   document.querySelector('#travel-nav').style.backgroundColor = thisLink.dataset.color;
// }
//
// function linkOut(e) {
//   var thisLink = e.target, thisHover = thisLink.nextSibling;
//   thisLink.style.paddingLeft = radius*1.2+'px';
//   thisHover.style.opacity = 0;
// }
//
// function setTransform(element, string) {
//   element.style.webkitTransform = string;
//   element.style.MozTransform = string;
//   element.style.msTransform = string;
//   element.style.OTransform = string;
//   element.style.transform = string;
// }
//
// function setTransformOrigin(element, string) {
//   element.style.webkitTransformOrigin = string;
//   element.style.MozTransformOrigin = string;
//   element.style.msTransformOrigin = string;
//   element.style.OTransformOrigin = string;
//   element.style.transformOrigin = string;
// }
//
// function setTransition(element, string) {
//   element.style.webkitTransition = string;
//   element.style.MozTransition = string;
//   element.style.msTransition = string;
//   element.style.OTransition = string;
//   element.style.transition = string;
// }
//
//
// var demos = [];
//
// var cloudsuit = {
//     one : {
//         bg: "http://caraujo_pens.surge.sh/images/ZnkfwAR.jpg",
//         bm: "none"
//     },
//     two : {
//         bg: "http://caraujo_pens.surge.sh/images/ONBXKkS.jpg",
//         bm: "lighten"
//     },
//     three : {
//         bg: "http://caraujo_pens.surge.sh/images/qKNpn9G.png",
//         bm: "multiply"
//     }
// }
// demos.push(cloudsuit);
//
//
// var urbansky = {
//     one : {
//         bg: "http://caraujo_pens.surge.sh/images/l1MS7kk.jpg",
//         bm: "none"
//     },
//     two : {
//         bg: "http://caraujo_pens.surge.sh/images/6QBLNy6.jpg",
//         bm: "multiply"
//     },
//     three : {
//         bg: "http://caraujo_pens.surge.sh/images/bmnzJRs.png",
//         bm: "none"
//     }
// }
// demos.push(urbansky);
//
//
// var knowledge = {
//     one : {
//         bg: "http://caraujo_pens.surge.sh/images/YpTSfYD.jpg",
//         bm: "none"
//     },
//     two : {
//         bg: "http://caraujo_pens.surge.sh/images/ziAdjNM.jpg",
//         bm: "multiply"
//     },
//     three : {
//         bg: "http://caraujo_pens.surge.sh/images/dnfONso.png",
//         bm: "none"
//     }
// }
// demos.push(knowledge);


// var container = document.getElementById("container");
// var active;
// var applyDemo = function(number){
//     console.log(number);
//     var go = demos[number-1];
//
//     container.innerHTML = "";
//
//
//
//     var f1 = document.createElement("div");
//     f1.setAttribute("id", "f1");
//     var style = "background-image: url(" + go.one.bg + "); mix-blend-mode: " + go.one.bm + ";";
//     f1.setAttribute("style", style);
//     container.appendChild(f1);
//
//
//     var f2 = document.createElement("div");
//     f2.setAttribute("id", "f2");
//     var style = "background-image: url(" + go.two.bg + "); mix-blend-mode: " + go.two.bm + ";";
//     f2.setAttribute("style", style);
//     container.appendChild(f2);
//
//     var f3 = document.createElement("div");
//     f3.setAttribute("id", "f3");
//     var style = "background-image: url(" + go.three.bg + "); mix-blend-mode: " + go.three.bm + ";";
//     f3.setAttribute("style", style);
//     container.appendChild(f3);
//     active = number;
//
//     document.body.setAttribute("data-demo", number);
// }
// applyDemo(1);
//
//
// $('.demos').on('click', 'a', function(event) {
//     event.preventDefault();
//     var t = this;
//
//     if(active == t.getAttribute("data-go")) return;
//
//     $(container).fadeOut({
//         duration: 1000,
//         complete: function(){
//             applyDemo(t.getAttribute("data-go"));
//             $(container).fadeIn(1000);
//         }
//     });
// });

// Travel Card Blog Posts Expansding UI
// listing vars here so they're in the global scope
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;

// initiate the process
init();

function init() {
  resize();
  selectElements();
  attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
  cards = document.getElementsByClassName('card'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentText = document.getElementById('open-content-text'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}

/* When a card is clicked */
function onCardClick(card, i) {
  // set the current card
  currentCard = card;
  // add the 'clicked' class to the card, so it animates out
  currentCard.className += ' clicked';
  // animate the card 'cover' after a 500ms delay
  setTimeout(function() {animateCoverUp(currentCard)}, 500);
  // animate out the other cards
  animateOtherCards(currentCard, true);
  // add the open class to the page content
  openContent.className += ' open';
}

/*
* This effect is created by taking a separate 'cover' div, placing
* it in the same position as the clicked card, and animating it to
* become the background of the opened 'page'.
* It looks like the card itself is animating in to the background,
* but doing it this way is more performant (because the cover div is
* absolutely positioned and has no children), and there's just less
* having to deal with z-index and other elements in the card
*/
function animateCoverUp(card) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  openContentText.innerHTML = '<h1>'+card.children[2].textContent+'</h1>'+paragraphText;
  openContentImage.src = card.children[1].src;
  setTimeout(function() {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
  // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  // animate scale back to the card size and position
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  setTimeout(function() {
    // set content back to empty
    openContentText.innerHTML = '';
    openContentImage.src = '';
    // style the cover to 0x0 so it is hidden
    cover.style.width = '0px';
    cover.style.height = '0px';
    pageIsOpen = false;
    // remove the clicked class so the card animates back in
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  // style the cover so it is in exactly the same position as the card
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  // style the cover to be the same color as the card
  cover.style.background = cardStyle.background;
}

function scaleCoverToFillWindow(cardPosition) {
  // calculate the scale and position for the card to fill the page,
  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  // set the transform on the cover - it will animate because of the transition set on it in the CSS
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
}

/* When the close is clicked */
function onCloseClick() {
  // remove the open class so the page content animates out
  openContent.className = openContent.className.replace(' open', '');
  // animate the cover back to the original position card and size
  animateCoverBack(currentCard);
  // animate in other cards
  animateOtherCards(currentCard, false);
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    // animate cards on a stagger, 1 each 100ms
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

// animations on individual cards (by adding/removing card names)
function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
  if (el.className.indexOf('card ') > -1) return el;
  else return getCardElement(el.parentElement);
}

// resize function - records the window width and height
function resize() {
  if (pageIsOpen) {
    // update position of cover
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

var paragraphText = '<p>I do not believe in spending loads of money for warm weather clothes. Something about the fact that there’s minimal fabric means that the prices should also be minimal. Haha! Seriously – much of my warm weather clothing has been thrifted, repurposed, or purchased at extremely low prices. I’m sharing some of my inexpensive Caribbean outfits, that also reflect the colorful, relaxed vibes of the islands, mon! Shopping info is included There’s one requirement I follow when packing to travel to the Caribbean – wear color. Besides planning for lots of outdoors activities (hiking, visiting volcanoes) and beach bumming, I wasn’t sure what else I’d be getting into during my recent trip to St. Lucia. So, I mostly ended up packing new items I’d just gotten and was excited to wear (it had been awhile since I’d seen the sun because the weather had been miserable in NYC).Here’s what I wore in St. Lucia…</p>';
