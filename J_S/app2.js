// const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// i = 0;
// while (i < 6) {
// const hasard = Math.floor(Math.random() * (hex.length + 1));
// const tabHex = [];
// tabHex.push(hex[hasard]);
// i++;
// }

// console.log(hex);

const section = document.querySelector("section");

const test = document.createElement("div");
test.innerHTML = `<div class="card text-grey bg-dark mb-3 mx-auto w-50 h-content" style="max-width: 20rem;">
<div class="card-header " style="color:gold">This color is</div>
<div class="card-body">
<h4 class="card-title">Ma Couleur Café !</h4>
</div>`;
section.append(test);
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const hasard = Math.floor(Math.random() * 0xffffff).toString(16);
  const hexCode = "#" + hasard;
  document.body.style.backgroundColor = hexCode;

  test.innerHTML = `<div class="card text-grey bg-dark mb-3 mx-auto w-50 h-content" style="max-width: 20rem;">
  <div class="card-header " style="color:gold">This color is</div>
  <div class="card-body">
    <h4 class="card-title">${hexCode}</h4>
  </div>`;
});

const btn1 = document.getElementById("btn1");
// console.log(btn1);

btn1.addEventListener("click", () => {
  location.reload();
});
