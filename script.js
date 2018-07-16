var css = document.querySelector("#output");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListener("input", () =>{
	console.log(color1.value);
	setBodyBackgroundValue();
});

color2.addEventListener("input", () =>{
	console.log(color2.value);
	setBodyBackgroundValue();
});

const setBodyBackgroundValue = () => {
	console.log(body);
	body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
}