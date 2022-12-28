setInterval(setClock,1000)
const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock()
{
    var currentDate = new Date()
    const secondsRatio=currentDate.getSeconds()/60
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60
    const hoursRatio=(minutesRatio+currentDate.getHours())/12
    setRatio(hourHand,hoursRatio)
    setRatio(minuteHand,minutesRatio)
    setRatio(secondHand,secondsRatio)
}


function setRatio(element,timeRatio){
element.style.setProperty('--rotation',timeRatio*360)
}
setClock();