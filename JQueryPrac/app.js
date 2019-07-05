//The browser also emits an event when the DOM is loaded. 
//You can then write code that is only executed when that event fires, 
//With jQuery, you do it like so:
//meaning you know your code will only be executed when the DOM is all set and ready to rock. 

//The reason is because whatever that is being passed into the paramter of the $ below,
//it is called the document variable, which contains all the HTML elements on the page.
//For example, if I pass in #("div"), it's going to grab all the div elements.
//The document object fires a ready event, which tells this js file that
//the DOM is ready.
//$(function() {});

//However, it drives me crazy beucause it's not that verbose, so ...
$(document).ready(function() {})
//The above is the verbose version of whatever that is on line 10.
$(document).ready(
    function() {
        var box = $("#box");
        box.fadeOut("slow");
        //The below line will grab all the p elements, grab the first one that's
        //returned, and return the text that's inside.
        var someString = $("p").eq(0).text();
        alert(someString);
        //Very self explanatory thing going on below.
        $("h2").css("width", "50px");
        //Another self-explanatory thing going on.
        $("p").eq(2).remove();
    }
);

//jQuery provides this thing called CSS selector, where the below line 
//invokes the CSS for a class called main inside the div.
//$("div.main");

//Essentially, jQuery just enables you to use DOM api in a much more readable manner.

