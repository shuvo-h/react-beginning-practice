const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => generateData(data))
}
loadCountries();

const generateData = countries => {
    const countryHTMLArray = countries.map(country => getCountryHTML(country));
    const countryHTML = countryHTMLArray.join(" ")
    document.getElementById('countries').innerHTML = countryHTML;
    
}

const getCountryHTML = data => {
    // console.log(data.name);
    return `
        <div class="country">
            <img src="${data.flag}">
            <h2>${data.name}</h2>
            <h5>${data.capital}</h5>
        </div>
    `;
}

/*
let ul = `<li>Bou<li>`; 
ul +=  `<li>Jamai<li>`; 
console.log(ul);
*/

/*
Example#1:
Input Number: 575265
Input Position: 3
Output: 575200

Example#2:
Input Number: 4234123
Input Position: 6
Output: 4200000
*/
const inputValue = '575265';
const position = 3;
let result ="";
let output;
let count = 1;   
for(i =inputValue.length; i>=0; i--){
    if (count < position) {
        result += '0' ;
        count++;
    }else{

        result = inputValue.charAt(i) + result;
    }
    output = parseInt(result);
}
console.log(result);
console.log(output);
console.log(typeof output);


/*
let count = 0;
for(i =inputValue.length; i>=0; i--){
    if (count < position) {
        result += '0';
        count++;
    }else{

        result += inputValue.charAt(i);
    }
   
}
*/