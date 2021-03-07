
document.getElementById("submit").addEventListener("click", function countWords() { 
    const message = document.getElementById("message")
    let numberOfWordsInTheMessage = 0; 
    for (var i = 0; i < message.length; i++) { 
        let space = message[i]; 

        if (space == " ") { 
            numberOfWordsInTheMessage += 1; 
        } 
        return numberOfWordsInTheMessage;
    } 
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
});

    


const randomPhrases = [
    'A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey',
    'We must all face the choice between what is right and what is easy. (c) Albus Dumbledore',
    'You are a wizard, Harry (c) Hagrid'
];
document.getElementById("submit").addEventListener("click", function(){
    var q = randomPhrases[ Math.floor( Math.random() * randomPhrases.length ) ];
    document.getElementById("phrase").innerHTML = q;
});

const randomPictures = [
'https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE',
'https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg',
'https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg'
];

  document.getElementById("submit").addEventListener("click", function(){
      var q = randomPictures[ Math.floor( Math.random() * randomPictures.length ) ];
      document.getElementById("picture").innerHTML = q;
  });
