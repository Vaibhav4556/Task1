let url =
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";

async function res() {
  let result = await fetch(url);
  let countryData = await result.json();

  console.log(countryData);

  // ASIAN COUNTRIES

//   const asia = countryData.filter((element) => {
//     if (element.region === "Asia") {
//       console.log(element.name);
//     }
//   });

  // POPULATION > 2 lakhs

//   const population = countryData.filter((element) => {
//     if (element.population < 200000) {
//       console.log(element.name);
//     }
//   });

// country info 
  
//   const countryInfo = countryData.forEach(element => {
//     console.log(element.name ,element.capital, element.flag)
    
//   });

// TOTAL POPULATION OF COUNTRIES 

// const total=countryData.reduce((acc,element)=>{
//     return acc+element.population;
    
// },0)
// console.log(total);


// country which uses US Dollars as currency.

for(i=0;i<countryData.length;i++){
    if(countryData[i].currencies[0].code==="USD")
    {
        console.log("name:",countryData[i].name,"==>",countryData[i].currencies[0].code)
    }
}

   



}

res();
