const outputBtn = document.getElementById('output-btn');

outputBtn.addEventListener('click', ()=>{
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;

    let bmi = weight/ (height/100 * height/100);
    bmi = bmi.toFixed(2);
    console.log(bmi);

    document.getElementById('bmi-output').value = "your bmi is " + bmi;
});