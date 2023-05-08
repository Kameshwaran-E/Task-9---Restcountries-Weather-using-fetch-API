var API = "https://restcountries.com/v3.1/all";


var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createcountry(spreadOperator);
      
      
     
        // console.log(value)
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container ">
    <div class="card "  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class=" card card-header card-body " >
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



function block(lat,lng,name){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())
