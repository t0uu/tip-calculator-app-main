const Bill = document.getElementById('Bill');
const form = document.getElementById('form');
const custom = document.getElementById('custom');
const people = document.getElementById('people');
const inputPeople = document.querySelector('.inputPeople')
const BtnCalculate = document.querySelectorAll('.calculate-btn')
const cant = document.querySelector('.Cant')
const BtnReset = document.getElementById('ResetBtn')
const AmountPerson = document.getElementById('AmountPerson');
const TotalAmount = document.getElementById('TotalAmount');
const btnReset = document.querySelector('.btn-reset')

let tip = 0;
people.value = 0
let tipBtn = 0;

const checkValues = () => {
    if(people.value <= 0){
        people.classList.add('error')
        cant.style.display = 'block'
        AmountPerson.textContent = `$00.00`;
        TotalAmount.textContent = '$00.00'
    }else{
        people.classList.remove('error')
        cant.style.display = 'none'
    }
    if(tip.value > 0){
        AmountPerson.textContent = `$00.00`;
        TotalAmount.textContent = '$00.00'
    }else{
        return;
    }
    if(tipBtn.value > 0){
        AmountPerson.textContent = `$00.00`;
        TotalAmount.textContent = '$00.00'
    }
}
// checkValues()
const Calculate = () => {
tip = Bill.value/100 * custom.value / people.value
total = (Bill.value + custom.value) / people.value
AmountPerson.textContent = `${tip.toFixed(2)}`
TotalAmount.textContent = `${total.toFixed(2)}`  
    checkValues();
    btnTip();
};


const btnTip = () => {
    BtnCalculate.forEach(element => {
        element.addEventListener('click', e => {
            if(element.dataset.percentage){
                tipBtn = Bill.value/100 * element.dataset.percentage / people.value
                totalBtn = (Bill.value + element.dataset.percentage) / people.value
                AmountPerson.textContent = `$${tipBtn.toFixed(2)}`
                TotalAmount.textContent = `$${totalBtn.toFixed(2)}`
            }   
        })
    
    });
} 
// btnTip()

// Calculate()
Bill.addEventListener('input',Calculate)
people.addEventListener('change', Calculate)
btnReset.addEventListener('click', e => {
    e.preventDefault()
    Bill.value = 0;
    tip = 0;
    AmountPerson.textContent = '$00.00'
    TotalAmount.textContent = '$00.00'
    people.value = 0
    custom.value = 'Custom';
})
