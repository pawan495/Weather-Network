
// Event listener for search button
$(".btn").on("click", function (e){
    e.preventDefault();
    var city =$("#search-input").val();
}
)


// calling function to render the last searched city
renderLast();