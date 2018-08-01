var seal = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('seal').prepend("<a href='https://deinterwebs.000webhostapp.com'><img src='img/seal.gif'/></a>");
};

seal.prototype = Object.create(Dancer.prototype);
seal.prototype.constructor = seal;

seal.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
