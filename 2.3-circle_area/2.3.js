(function () {
  function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  let area = circleArea(5);
  console.log("Area is:" + area);
  console.log("Area rounded is:" + area.toFixed(2));
})()