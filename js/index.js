$("a").click(function(e) {
  
  //Sets the non clicked elements to default
  $(".collapse").collapse("hide");
  $("a").removeClass("collapsedText");
  $("img").removeClass("collapsedArrow");

  $(this).toggleClass("collapsedText");

  //Removes boldnes of clicked <a>
  if ($(this).hasClass("collapsed") == true) {
    $(this).removeClass("collapsedText");
  }

  //Toggle arrow depending if the element is collapsed
  if ($(this).hasClass("collapsed") == true) {
    $(this).toggleClass("collapsedArrow");
  } else {
    $(this).children().toggleClass("collapsedArrow");
  }

});
