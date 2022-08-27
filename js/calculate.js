

document.getElementById('calculate').addEventListener('click', function(){


    perPlayerValue= parseFloat(document.getElementById('per-player-input').value);
    calculate= perPlayerValue * selectedListlength;
    
    document.getElementById('player-expence').innerText=  calculate;


})