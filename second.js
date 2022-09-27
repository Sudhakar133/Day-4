//Use the rest countries' API URL https://restcountries.eu/rest/v2/all and display all the countries flags in the console


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    
    for (let index = 0; index < res.length; index++) {
        const element = res[index];
        console.log(element.name,element.flag);

    }
//Use the same countries and print all countries names,regions, sub-regions and populations
for (let index = 0; index < res.length; index++) {
    const element = res[index];
console.log(element.name,element.region,element.subregion,element.population);
}
}