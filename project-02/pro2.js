const form= document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("Form submitted");
    const cgpa = parseFloat(document.querySelector('#cgpa').value);
    console.log('cgpa')
    const results=document.querySelector('#results')
    if (isNaN(cgpa) || cgpa <= 0 || cgpa > 10) {
            results.innerHTML = 'Please enter a valid CGPA between 0 and 10.';
        } 
    else {
            const percentage = (cgpa * 10)-7.5;
            results.innerHTML = `Percentage: <span>${percentage.toFixed(2)}</span>`;
        }
    
})