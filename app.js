// ararry of objects

const portfilo = [
  { photo: "image/1.jpg", name: "building" },
  { photo: "image/2.jpg", name: "building" },
  { photo: "image/3.jpg", name: "building" },
  { photo: "image/f1.jpg", name: "furniture" },
  { photo: "image/f2.jpg", name: "furniture" },
  { photo: "image/f3.jpg", name: "furniture" },
  { photo: "image/ferari.jpeg", name: "cars" },
  { photo: "image/ford.jpeg", name: "cars" },
  { photo: "image/lambo.webp", name: "cars" },
];

const myPortFilo = portfilo.map((v) => {
  return `<div class="img-cont">
   <img src="${v.photo}" class="all-img" >
 </div>`;
});
document.querySelector(".display").innerHTML = `${myPortFilo.join("")}`;
let btn = [...document.querySelectorAll(".btn")];

btn.forEach((v) => {
  v.addEventListener("click", () => {
    v.value = v.value.toLowerCase();
    if (v.value == "show all") {
      document.querySelector(".display").innerHTML = `${myPortFilo.join("")}`;
    } else {
      if (v.value == "cars" || "Furniture" || "building") {
        const allPortfilo = portfilo.filter((p) => {
          return p.name == v.value;
        });
        const showAll = allPortfilo.map((v) => {
          return `<div class="img-cont">
      <img src="${v.photo}" class="all-img" >
    </div>`;
        });
        document.querySelector(".display").innerHTML = `${showAll.join("")}`;
      }
    }
  });
});
