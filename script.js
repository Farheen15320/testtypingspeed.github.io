const setOfWords = ["What a good day it is!","Hello, How are you","I enjoy listing to music.","Practise makes a man perfect.",
"Consistency is the key","The quick brown fox jumps over the lazy dog",
];

const sentence = document.getElementById('sentence');
const typedWords = document.getElementById('myWords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    sentence.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done"; 
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalWords = typedWords.value;
    let wordCount = wordCounter(totalWords);

    // speed calculation formula
    let speed = Math.floor((wordCount / totalTime)*60);

    let finalMsg = "you typed total at "+speed+ " words per minute";
    finalMsg += compareWords(sentence.innerText, totalWords);
    sentence.innerText = finalMsg;
}

const compareWords = (actualStr, typedStr) => {
    let word1 = actualStr.split(" ");
    let word2 = typedStr.split(" ");
    let cnt = 0;

    word1.forEach(function(item, index) {
        if(item == word2[index]){
            cnt++;
        }
        
    });

    let errorWords = ( word1.length - cnt );
    return (cnt + " correct out of " + word1.length + " words and the total number of error are "+ errorWords+ ".");

}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typedWords.disabled = false;
        playGame();
    }else if(this.innerText == 'Done'){
        typedWords.disabled == true;
        btn.innerText = "Start";
        endPlay();
    }
})