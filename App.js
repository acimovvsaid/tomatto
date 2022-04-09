const input = document.querySelector('.textmessage');

const btn = document.querySelector('.btn');

const div = document.getElementById('Message2');

const input2 = document.querySelector('.textmessage2');

const btn2 = document.querySelector('.btn2');

const div2 = document.getElementById('Message');


btn.addEventListener('click',dobavimZametku);

let massiv = [];

function dobavimZametku(){
    let znachenia = input.value;
    input.value = "";
    massiv.push(znachenia);
    console.log(massiv);
    otpravitSms();
}



function otpravitSms(){
    let sobshenia = '';
    for(let todo of massiv){
        sobshenia = todo;
    }
    div.innerHTML +=`
    <p>Арген:${sobshenia}</p>
    `  
}


btn2.addEventListener('click',dobavimZametku2);

let massiv2 = [];

function dobavimZametku2(){
    let znachenia2 = input.value;
    input2.value = "";
    massiv2.push(znachenia2);
    console.log(massiv2);
    otpravitSms2();
}



function otpravitSms2(){
    let sobshenia2 = '';
    for(let todo of massiv2){
        sobshenia2 = todo;
    }
    div2.innerHTML +=`
    <p>Арген:${sobshenia2}</p>
    `  
}

