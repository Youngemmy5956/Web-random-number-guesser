

  const targetNum = Math.floor(Math.random() * 10) + 1;

    let guess = parseInt(prompt("Guess a number between 1 and 10"));
      
    while(targetNum !== guess){
        guess = parseInt(prompt("Guess a number between 1 and 10")); 
    }

    alert(`You guessed right. The target number was ${targetNum}`)
