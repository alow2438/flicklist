

var model = {
  watchlistItems: [],
  browseItems: []
}


var api = {
  root: "https://api.themoviedb.org/3",
  token: "eac5927be35555faef32a5577e32e717f" // TODO 0 put your api key here
}


/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, updates the model.browseItems appropriately, and then invokes
 * the callback function that was passed in
 */
function discoverMovies(callback) {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
			
			// TODO 2
			// update the model, setting its .browseItems property equal to the movies we recieved in the response\
			// var model = {
			// 	browseItems = response;
			// }
			model.browseItems = response.results;
			
			// invoke the callback function that was passed in. 
			callback();
		}
	});
  
}


/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {
  // TODO 7
  // clear everything from both lists
  document.getElementById("section-watchlist").innerHTML = "";
  document.getElementById("section-browse").innerHTML = "";

  
  // TODO 6
  // for each movie on the user's watchlist, insert a list item into the <ul> in the watchlist section
  
  // for each movie on the current browse list, 
  model.browseItems.forEach(function(movie) {
		// TODO 3
		// insert a list item into the <ul> in the browse section
		var listItem = document.createElement("li");
		document.getElementById("section-browse").appendChild("#section-browse ul");
		// TODO 4
		// the list item should include a button that says "Add to Watchlist"
		var button = document.createElement("<button></button>").text("Add to Watchlist");
		// .document.createElement("button").appendChild(listItem).innerHTML = "Add to Watchlist";
		// button.addEventListener
		// TODO 5
		// when the button is clicked, this movie should be added to the model's watchlist and render() should be called again
		button.click(function() {
			console.log("Your selection has been added to your Watchlist");
			document.getElementById("section-watchlist")
			return render

  });
  
})
// When the HTML document is ready, we call the discoverMovies function,
// and pass the render function as its callback
$(document).ready(function() {
  discoverMovies(render);
});

}