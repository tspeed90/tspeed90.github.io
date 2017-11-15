let images = [
  {"url": "images/bay-bridge-preview.jpg",
  "text": "San Francisco's beautifully lit Bay Bridge at night. San Francisco, California.",
  "altText": "A dark grey bridge at night strung with bright white lights and city lights are seen on the opposite side of the bay."},
  {"url": "images/building-in-bath-preview.jpg",
  "text": "Plant-covered building in autumn. Bath, England",
  "altText": "A beige-colored building covered with a mostly bare ivy plant. A few bright-red, autumn leaves are scattered in bunches."},
  {"url": "images/chinese-pavilion-preview.jpg",
  "text": "The Chinese Pavilion on Stow Lake in Golden Gate Park. San Francisco, California.",
  "altText": "A Chinese-style gazebo with a blue roof and red pillars is surrounded by large bright-green plants and the edge of a lake."},
  {"url": "images/colosseum-lens-flare-preview.jpg",
  "text": "The inside of The Colosseum. Rome, Italy.",
  "altText": "The ruins of the Colosseum from the inside. The sun shines brightly and lens flares are seen on both sides of the image."},
  {"url": "images/dean-village-preview.jpg",
  "text": "Peaceful Dean Village and Water of Leith in late-Spring. Edinburgh, Scotland.",
  "altText": "A village with yellow, white and brown medieval-style homes are shown along a small, rocky river with green trees and foliage."},
  {"url": "images/edinburgh-castle-preview.jpg",
  "text": "The side of a cliff at Edinburgh Castle on a gloomy day. Edinburgh, Scotland.",
  "altText": "A portion of a castle's brick walls is seen from the road below. An old lamp post stands near the road on the bottom-left."},
  {"url": "images/natural-history-ice-rink-preview.jpg",
  "text": "Christmas time at The Natural History Museum. London, England.",
  "altText": "Large, beautiful stone-facade of a museum with a Christmas-decorated ice-rink and ice-skaters skating."},
  {"url": "images/opera-house-preview.jpg",
  "text": "Sunset at the Sydney Opera House in Summer. Sydney, Australia.",
  "altText": "The Sydney Opera House is seen surrounded by water with a white ferry boat in front of it."},
  {"url": "images/rower-canterbury-preview.jpg",
  "text": "A rower and tourists on The Great Stour. Canterbury, Kent.",
  "altText": "A canal on a sunny day. A man rows a blue boat. Brick buildings and foliage are seen on both sides of the canal."},
  {"url": "images/row-of-flats-preview.jpg",
  "text": "A row of flats in Highbury. London, England.",
  "altText": "A row of red brick flat buildings with a purple building in the center. From left to right, the buildings get further away."},
  {"url": "images/sainte-chappelle-preview.jpg",
  "text": "Stained glass of Sainte-Chappelle. Paris, France.",
  "altText": "6 panels of blue, purple and red stained glass are shown inside of a chapel with a gold, lit alter on the bottom right."},
  {"url": "images/sata-blur-preview.jpg",
  "text": "My dog, Sata enjoying play time in the garden.",
  "altText": "A short-haired black and grey dog with pointy ears and a tilted head, lays in the grass with a bright-orange ball."},
  {"url": "images/st-pancras-hotel-preview.jpg",
  "text": "Entrance to St Pancras Hotel. London, England.",
  "altText": "A tall, brick building with many arched windows and 2 tall spires at the top. Above the doors are the words 'Saint Pancras'"},
  {"url": "images/st-pauls-section-preview.jpg",
  "text": "A section of St Pauls Cathedral seen through an alleyway of shops. London, England.",
  "altText": "A section of a large, white, domed Cathedral is shown between a red builiding on the left and a white building on the right."},
  {"url": "images/twin-peaks-view-preview.jpg",
  "text": "A view of Market Street seen from Twin Peaks. San Francisco, California, USA.",
  "altText": "A hilltop view of streets and buildings in San Francisco. A mountain range is visible on the horizon, behind the skyline."},
  {"url": "images/zeke-train-preview.jpg",
  "text": "My nephew playing in an old train at a park.",
  "altText": "A young boy in black clothing and red bow tie smiles in the doorway of a retired yellow train. The train reads 'Huntington'."}
];

const imagesUnspliced = images.slice();

let randomImages = document.querySelectorAll(".random-photo");
let textElement = document.querySelectorAll(".text");
let imageToDisplay = document.querySelector(".largePhoto");
let fullSizeImageDiv = document.querySelector(".fullSizeImage");

for (let i = 0; i < randomImages.length; i++) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let image = images[randomIndex];
  randomImages[i].style.backgroundImage = "url(" + image.url + ")";
  textElement[i].innerText = image.text;
  images.splice(randomIndex, 1);
}

//

for (let i = 0; i < randomImages.length; i++) {
  randomImages[i].parentNode.addEventListener('click', function showFullSizeImage(e) {
    for (let i = 0; i < imagesUnspliced.length; i++) {
      if (imagesUnspliced[i].text === e.target.innerText) {
        fullSizeImageDiv.style.display = "flex";
        let fullSizeImagePath = imagesUnspliced[i].url.replace(/-preview/, "");
        imageToDisplay.src = fullSizeImagePath;
        console.log(fullSizeImagePath);
      }
    }
  });
}
function exitFullSize() {
  fullSizeImageDiv.style.display = "none";
  // reset img src to prevent previous photo from displaying while current img downloads
  imageToDisplay.src = "";
}

fullSizeImageDiv.addEventListener('click', function() {
  exitFullSize();
});
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" || e.key === " " || e.keyCode === 27 || e.keyCode === 32) {
    exitFullSize();
    e.preventDefault();
  }
});
