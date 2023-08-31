const args = process.argv.slice(2);

const calculateCircleArea = (radius) => {
  if (radius) {
    console.log(
      `${isNaN(radius) ? "Radius should be a number" : `Radius: ${radius * 1}`}`
    );

    console.log(
      `${
        isNaN(radius)
          ? "Circle area could not be calculated."
          : `Circle Area: ${Math.pow(parseInt(radius), 2) * Math.PI}`
      }`
    );
  } else {
    console.error(
      "Error 🚩: Please specify a radius to calculate the circle area near the folder name e.g. node assignment_1.js 5."
    );
  }
};

calculateCircleArea(args[0]);
