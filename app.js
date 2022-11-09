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
const jokeChuckNorris = document.querySelector('.joke-chuck');
const btnGetJoke = document.getElementById('next-joke');
const reportAcudits = [];
const dateArr = (new Date()).toISOString();
let temperature = document.querySelector('.apiTemperature');
//Jokes API
btnGetJoke.addEventListener('click', function getjoke() {
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
});
//Update Jokes Array
function RecordScore(id) {
    reportAcudits.push({
        //Update reportAcudits array
        joke: jokeContainer.textContent,
        date: dateArr,
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
//Chuck Norris jokes API
btnGetJoke.addEventListener('click', function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://geek-jokes.sameerkumar.website/api?format=json', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            jokeChuckNorris.textContent = data.joke;
            return data;
        }
        catch (e) {
            console.error(new Error(e));
        }
    });
});
