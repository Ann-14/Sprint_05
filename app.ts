
  const jokeContainer = document.querySelector('.joke-text')!
  const btnGetJoke = document.getElementById('next-joke')!
  const reportAcudits : any[] = []
  const dateArr = (new Date()).toISOString()



  btnGetJoke.addEventListener('click',  async function getjoke () {
    
    
    try{
    const res = await  fetch ('https://icanhazdadjoke.com/',{
          headers: {
              Accept: 'application/json',
          },
      }) 
      const data = await res.json()
      jokeContainer.textContent = data.joke
  console.log(data);
      return data
  }
  catch(e) {
      console.log('Error!', e);
    }
})

function RecordScore(id:number){
  reportAcudits.push({
     //Update reportAcudits array
     joke : jokeContainer.textContent,
     date : dateArr,
     score : id,
  }) 
  console.log(reportAcudits);
}