//Problem: Mobile menu takes up a lot of space on mobile
//Solution: Hide text links with a drop down menu

// Create a select and append to menu
var $select = $("<select></select>");
$(".main-nav").append($select);

// Cycle over menu links
$(".main-nav a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");
	// Create an option 
	//Option's value is the href
	$option.val($anchor.attr("href"));
	//Option's text is the text of link
	$option.text($anchor.text());
	//Append option to select
	$select.append($option);
});
// Create button to click to go to select's location
var $button = $("<button>Go</button>");
$(".main-nav").append($button);
// Bind click to button 
$button.click(function(){

	// Go to select's location
	$select.val();
})
// Modify CSS to hide links on small widths and show button and select
	// Also hides select and button on larger widths and show's links

