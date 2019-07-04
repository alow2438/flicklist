

var model = {
  watchlistItems: [],
  browseItems: []
}


var api = {
  root: "https://api.themoviedb.org/3",
  token: "eac5927be35555faef32a5577e32e717" // TODO 0 put your api key here
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
			model.browseItems = response.results;
			// invoke the callback function that was passed in. 
			callback(response);
		}
	});
  
}
/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {
  // TODO 7
  // clear everything from both lists
  var watchlistElement = $("#section-watchlist ul");
  var browseElement = $("#section-browse ul");

  watchlistElement.empty();
  browseElement.empty();

  // TODO 6
  // for each movie on the user's watchlist, insert a list item into the <ul> in the watchlist section
  model.watchlistItems.forEach(function(movie) {
	var title = $("<p></p>").text(movie.original_title);
	var itemView = $("<li></li>")
		.append(title);
  });

  // for each movie on the current browse list, 
  model.watchlistItems.forEach(function(movie) {
		// TODO 3
		// insert a list item into the <ul> in the browse section
		var title = $("<h4></h4>").text(movie.original_title);
		// TODO 4
		// the list item should include a button that says "Add to Watchlist"
		var button = $("<button></button>")
			.text("Add to Watchlist")
			.attr("class", "btn")
		// TODO 5
		// when the button is clicked, this movie should be added to the model's watchlist and render() should be called again
			.click(function() {
				model.watchlistItems.push(movie);
				render();
				console.log("Your selection has been added to your Watchlist");
			});

  });
  
};
// When the HTML document is ready, we call the discoverMovies function,
// and pass the render function as its callback
$(document).ready(function() {
  discoverMovies(render);
});

