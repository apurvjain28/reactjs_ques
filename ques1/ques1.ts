// 1st Way
export function q1_1(number: number) {
  if (number % 22 === 0) {
    console.log("candybar");
  } else if (number % 11 === 0) {
    console.log("bar");
  } else if (number % 2 === 0) {
    console.log("candy");
  } else {
    console.log(number);
  }
}

// 2nd Way
export function q1_2(number: number) {
  let flag = false;
  let str: String;
  if (number % 2 === 0) {
    str += "candy";
    flag = true;
  }
  if (number % 11 === 0) {
    str += "bar";
    flag = true;
  }

  if (!flag) {
    console.log(number);
  } else {
    console.log(str);
  }
}
