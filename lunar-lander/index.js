/* UPDATE LATER */

/*
  INSTRUCTION:
  -- Track distance from surface - start at 10
  -- Variable for x-axis and y-axis 'tilt', start as random
  values between -10 and 10
*/

/*
  STEPS:
  -- assign an object to a variable with 3 key value pairs
  x, y, and h
  -- define a function to generate a number between -10 and 10
  -- assign the function call to x and y and assign integer 10 to h
  which will be our starting location

  NOTE:
  -- This object is our lunar lander
  -- The key value pairs are used to track the lunar landers
  location
  -- Math.random() generates a number between 0 and 1 (ex: 0.559349800)
  -- Math.floor() will bring 1.1 to 1, 2.7 to 2, 10.25 to 10 ..etc..
  -- Every time the page loads, lunar landers x and y properties will be different
  and the number will always be -10 to 10

  DOCUMENTATION:
  -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const lunarLander = {
  x: getRandomInt(-10, 10),
  y: getRandomInt(-10, 10),
  h: 10
};

/*
  INSTRUCTION:
  -- x-axis movement, add or subtract the x property value of the lunarLander
  object by 1
  -- y-axis movement, add or subtract the y property value of the lunarLander
  object by 1
  -- h movement, add 2 to the h value

  STEPS:
  -- define 3 functions with 1 parameter, the value of the x, y, h properties
  of the lunarLander object
  -- for x and y updates, the argument passed is going to be a string directing
  our lunar lander
  -- for h updates, we will have 0 parameters. whenever the function is called,
  the lunar lander will add 2 to the h property value of the lunarLander object
*/

// eslint-disable-next-line
function updateX(string) {
  if (string === 'forward') {
    lunarLander.x += 1;
    return lunarLander;
  } else if (string === 'backward') {
    lunarLander.x -= 1;
    return lunarLander;
  } else {
    return { error: `${string} is an invalid arugment. please pass 'forward' or 'backward'` };
  }
}

// eslint-disable-next-line
function updateY(string) {
  if (string === 'right') {
    lunarLander.y += 1;
    return lunarLander;
  } else if (string === 'left') {
    lunarLander.y -= 1;
    return lunarLander;
  } else {
    return { error: `${string} is an invalid argument. please pass 'right' or 'left'` };
  }
}

// eslint-disable-next-line
function updateH() {
  lunarLander.h += 2;
  return lunarLander;
}
