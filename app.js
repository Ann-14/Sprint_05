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
const jokeContainer = document.getElementById('joke');
const btnGetJoke = document.getElementById('next-joke');
btnGetJoke.addEventListener('click', function getjoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield res.json();
            console.log(data.joke);
            console.log(data);
            return data;
        }
        catch (e) {
            console.log('Error!', e);
        }
    });
});