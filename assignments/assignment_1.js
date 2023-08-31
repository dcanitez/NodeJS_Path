const args = process.argv.slice(2);

const calculateCircleArea = (radius) => {
  if (radius) {
    console.log(`Radius: ${radius * 1}`);
    console.log(`Circle Area: ${radius * 1 * 2 * Math.PI}`);
  } else {
    console.error(
      "Error 🚩: Please specify a radius to calculate the circle area near the folder name e.g. node assignment_1.js 5."
    );
  }
};

calculateCircleArea(args[0]);
