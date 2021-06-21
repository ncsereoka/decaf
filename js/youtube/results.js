/* 
 * Only affects the search results page 
 */

// Guide (top-left menu)
document.querySelector("#guide").remove();
document.querySelector("#guide-button").remove();

// Mini-Guide (left bar)
document.getElementsByTagName("ytd-mini-guide-renderer")[0].remove();

// Voice search
document.querySelector("#voice-search-button").remove();

// Masthead end (sign-in button and others)
document.querySelector("#end").remove();

// Enlarge search box
document.querySelector("#center").style.flex = "0 1 100%";


// Fix extra margin remaining after removing guide
document.querySelector("#page-manager").style["margin-left"] = "0px";

// Scale down preliminary search results
document.querySelectorAll("#dismissible")
	.forEach((result) => result.style["height"] = "100px");