
document.getElementById('calculate-total').addEventListener('click', function(){


    perPlayerExpence= calculate;
    managerCost= parseFloat(document.getElementById('manager-cost').value) ;
    coachCost = parseFloat(document.getElementById('coach-cost').value) ;

    totalCost= perPlayerExpence + managerCost + coachCost;
    
    document.getElementById('total-cost').innerText=  totalCost;
})

