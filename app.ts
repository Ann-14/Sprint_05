
const jokeContainer = document.querySelector('.joke-text')!
const btnGetJoke = document.getElementById('next-joke')!
const reportAcudits: any[] = []
const dateInfo = (new Date()).toISOString()
let temperature = document.querySelector('.apiTemperature')!

//Level II
const jokesArr : string[] = [];


//Jokes API
 async function getjoke() {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      }, 
    })
    const data = await res.json()
    jokeContainer.textContent = data.joke
    return data
  } 
  catch (e: any) {
    console.error(new Error(e));
  }
}

//Chuck Norris jokes API
 async function getChuckNorrisJoke() {
  try {
    const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json', {
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    jokeContainer.textContent = data.joke
    console.log(data)
    return data
  }
  catch (e: any) {
    console.error(new Error(e));
  }
}

// Random num to pick joke
const pickJoke = function (){
  let randomNum = Math.floor(Math.random()*2)+1;
  console.log(randomNum)
 if(randomNum === 1){getChuckNorrisJoke()}
 else{getjoke()}
}
btnGetJoke.addEventListener('click', pickJoke)

//Update Jokes Array
function RecordScore(id: number) {
  //If there's no joke you can't score (Validation)
  if (!jokeContainer.textContent) return alert("Please, click 'Next Joke' to rate a joke");
  reportAcudits.push({
    //Update reportAcudits array
    joke: jokeContainer.textContent,
    date: dateInfo,
    score: id,
  })
  console.log(reportAcudits);
}
//Weather API
let getWeather = async function () {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&hourly=temperature_2m&current_weather=true', {
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    temperature.textContent = data.current_weather.temperature
    return data
  }
  catch (e: any) {
    console.error(new Error(e));
  }
}
getWeather()
