           const date = new Date();
         const rendercalender =() =>{ date.setDate(1)
         const monthdays = document.querySelector('days')
    
          const lastday = new date (date.getFullYear(),
          date.getMonth() +  1,0 ).getdate();
    
           const prevlastday  = new date (date.getFullYear
          (),date.getMonth() ,0).getdate();
    
          const firstdayindex = date.getDay();
           const lastdayindex = new date(date.getFullYear(),
             date.getMonth()+1,0). getDay();
    
    
         const nextdays = 7- lastdayindex- 1;
    
         const months = [
         "january",
         "february", 
         "march" ,
         "april",
         "may",
         "june",
         "july",
         "august",
         "september",
         "october",
         "november",
         "december",


          ]; 
           document.querySelector('.date h1').innerHTML
         = months[date.getMonth()];
         document.querySelector('.date p').innerHTML
          = date.toDateString();
    
    let days = "";

 for (let x =firstdayindex; x> 0;x--) {
 days += `<div classs ="prev- date ">$
 {prevlastday - x + 1}</div`; 
  }
 for(let i = 1;i <= lastday;i++){
    if(i=== new date().getdate() && date.getMonth() === new date()
     .getMonth())
  {days += `<div class="today">${i}</div>`;
 } else{
  days +=`<div>${i}</div>`;
 }
 }
 for (let j =1;j<= nextdays; j++){
    days += `< div class="next-date">${j}</ div>`
    monthdays.innerHTML = days;
 }
    } 

 date.setDate(1);

 const monthdays = document.querySelector("days")

 const lastday = new date (date.getFullYear(),
 date.getMonth() +  1,0 ).getdate();

 const prevlastday  = new date (date.getFullYear
    (),date.getMonth() ,0).getdate();


const firstdayindex = date.getDay();
const lastdayindex = new date(date.getFullYear(),
date.getMonth()+ 1,0).getDay();

const nextdays = 7- lastdayindex- 1;

const months = [
    "January",
    "February",
    "March",
    "JApril",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "november",
    "December",
];

 document.querySelector(".date h1").innerHTML = months[date.getMonth()];
 document.querySelector(".date p").innerHTML = new date().toDateString();
 
let days = "";

for (let x =firstdayindex; x> 0;x--) {
days += `<div classs ="prev- date ">$
{prevlastday - x + 1}</div`; 
 }
for(let i = 1;i <= lastday;i++){
    if(i=== new date().getdate() && date.getMonth() === new date()
     .getMonth())
{days += `<div class="today">${i}</div>`;
} else{
days +=`<div>${i}</div>`;
}
}
for (let j =1;j<= nextdays; j++){
    days += `< div class="next-date">${j}</ div>`
    monthdays.innerHTML = days;
}

document.querySelector(`.prev`). 
addEventListener(`click`, () =>{
date.setMonth(date.getMonth() -1); 
rendercalender();    
});
document.querySelector(`.next`). 
addEventListener(`click`, () =>{
    date.setMonth(date.getMonth() +1);
    rendercalender();
});

rendercalender();
 