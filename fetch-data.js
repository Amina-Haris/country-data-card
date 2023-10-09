fetch("https://restcountries.com/v2/all")
.then((data)=> data.json())
.then((arrays) =>countrydatas(arrays))

function countrydatas(datas){

    const forSelect = document.getElementById("country");

 datas.forEach(ele => {

    const newEle = document.createElement("option");
   
    newEle.text = ele.name;
    newEle.value = ele.name;
         
 forSelect.append(newEle)

});

}

function chngSelect()
{

  const countryValue = document.getElementById("country").value
console.log("selected country is ",countryValue);

fetch(`https://restcountries.com/v2/name/${countryValue}?fullText=true`)
.then((slctdCntryData)=> slctdCntryData.json())
.then((data0)    =>{

  console.log(data0); 
const flag = data0[0].flags.png;
// console.log(cntryflag);
const border = data0[0].borders;
const currency = data0[0].currencies[0].name;
const language = data0[0].languages[0].name; 
const population = data0[0].population;
const capital = data0[0].capital;
const region = data0[0].region;

let toDsply = `<div class="card" style="width: 20rem;">
<img src="${flag}" class="card-img-top">
<div class="card-body">
<h1> ${countryValue} </h1>
  <p> BORDERS : ${border} <br>
   CURRENCY : ${currency}  <br>
   LANGUAGE : ${language} <br>
   POPULATION : ${population} <br>
   CAPITAL : ${capital} <br>
   REGION : ${region}
  </p>
</div>
</div>`

document.getElementById("card").innerHTML = toDsply;

})
}