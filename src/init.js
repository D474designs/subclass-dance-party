
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // maker function for dancers
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make dancer with random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  $('.lineUpButton').on('click', function(event) {
    $('.dancer').animate({left: '30%'});
  });
  $('.breakUpButton').on('click', function(event) {
    $('.dancer').animate({
      left: '25%',
      top: '25%'
    });
  });


  // var posx = (Math.random() * ($("body").width());
  // var posy = (Math.random() * ($("body").height());
  //
  // $('.breakUpButton').on('click', function(event) {
  //   $('.dancer').animate({
  //     left:"posx + 'px'",
  //     top:"posy + 'px'"
  //   });

  // $('.breakUpButton').on('click', function(event) {
  //   $('.dancer').animate({
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   });
  // });

});
