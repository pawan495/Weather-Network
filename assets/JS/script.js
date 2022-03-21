
// Event listener for search button
$(".btn").on("click", function (e){
    e.preventDefault();
    var city =$("#search-input").val();
    cityOnload = localStorage.setItem("cityStored", city);
    if(city ===""){
        return
    }else{
        getWeatherDetails(city, true);
    }
});

$("#saved-cities").on("click", function (e) {
    if (!e.target.matches(".btnCity")) return;

    var saveCity = e.target.id;
    getWeatherDetails(saveCity, false);
    console.log(saveCity);
});


// calling function to render the last searched city
renderLast();