// code your solution here
function saturdayFun(work = "roller-skate"){
    
    return`This Saturday, I want to ${work}!`;
}
saturdayFun();


console.log ("This monday,i will" ,mondayWork());

function mondayWork(work = "go to the office"){
    return`This Monday, I will ${work}.`

}
mondayWork();

function wrapAdjective(visual="*"){
  return function(adjective = "special"){
    return `You are ${visual}${adjective}${visual}!`

  }
  
}
wrapAdjective();