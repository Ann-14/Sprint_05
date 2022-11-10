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
const jokeContainer = document.querySelector('.joke-text');
const btnGetJoke = document.getElementById('next-joke');
const reportAcudits = [];
const dateInfo = (new Date()).toISOString();
let temperature = document.querySelector('.apiTemperature');
//Level II
const jokesArr = [];
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
            console.log(data);
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
};
btnGetJoke.addEventListener('click', pickJoke);
//Update Jokes Array
function RecordScore(id) {
    //If there's no joke you can't score (Validation)
    if (!jokeContainer.textContent)
        return alert("Please, click 'Next Joke' to rate a joke");
    reportAcudits.push({
        //Update reportAcudits array
        joke: jokeContainer.textContent,
        date: dateInfo,
        score: id,
    });
    console.log(reportAcudits);
}
//Weather API
let getWeather = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&hourly=temperature_2m&current_weather=true', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            temperature.textContent = data.current_weather.temperature;
            return data;
        }
        catch (e) {
            console.error(new Error(e));
        }
    });
};
getWeather();
