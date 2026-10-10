// Show an alert with an external script

// alert("I'm JavaScript!");

// Variables

// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

// Data Types

// let name = "Ilya";

// alert(`hello ${1}`); // hello 1
// alert(`hello ${"name"}`); //hello name
// alert(`hello ${name}`); //hello Ilya

// Interaction

// let name = prompt("Enter your name", "Eg: Karthiga");
// alert(`The entered name is ${name}`);

// basic operators

// postfix and prefix forms

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1

// alert(a);
// alert(b);
// alert(c);
// alert(d);

// assignment result

// let a = 2;

// let x = 1 + (a *= 2);

// alert(a);
// alert(x);

// type conversions

// "" + 1 + 0; // 10
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3"; // 2
// "2" * "3"; // 6
// 4 + 5 + "px"; // 9px
// "$" + 4 + 5; // $45
// "4" - 2; // 2
// "4px" - 2; // Nan
// "  -9  " + 5; // -9 5
// "  -9  " - 5; // -14
// null + 1; // 1
// undefined + 1; // Nan
// " \t \n" - 2; // -2

// comparisons

// 5 > 4; // true
// "apple" > "pineapple"; // false
// "2" > "12"; // false
// undefined == null; // true
// undefined === null; // false
// null == "\n0\n"; // false
// null === +"\n0\n"; // false

// conditional branching

// if (a string with zero)

// if ("0") {
//   alert("Hello");
// }

// the name of js

// let name = prompt("What is the official name of js?", "");

// if (name == "ECMAScript") {
//   alert("Right");
// } else {
//   alert("You don't know? “ECMAScript”!");
// }

// show the sign

// let num = prompt("Enter a number", "");
// num > 0 ? alert(1) : num < 0 ? alert(-1) : alert(0);

// rewrite if into ?

// let result = a + b < 4 ? "Below" : "Over";

// rewrite 'if..else' into '?'

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";
