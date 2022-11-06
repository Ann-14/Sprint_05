
  const jokeContainer= document.getElementById('joke')
  const btnGetJoke = document.getElementById('next-joke')!

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
      return data
  }
  catch(e) {
      console.log('Error!', e);
    }
  
})

