
const jokeContainer = document.querySelector('.joke-text')!
const jokeChuckNorris = document.querySelector('.joke-chuck')!
const btnGetJoke = document.getElementById('next-joke')!
const reportAcudits: any[] = []
const dateArr = (new Date()).toISOString()
let temperature = document.querySelector('.apiTemperature')!


//Jokes API
btnGetJoke.addEventListener('click', async function getjoke() {
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
})
//Update Jokes Array
function RecordScore(id: number) {
  reportAcudits.push({
    //Update reportAcudits array
    joke: jokeContainer.textContent,
    date: dateArr,
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

//Chuck Norris jokes API
btnGetJoke.addEventListener('click', async function getChuckNorrisJoke() {
  try {
    const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json', {
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    jokeChuckNorris.textContent = data.joke
    return data
  }
  catch (e: any) {
    console.error(new Error(e));
  }
}
)
