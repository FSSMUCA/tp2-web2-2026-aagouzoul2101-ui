let count = 0;

let a1 = 0;
let b1 = "";
console.log(`${a1} == ${b1}         -> ${a1 == b1}    |   ${a1} === ${b1}         -> ${a1 === b1}`);
if (a1 == b1 && !(a1 === b1)) count++;


let a2 = 0;
let b2 = "0";
console.log(`${a2} == ${b2}        -> ${a2 == b2}    |   ${a2} === ${b2}        -> ${a2 === b2}`);
if (a2 == b2 && !(a2 === b2)) count++;


let a3 = 0;
let b3 = false;
console.log(`${a3} == ${b3}      -> ${a3 == b3}    |   ${a3} === ${b3}      -> ${a3 === b3}`);
if (a3 == b3 && !(a3 === b3)) count++;


let a4 = "";
let b4 = false;
console.log(`${a4} == ${b4}     -> ${a4 == b4}    |   ${a4} === ${b4}     -> ${a4 === b4}`);
if (a4 == b4 && !(a4 === b4)) count++;


let a5 = null;
let b5 = undefined;
console.log(`${a5} == ${b5} -> ${a5 == b5}    |   ${a5} === ${b5} -> ${a5 === b5}`);
if (a5 == b5 && !(a5 === b5)) count++;


let a6 = null;
let b6 = false;
console.log(`${a6} == ${b6}   -> ${a6 == b6}    |   ${a6} === ${b6}   -> ${a6 === b6}`);
if (a6 == b6 && !(a6 === b6)) count++;


let a7 = NaN;
let b7 = NaN;
console.log(`${a7} == ${b7}      -> ${a7 == b7}    |   ${a7} === ${b7}      -> ${a7 === b7}`);
if (a7 == b7 && !(a7 === b7)) count++;


let a8 = 1;
let b8 = "1";
console.log(`${a8} == ${b8}        -> ${a8 == b8}    |   ${a8} === ${b8}        -> ${a8 === b8}`);
if (a8 == b8 && !(a8 === b8)) count++;

let a9 = " \t\n ";
let b9 = 0;
console.log(`${a9} == ${b9}   -> ${a9 == b9}    |   ${a9} === ${b9}   -> ${a9 === b9}`);
if (a9 == b9 && !(a9 === b9)) count++;

console.log("---");
console.log(`${count} paire(s) où == et === donnent des résultats différents`);