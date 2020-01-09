let searchBox = $(".searchbox").val();


$("#search-icon").on("click", function() {
    searchBox = $(".searchbox").val();
    
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchBox + "&appid=77f99df18f219e2929d785405614a919",
        method: "GET"
    })
    .then(function(response) {

    const cityplace = response.name
    const cityname = $("#city-name")
    cityname.text(cityplace)
    console.log(cityplace)
    let temp = response.main.temp
    const temperature = $("#temperature")
    temperature.text(temp)
    console.log(temp)
    let humidity = response.main.humidity
    const humidity1 = $("#humidity")
    humidity1.text(humidity)
    console.log(humidity)
    let wspeed = response.wind.speed
    const windspeed = $("#wind-speed")
    windspeed.text(wspeed)
    console.log(wspeed)
    const lat = response.coord.lat
    console.log(lat)
    const long = response.coord.lon
    console.log(long)

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=77f99df18f219e2929d785405614a919",
        method: "GET"
    }).then(function (response) {
        // $("#uv-index").text(response.value)
        console.log("uv index:", response.value);
    })
    })

    
})