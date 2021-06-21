/* 
 * Only affects the watch page 
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


// No comments
document.querySelector("#comments").remove();

// No related videos
document.querySelector("#related").remove();

// No secondary (sidebar with suggestions)
document.querySelector("#secondary").remove();