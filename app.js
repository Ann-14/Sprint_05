"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Selecting elements
let temperature = document.querySelector('.apiTemperature');
let currentDate = document.querySelector('.currentDate');
let ratingIcons1 = document.getElementById('icon-face1');
let ratingIcons2 = document.getElementById('icon-face2');
let ratingIcons3 = document.getElementById('icon-face3');
const jokeContainer = document.querySelector('.joke-text');
const btnGetJoke = document.getElementById('next-joke');
const reportAcudits = [];
const dateInfo = (new Date()).toISOString();
//Jokes API
function getjoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            jokeContainer.textContent = data.joke;
            return data;
        }
        catch (e) {
            console.error(new Error(e));
        }
    });
}
//Chuck Norris jokes API
function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://geek-jokes.sameerkumar.website/api?format=json', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            jokeContainer.textContent = data.joke;
            return data;
        }
        catch (e) {
            console.error(new Error(e));
        }
    });
}
// Random num to pick joke
const pickJoke = function () {
    let randomNum = Math.floor(Math.random() * 2) + 1;
    console.log(randomNum);
    if (randomNum === 1) {
        getChuckNorrisJoke();
    }
    else {
        getjoke();
    }
    showIcons();
};
btnGetJoke.addEventListener('click', pickJoke);
//Update Jokes Array
function RecordScore(id) {
    //Validation (if there aren't jokes on display)
    if (!jokeContainer.textContent)
        return alert("Please, click 'Next Joke' to rate a joke");
    reportAcudits.push({
        //Update reportAcudits array
        joke: jokeContainer.textContent,
        date: dateInfo,
        score: id,
    });
    //Hiding icons after choosing score
    if (ratingIcons1 != null) {
        hideIcons();
    }
    alert("thanks for your vote ✔! Please, click 'Next Joke' to check out more 😊 ");
}
//Weather API
let getWeather = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://api.open-meteo.com/v1/forecast?latitude=41.5498&longitude=-2.21059&hourly=temperature_2m&current_weather=true', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            temperature.textContent = `${data.current_weather.temperature}°C`;
            currentDate.textContent = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
            return data;
        }
        catch (e) {
            console.error(new Error(e));
        }
    });
};
getWeather();
const showIcons = function () {
    // ✅ Remove class
    ratingIcons1.classList.remove('hidden');
    ratingIcons2.classList.remove('hidden');
    ratingIcons3.classList.remove('hidden');
};
const hideIcons = function () {
    // ✅ Add class
    ratingIcons1.classList.add('hidden');
    ratingIcons2.classList.add('hidden');
    ratingIcons3.classList.add('hidden');
};
