function grader() {
    var grade = document.querySelector('#grade').value;
    var gradeResult = document.querySelector('#gradeResult');
  

switch (true) {


  case grade>=79 && grade<100:
  gradeResult.innerHTML = "GRADE IS A"
  break
  case grade>=60 && grade<79:
  gradeResult.innerHTML = "GRADE IS: B"
  break
  case grade>=49 && grade<59:
  gradeResult.innerHTML = "GRADE IS: C"
  break
  case grade>=40 && grade<49:
  gradeResult.innerHTML = "GRADE IS: D"
  break
  case grade<40 && grade>=0:
      gradeResult.innerHTML = "GRADE IS: E"
  break
  default:
  gradeResult.innerHTML = "input a valid value"    


     

  }
 }


 function speed(){

  let speed = document.querySelector('#speed').value
  let speedResult = document.querySelector('#speedResult')


switch (true) {


case speed<=70 :
speedResult.innerHTML = "Ok"
break
case speed>=75 && speed<79:
speedResult.innerHTML = "Speed limit exceeded by +5km/h: +1 demerit point"
break
case speed>=80 && speed<84:
speedResult.innerHTML = "Speed limit exceeded by +10km/h: +2 demerit points"
break
case speed>=85 && speed<89:
speedResult.innerHTML = "Speed limit exceeded by +15km/h: +3 demerit points"
break
case speed>=90 && speed<94:
speedResult.innerHTML = "Speed limit exceeded by +20km/h: +4 demerit points"
break
case speed>=95 && speed<99:
  speedResult.innerHTML = "Speed limit exceeded by +25km/h: +5 demerit points"
break
case speed>=100 && speed<104:
  speedResult.innerHTML = "Speed limit exceeded by +30km/h: +6 demerit points"
break
case speed>=105 && speed<109:
  speedResult.innerHTML = "Speed limit exceeded by +35km/h: +7 demerit points"
break
case speed>=110 && speed<114:
  speedResult.innerHTML = "Speed limit exceeded by +40km/h: +8 demerit points"
break
case speed>=115 && speed<119:
  speedResult.innerHTML = "Speed limit exceeded by +45km/h: +9 demerit points"
break
case speed>=120 && speed<124:
  speedResult.innerHTML = "Speed limit exceeded by +50km/h: +10 demerit points"
break
case speed>=125 && speed<129:
  speedResult.innerHTML = "Speed limit exceeded by +55km/h: +11 demerit points"
break
case speed>=130 :
  speedResult.innerHTML = "Speed limit exceeded by +60km/hr: +12 demerit points:License Suspended"
break

default:


}
 }



 function netSalCalculator() {
    let basicSalary = document.querySelector("#grosssalary").value; 
    let nhif = document.querySelector("#NHIF");
    let nssfdeduction = document.querySelector("#NSSF");
    let netsal = document.querySelector("#netsalary");
    let ptax; 


    if (isNaN(basicSalary)) {
      payeeTax.innerHTML = `Payee tax is: ${ptax}`;
    } else if (basicSalary <= 24000) {
      ptax = basicSalary * 0.1;
      payeeTax.innerHTML = `Payee tax is: ${ptax}`;
    } else if (basicSalary > 24000 && basicSalary <= 32333) {
      ptax = basicSalary * 0.25;
      payeeTax.innerHTML = `Payee tax is: ${ptax}`;
    } else if (basicSalary > 32333) {
      ptax = basicSalary * 0.3;
      payeeTax.innerHTML = `Payee tax is: ${ptax}`;
    }
  
    
    switch (
      true 
    ) {
      case basicSalary <= 6000:
        deduction = 150;
        break;
      case basicSalary <= 8000:
        deduction = 300;
        break;
      case basicSalary <= 12000:
        deduction = 400;
        break;
      case basicSalary <= 15000:
        deduction = 500;
        break;
      case basicSalary <= 20000:
        deduction = 750;
        break;
      case basicSalary <= 25000:
        deduction = 850;
        break;
      case basicSalary <= 30000:
        deduction = 900;
        break;
      case basicSalary <= 35000:
        deduction = 950;
        break;
      case basicSalary <= 40000:
        deduction = 1000;
        break;
      case basicSalary <= 45000:
        deduction = 1100;
        break;
      case basicSalary <= 50000:
        deduction = 1200;
        break;
      case basicSalary <= 60000:
        deduction = 1300;
        break;
      case basicSalary <= 70000:
        deduction = 1400;
        break;
      case basicSalary <= 80000:
        deduction = 1500;
        break;
      case basicSalary <= 90000:
        deduction = 1600;
        break;
      case basicSalary > 100000:
        deduction = 1700;
        break;
  
      default:
        deduction = 0;
        break;
    }
  
    nhif.innerHTML = `NHIF deduction is :${deduction}`;
  
    
    nssf = basicSalary * 0.05;
    nssfdeduction.innerHTML = `NSSF deduction is :${nssf}`; 
  
    
    let netsalary = basicSalary - (nssf + deduction + ptax); 
  
    netsal.innerHTML = `Net salary is :${netsalary} `;
  }