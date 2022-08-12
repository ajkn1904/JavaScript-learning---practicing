function publicBusFare(totalPeople){
    let busCapacity=50;
     let microBusCapacity= 11;
    let publicBusFee= 250;
    let busNeed= Math.floor(totalPeople/busCapacity);
    let peopleLeft= totalPeople-(busNeed*busCapacity);
    let microBusNeed= Math.floor(peopleLeft/microBusCapacity);
    let peopleGone= (busNeed*busCapacity)+(microBusNeed*microBusCapacity);
    let peopleByPb= totalPeople-peopleGone;
    let totalPbfee=peopleByPb*publicBusFee;
    
    return totalPbfee;
    
  }
    
    let result = publicBusFare(112);
  console.log(result);