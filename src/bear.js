var bear = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bear').prepend("<a href='https://D474media.webs.com'><img src='img/bear.gif'/></a>");;
};

bear.prototype = Object.create(Dancer.prototype);
bear.prototype.constructor = bear;

bear.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
