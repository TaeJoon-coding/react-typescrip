"use strict";
let tuple = ["a", true];
// tuple = [true, "a"]; // Error
// tuple[2] = "two"; // Error: no element
// tuple = ["b", false]; // OK: stringとbooleanの順序が正しい
console.log(tuple[0]); // OK: "b" (または元の"a")
console.log(tuple[1]); // OK: false (または元のtrue)
