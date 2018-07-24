var cockatoo = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

 this.$node.addClass('cockatoo').prepend("<img src='img/cockatoo.gif'/>");
};

cockatoo.prototype = Object.create(Dancer.prototype);
cockatoo.prototype.constructor = cockatoo;

cockatoo.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
