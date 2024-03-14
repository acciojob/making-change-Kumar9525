const makeChange = (c) => {
  let quarters = Math.floor(c / 25);
  c %= 25;
  let dimes = Math.floor(c / 10);
  c %= 10;
  let nickels = Math.floor(c / 5);
  let pennies = c % 5;
  
  return {
    "q": quarters,
    "d": dimes,
    "n": nickels,
    "p": pennies
  };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
