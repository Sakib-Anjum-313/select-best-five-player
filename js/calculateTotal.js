perPlayerExpence=0;
managerCost=0;
coachCost=0;

document.getElementById('calculate-total').addEventListener('click', function(){
    const perPlayerExpence= calculate;
     const managerCost= parseFloat(getInputFieldById('manager-cost').value) ;
     const coachCost = parseFloat(getInputFieldById('coach-cost').value) ;

    console.log(managerCost ,  coachCost,  perPlayerExpence );
    // calculate = calculate || 0;
    // managerCost = managerCost || 0;
    // coachCost= coachCost || 0;
    // if ( managerCost === NaN  ){
    //     perPlayerExpence= 0;
    //     coachCost= 0;
    //     managerCost= 0;
    //     console.log(managerCost ,  coachCost,  perPlayerExpence );
      
    // }

    // console.log(managerCost ,  coachCost, calculate );
    
    
    totalCost= perPlayerExpence + managerCost + coachCost;

    document.getElementById('total-cost').innerText=  totalCost;
})
