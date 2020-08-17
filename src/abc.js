let carColor = 'blue';

const car = function () {
  return {
    changeColorToRed: function () {
      carColor = 'Red';
      return carColor;
    },
    changeColorToBlack: function () {
      carColor = 'black';
      return carColor;
    },
  };
};

console.log(car.changeColorToRed);
// 0ef6d72d174f66164b4b3d6e9ebce687
