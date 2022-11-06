
  const jokeContainer = document.querySelector('.joke-text')!
  const btnGetJoke = document.getElementById('next-joke')!
  const reportAcudits = [
    {
        joke: "",

        score: 1,
      
        date: "",
    }
]

  btnGetJoke.addEventListener('click',  async function getjoke () {

    try{
    const res = await  fetch ('https://icanhazdadjoke.com/',{
          headers: {
              Accept: 'application/json',
          },
      }) 
      const data = await res.json()
      console.log(data.joke);
      console.log(data);
      jokeContainer.textContent = data.joke

    //Update reportAcudits array
      reportAcudits[0].joke = data.joke
      reportAcudits[0].date = (new Date()).toISOString(); 
    

      return data
  }
  catch(e) {
      console.log('Error!', e);
    }
  


})

