document.addEventListener('DOMContentLoaded', async (event)=>{
    
    enterButton  = document.getElementById("enter");
    leaveButton = document.getElementById("leave");

    disclaimerCard = document.getElementById('disclaimer-card');

    rightChoice = document.getElementById("right-choice");
    wrongChoice = document.getElementById("wrong-choice");

    conversationCard = document.getElementById("conversation-card");
    conversationTitle = document.getElementById("conversation-title");

    enterButton.onclick = () =>{
        disclaimerCard.style.display = "none";
        rightChoice.style.display = "block";

        conversationCard.style.display = "flex";
        conversationTitle.style.display = "block";
    }

    leaveButton.onclick = () =>{
        disclaimerCard.style.display = "none";
        wrongChoice.style.display = "block";
        
        conversationCard.style.display = "flex";
        conversationTitle.style.display = "block";
    }
})