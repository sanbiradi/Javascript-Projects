//catch the dom
const i_string = document.querySelector("#inputString");
const submit = document.querySelector("form");
const display = document.querySelector("#display");

//
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let vowels = {
    a: 0,
    e: 0,
    o: 0,
    i: 0,
    u: 0,
  };
  let tStr = i_string.value.split("");
  console.log(tStr)
  tStr.forEach((ch) => {
    if (ch === "a") vowels.a++;
    if (ch === "e") vowels.e++;
    if (ch === "i") vowels.i++;
    if (ch === "o") vowels.o++;
    if (ch === "u") vowels.u++;
  });
   display.innerHTML = `
   <li>a : ${vowels.a}</li>
   <li>i : ${vowels.i}</li>
   <li>e : ${vowels.e}</li>
   <li>o : ${vowels.o}</li>
   <li>u : ${vowels.u}</li>`;
});
