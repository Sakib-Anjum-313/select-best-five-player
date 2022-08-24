

function playerSelection (playerName, btnId){

    const selectedPlayer= playerName;

    const selectedList= document.getElementById('selected-list');

    selectedListLi= document.createElement('li');
    
    selectedListLi.innerText= selectedPlayer;

    selectedList.appendChild(selectedListLi);

    selectedListOl= document.querySelectorAll("#selected-list li");
    selectedListlength= selectedListOl.length;

    console.log(selectedListlength);
    console.log(btnId);

    



    if (selectedListlength <= 5){
        document.getElementById(btnId).disabled = true;
    }

    else {
        document.getElementById("selected-list").lastChild.remove();
        alert(" You can't selecte more than 5!!!!")
    }


    
}
