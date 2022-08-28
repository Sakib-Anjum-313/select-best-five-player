

document.getElementById('calculate').addEventListener('click', function(){


    perPlayerValue= parseFloat(getInputFieldById('per-player-input').value);
    calculate= perPlayerValue * selectedListlength;
    
    document.getElementById('player-expence').innerText = calculate;

})
