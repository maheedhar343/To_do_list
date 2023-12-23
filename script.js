const input =document.getElementById("item");
const listitem=document.getElementById("contant");
function addtask(){
    if(input.value=== ""){
        alert("you have to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listitem.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    save();
}
listitem.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);
function save(){
    localStorage.setItem("data",listitem.innerHTML);
}
function task(){
    listitem.innerHTML=localStorage.getItem("data");
}
task();

//date and time
function updateDateTime() {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    const formattedTime = now.toLocaleTimeString('en-US');

    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);