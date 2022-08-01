const colors = ["teal", "olive", "slateblue", "tan"];

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
  const hasard = Math.floor(Math.random() * (colors.length + 1));

  document.body.style.backgroundColor = colors[hasard];
  // console.log(colors[hasard]);

  test.innerHTML = `<div class="card text-grey bg-dark mb-3 mx-auto w-50 h-content" style="max-width: 20rem;">
  <div class="card-header " style="color:gold">This color is</div>
  <div class="card-body">
    <h4 class="card-title">${colors[hasard].toUpperCase()}</h4>
  </div>`;
});

const btn1 = document.getElementById("btn1");
console.log(btn1);
btn1.addEventListener("click", () => {
  location.reload();
});
