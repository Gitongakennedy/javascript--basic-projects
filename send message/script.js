const sendBtn=document.getElementById('sendBtn')
const messageIn=document.getElementById('messageIn')
const messageOut=document.getElementById('messageout')
const container=document.querySelector('.container')
sendBtn.addEventListener('click',sendMsg)

function sendMsg(){
 let content=messageIn.value;
 if(content === ''){
 alert('values cannot be empty')
}else{
 const div=document.createElement('div')
 div.classList.add('messagediv')
 div.innerHTML=content
 messageIn.value=''
 container.appendChild(div)
}

}