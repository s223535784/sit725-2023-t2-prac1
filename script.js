function changeText() 
{
    let textList = ['My','name','is','Vish','Bye'];
    let randomNumber = getRandomNumber(0, textList.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max) 
{
    return Math.floor(Math.random()*(max-min + 1)+min);
}
