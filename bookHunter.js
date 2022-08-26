"use strict";



function fooder() {
    let enterName = prompt(`Как тебя зовут?`);
    let name = enterName;


    let enterMeat = prompt(`${name}, какое мясо ты любишь?`);        
    let enterWay = prompt(`${name}, холодное или горячее?`)
    let meat = enterMeat.toLowerCase();
    let way = enterWay.toLowerCase();
    let x = undefined;
    let y = undefined;

    let chickenArray = ['курица', 'курицу', 'кура', 'курятина', 'куру', 'курятину'];
    let porkArray = ['свинина', 'свинину', 'кабан', 'кабана', 'свинка', 'поросенок'];
    let beefArray = ['говядина', 'говядину', 'бычок', 'бычка', 'корова', 'корову']

    if (chickenArray.includes(meat)) {
      x = 1;
    } else if (porkArray.includes(meat)) {
      x = 4;
    } else if (beefArray.includes(meat)){
      x = 6;
    } else {
      x = 200;
    }


    if (way === 'холодное') {
      y = 1;
    } else if (way === 'горячее') {
      y = 2;
    } else {
      y = 200;
    }

    let answer = x + y;
    if (answer === 2) {
      alert(`${name}, для вас Куриный салат` + `\u{1F60D}`);
    }
    else if (answer === 3){
      alert(`${name}, для вас Куриный суп` + `\u{1F60D}`);
    }
    else if (answer === 5){
      alert(`${name}, для вас салат из свинины` + `\u{1F60D}`);
    }
    else if (answer === 6){
      alert(`${name}, для вас мясо по-французски` + `\u{1F60D}`);
    }
    else if (answer === 7){
      alert(`${name}, для вас язык на тарелке` + `\u{1F60D}`);
    }
    else if (answer === 8){
      alert(`${name}, для вас горячее ассорти из говядины` + `\u{1F60D}`);
    } else {
      alert(`${name}, такого нет в меню ` + `\u{1F60D}, может быть подумаете еще?`);
      fooder();
    }
}

function enterUserText(buttonEnter, window, buttonKeyOne, buttonKeyTwo, buttonKeyThree) {    //проверка на правильность решения по тексту
    let clickButtonFoot = document.querySelector(buttonEnter);
    clickButtonFoot.addEventListener('click', () => {
        let userText = document.querySelector(window);
        if (userText.value === 'Булгаков') {
            alert('Отлично, вы получаете ключ!');

            let xxxKeyQuestion = 0;


            let buttonOneKey = document.querySelector(buttonKeyOne);
            buttonOneKey.addEventListener('click', () => {
                if (xxxKeyQuestion === 0) {
                    alert('Промокод IVI');
                    xxxKeyQuestion = 1;
                }
                else {
                    alert('Ключ уже получен!');
                }
            });

            let buttonTwoKey = document.querySelector(buttonKeyTwo);
            buttonTwoKey.addEventListener('click', () => { 
                if (xxxKeyQuestion === 0) {
                    alert('Промокод OKKO');
                    xxxKeyQuestion = 1;
                }
                else {
                    alert('Ключ уже получен!');
                }
            });

            let buttonThreeKey = document.querySelector(buttonKeyThree);
            buttonThreeKey.addEventListener('click', () => {
                if (xxxKeyQuestion === 0) {
                    alert('Промокод KINOPOISK');
                    xxxKeyQuestion = 1;
                }
                else {
                    alert('Ключ уже получен!');
                }
            });


        } else if (userText.value === ''){
            alert('Нужно что-то ввести, чел!');
        } else if (userText.value === 'xxx') {
            alert(`
              ░░░▄▄▄▓▀▀░░░░░░░▒▒▒▀▀▀█▄░
              ░░▐█░▄▀░░░░░░░░░░░░░▀▄░░█▌
              ░░▐░▐░░░░░░░░░░░░░░░░░▐░░▌
              ░░▐▐░░░░░░░▀▄▒▄▀░░░░░░░▐░░▌
              ░░▐▐░░░░░░░▒▒▐▒▒░░░░░░░▐░░▌
              ░░▐▐░░░▄░░░░▒▐▒░░░▄░░░░▐░░▌
              ░░▐▐▒░░░░░▒▒▒▐▒▒▒░░░░░░▐░░▌░
              ░░▐░▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀▌░▌░
              `);
        } else if (userText.value === 'food') {
            fooder();
          } else {
            alert('Нет! Тебе стоит подучить русскую литературу, малой!')
        };
        userText.value = '';
    });
};





