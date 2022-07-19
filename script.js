let imageList = document.getElementById("image-list");
let dimensions = [
  [200, 400],
  [400, 600],
  [300, 400],
  [300, 500],
];

function generateImage() {
  let seed = Math.floor(Math.random() * 4);
  let width = dimensions[seed][0];
  let height = dimensions[seed][1];
  console.log(`https://picsum.photos/${width}/${height}`);

  let imageItem = document.createElement("li");

  let img = document.createElement("img");
  img.setAttribute("src", `https://picsum.photos/${width}/${height}`);

  imageItem.appendChild(img);
  imageList.appendChild(imageItem);
}

for (let i = 0; i < 20; i++) {
  generateImage();
}
