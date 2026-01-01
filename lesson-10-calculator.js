let calculation=localStorage.getItem('calculation') || '';
function updateCalculation(increment){
    calculation+=increment;
    display();
    localStorage.setItem('calculation',calculation);
}
display();
function display(){
    document.querySelector('.js-display').innerHTML=calculation;
}