// ____________________________________________________________________________________________________________________________________


function parallaxEffect(starIMGleft, startIMGtop, say, obj){                            //  parallax эффект  
    document.addEventListener("mousemove", function (e) { parallaxFunc(e); } );
    function parallaxFunc(e){
        let x = e.clientX;
        let y = e.clientY;

        let containerForXY = document.querySelector(say);
        // containerForXY.innerHTML = `<p>x = ${x} y = ${y}</p>`;  // выводим значения XY на экран для дальнейшего понимания движения

        const starIMG = document.querySelector(obj);

        let newXfromClientX = `${ (e.clientX / 30) + starIMGleft }vw`;
        let newYfromClientY = `${ (e.clientY / 30) + startIMGtop }vh`;

        starIMG.style.left = newXfromClientX;
        starIMG.style.top = newYfromClientY;
    };
};



function parallaxEffectMinus(starIMGleft, startIMGtop, say, obj){
    document.addEventListener("mousemove", function (e) { parallaxFuncMinus(e); } );
    function parallaxFuncMinus(e){
        const starIMGtwo = document.querySelector(obj);

        let newXfromClientXX = `${ ( (e.clientX / 80) * -1) + starIMGleft}vw`;
        let newYfromClientYY = `${ ( (e.clientY / 80) * -1) + startIMGtop}vh`;

        starIMGtwo.style.left = newXfromClientXX;
        starIMGtwo.style.top = newYfromClientYY;
    };
};



function parallaxEffectLite(starIMGleft, startIMGtop, say, obj){
    document.addEventListener("mousemove", function (e) { parallaxFuncLite(e); } );
    function parallaxFuncLite(e){
        const starIMGthree = document.querySelector(obj);

        let newXfromClientXXX = `${(e.clientX / 150) + starIMGleft}vw`;
        let newYfromClientYYY = `${(e.clientY / 150) + startIMGtop}vh`;

        starIMGthree.style.left = newXfromClientXXX;
        starIMGthree.style.top = newYfromClientYYY;
    };
};



function burgerAnimation() {              //callback function for burger menu
    let icon = document.querySelector('.burgerIcon');
    let menuWindow = document.querySelector('.window');
    if (icon.classList.contains('click')) {
        icon.classList.remove('click');
    }
    else {
        icon.classList.add('click');
    }
    if (menuWindow.classList.contains('click')) {
        menuWindow.classList.remove('click');
    }
    else {
        menuWindow.classList.add('click');
    }
}



function textAir() {
    window.addEventListener('scroll', ()=>{
        let sett = document.querySelector('.demo');
        sett.innerHTML = `${pageYOffset}`
        if (pageYOffset > 150) {
            let board = document.querySelector('.board');
            board.classList.add('blink');
        }
        if (pageYOffset > 700) {
            let block = document.querySelector('.inputWindow');
            let button = document.querySelector('.buttonFoot');
            block.classList.add('blink');
            button.classList.add('blink');
        }
    });
}

//____________________________________________________________________________________________________pageYOffset________________________________

parallaxEffectLite(5, 25, '.sayYX', '.star1');                                 //разные параллаксы
parallaxEffectLite(5, 85, '.sayYX', '.star2');
parallaxEffect(25, 36, '.sayYX', '.star3');
parallaxEffectMinus(60, 44, '.sayYX', '.star4');
parallaxEffectMinus(40, 78, '.sayYX', '.star5');
parallaxEffect(40, 66, '.sayYX', '.star6');
parallaxEffectLite(80, 30, '.sayYX', '.star7');
parallaxEffectLite(80, 80, '.sayYX', '.star8');



enterUserText('.buttonFoot', '.inputWindow', '.buttonHeaderOne', '.buttonHeaderTwo', '.buttonHeaderThree');   //проверка на правильность решения по тексту


textAir();


