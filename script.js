const currentTime =document.querySelectorAll("h1")[0],
 celectMenu =document.querySelectorAll("select"),
 content =document.querySelectorAll(".content")[0],
 setAlarBtn =document.querySelectorAll("button")[0];
let alarmTime ,isAlarmSet=false;
 let ringtone =new Audio("file/ringtone.mp3")
for (let i = 12; i > 0; i--) {
     i=i<10? "0"+ i :i;
     let option = `<option value="${i}">${i}</option>`;
     celectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i = 59; i >= 0; i--) {
    i=i<10? "0"+ i :i;
    let option = `<option value="${i}">${i}</option>`;
    celectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i = 2; i > 0; i--) {
    let ampm =i==1? "AM":"PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    celectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}
setInterval(() =>{
    let date =new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm= "AM";
    if(h>=12){
        h=h-12
        ampm="PM"
    }

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText=`${h}:${m}:${s} ${ampm}`;

    if(alarmTime==`${h}:${m} ${ampm}`){
        ringtone.play();
        ringtone.loop=true;
    }
    
},1000);

function srtAlarm(){
    if(isAlarmSet){
        alarmTime="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarBtn.innerText="Set Alarm";
        return isAlarmSet=false;
    }

    let time =`${celectMenu[0].value}:${celectMenu[1].value} ${celectMenu[2].value}`;
    if(time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")){
        return alert("Plese , select a valid time to sit alarm!")
    }
    isAlarmSet=true;
    alarmTime= time;
    content.classList.add("disable");
    setAlarBtn.innerText="Clear Alarm";

}
 
setAlarBtn.addEventListener("click",srtAlarm);