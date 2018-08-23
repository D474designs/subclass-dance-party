var cat = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
this.$node.addClass('cat').prepend("<a href='https://D474designs.github.io'><img src='img/cat.gif' height=200px width=200px/></a>");
};

cat.prototype = Object.create(Dancer.prototype);
cat.prototype.constructor = cat;

cat.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
