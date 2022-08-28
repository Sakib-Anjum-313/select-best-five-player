function playerSelection (playerName, btnId){

    const selectedPlayer= playerName;

    const selectedList= document.getElementById('selected-list');

    const selectedListLi= document.createElement('li');
    selectedListLi.innerText= selectedPlayer;

    selectedList.appendChild(selectedListLi);

    let selectedListOl= document.querySelectorAll("#selected-list li");
    selectedListlength= selectedListOl.length;


    if (selectedListlength <= 5){
        document.getElementById(btnId).disabled = true;
    }
    else {
        document.getElementById("selected-list").lastChild.remove();
        selectedListlength -=1;
        alert(" You can't select more than 5 Players!!!!")
    }  
}
