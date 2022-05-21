'use strict';

let selctedI=3;

// UI functioning************************************************************************************

// functioning of mobile nav btn
const moreBtnEl= document.querySelector('.more-icon');
const classToBeAddedEl=document.querySelector('.navbarTBA');

moreBtnEl.addEventListener('click',function() {
    classToBeAddedEl.classList.toggle('overlay-open');

})

// highlighting the selected person in the list on accounts page
let selectedPersonEl=document.querySelector('.selected-person');
const p1AccountEl=document.querySelector('.person-1');
const p2AccountEl=document.querySelector('.person-2');
const p3AccountEl=document.querySelector('.person-3');
const p4AccountEl=document.querySelector('.person-4');
const p5AccountEl=document.querySelector('.person-5');
const p6AccountEl=document.querySelector('.person-6');
const p7AccountEl=document.querySelector('.person-7');
const p8AccountEl=document.querySelector('.person-8');
const p9AccountEl=document.querySelector('.person-9');
const p10AccountEl=document.querySelector('.person-10');

const detailedName=document.querySelector('.detailed-name');
const detailedEmail=document.querySelector('.detailed-email');
const detailedAmount=document.querySelector('.detailed-amount');
const detailedImg=document.querySelector('.person-detail-img');
const detailedAccNo=document.querySelector('.detailed-accountNo');

p1AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p1AccountEl.classList.add('selected-person');
    selectedPersonEl=p1AccountEl;

    selectedI=0;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
    
})
p2AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p2AccountEl.classList.add('selected-person');
    selectedPersonEl=p2AccountEl;

    selctedI=1;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p3AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.toggle('selected-person');
    p3AccountEl.classList.add('selected-person');
    selectedPersonEl=p3AccountEl;

    selectedI=2;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p4AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p4AccountEl.classList.add('selected-person');
    selectedPersonEl=p4AccountEl;

    selctedI=3;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p5AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p5AccountEl.classList.add('selected-person');
    selectedPersonEl=p5AccountEl;

    selctedI=4;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p6AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p6AccountEl.classList.add('selected-person');
    selectedPersonEl=p6AccountEl;

    selctedI=5;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p7AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p7AccountEl.classList.add('selected-person');
    selectedPersonEl=p7AccountEl;

    selctedI=6;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p8AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p8AccountEl.classList.add('selected-person');
    selectedPersonEl=p8AccountEl;

    selctedI=7;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`; 
})
p9AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p9AccountEl.classList.add('selected-person');
    selectedPersonEl=p9AccountEl;

    selctedI=8;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;
})
p10AccountEl.addEventListener('click',function(){
    selectedPersonEl.classList.remove('selected-person');
    p10AccountEl.classList.add('selected-person')
    selectedPersonEl=p10AccountEl;
    
    selectedI=9;
    //Displaying the selected person on the detailed person info
    let detailedNameTBA=document.querySelector(".selected-person .name");
    let detailedAmountTBA=document.querySelector(".selected-person .amount");
    let detailedEmailTBA=document.querySelector(".selected-person .email");
    let detailedAcidTBA=document.querySelector(".selected-person .acid");
    detailedName.textContent=`Account Holder: ${detailedNameTBA.textContent}`;
    detailedAmount.textContent=`Balance: ${detailedAmountTBA.textContent}`;
    detailedEmail.textContent=`Email-Id: ${detailedEmailTBA.textContent}`;
    detailedAccNo.textContent=`Account No.: ${detailedAcidTBA.textContent}`;

    
})

