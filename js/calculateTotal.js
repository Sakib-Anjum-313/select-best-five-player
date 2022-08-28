
document.getElementById('calculate-total').addEventListener('click', function(){


    perPlayerExpence= calculate;
    managerCost= parseFloat(getInputFieldById('manager-cost').value) ;
    coachCost = parseFloat(getInputFieldById('coach-cost').value) ;

    totalCost= perPlayerExpence + managerCost + coachCost;

    document.getElementById('total-cost').innerText=  totalCost;
})
