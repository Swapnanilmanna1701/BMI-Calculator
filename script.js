
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const  results = document.querySelector('.result');
    
    

    if (height === '' || height === 0 || height<10 || height > 250 || isNaN(height) ){
        results.innerHTML = "Please provide a valid height" ;

    }else if (weight === 0 || weight <0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight" ;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span> Your BMI is : ${bmi} </span>`;

    }
});







































































/*





//const height = document.querySelector('.height');
//const weight = document.querySelector('.weight');
const submit = document.querySelector('.subt');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('.height').value);
    const weight = parseInt(document.querySelector('.weight').value);
    validateHeight();
    validateWeight();

    }


);

function validateHeight (){
    if(height <= 50){
        alert('Height must be greater than 50');
    }else if(height === 0){
        alert('Height cannot be zero');
    }else if (height >= 200){
        alert('height should be lesser than 200');

    }

}

function validateWeight (){
    if(weight<= 0){
        alert('Weight cannot be negative or zero');
    }else {
        submit();

    }

}

function submit(){

}
*/