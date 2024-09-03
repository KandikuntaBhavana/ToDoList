let inputBox=document.getElementById("inputBox");
let listContainer=document.getElementById("listContainer");
function starTask(){
    if(inputBox.value===''){
        alert("You should write Something :)")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    setTask()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        setTask()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        setTask()
    }
},false)
function setTask(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function getItem(){
    listContainer.innerHTML=localStorage.getItem("data")
}
getItem();