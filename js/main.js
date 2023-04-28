
let nft1 = document.querySelector('.nft-sliderbar#one')
let nft2 = document.querySelector('.nft-sliderbar#two')
let count = 0;
let anim = setInterval(function() {
    nft1.style.transform = `translateX(${count}px)`;
    nft2.style.transform = `translateX(${count}px)`;
    count-=1;
    if (count == -4010) {
        count = 0
    }
},2)

const textUse = '//Use \n it in \n your work ;)';
let textHTML = '';
let elP = document.querySelector('.title p');
let elNumber = 0;
let spanInText = document.querySelector('.title p span')
let inText = setInterval(() => {
    textHTML += textUse[elNumber];
    elP.innerHTML = textHTML;
    elNumber++;
    if(elNumber == textUse.length) {
        clearInterval(inText);
        spanInText.classList.add('animSpan')
    }
}, 150)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show')
    }
  });
}, {
  rootMargin: '-50px 0px'
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

let textFooterNFT = '//But we know that \nyou are unique ;)'
let NFTfooter = document.querySelector('.nft-footer')

setInterval(() => {

})
  
  