(function(){
    function generateRandom(){
        return Math.floor(Math.random() * 16);
    }

    const random = generateRandom();

    document.getElementById("play").addEventListener("click", function(){
        let guess = document.getElementById("guess").value;

        if(guess == random){
            alert("Awesome! your number " +guess+ " was correct. You can be named many things, hungry not being one of them.");
        }else{
            alert("Bummer... You guessed " +guess+ " and the secret number was " + random + ".");
        }
    });
})();