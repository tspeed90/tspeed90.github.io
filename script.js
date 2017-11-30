let images = [
  {"url": "images/bay-bridge-preview.jpg",
  "text": "San Francisco's beautifully lit Bay Bridge at night. San Francisco, California.",
  "altText": "A bridge at night strung with bright lights and city lights are seen in the distance."},
  {"url": "images/building-in-bath-preview.jpg",
  "text": "Plant-covered building in autumn. Bath, England",
  "altText": "A building covered with a mostly bare ivy plant. A few red autumn leaves are scattered in bunches."},
  {"url": "images/chinese-pavilion-preview.jpg",
  "text": "The Chinese Pavilion on Stow Lake in Golden Gate Park. San Francisco, California.",
  "altText": "A Chinese-style gazebo with a blue roof and red pillars is surrounded by large bright-green plants."},
  {"url": "images/colosseum-lens-flare-preview.jpg",
  "text": "The inside of The Colosseum. Rome, Italy.",
  "altText": "The ruins of the Colosseum from the inside. The sun shines brightly and lens flares are seen on both sides of the image."},
  {"url": "images/dean-village-preview.jpg",
  "text": "Peaceful Dean Village and Water of Leith in late-Spring. Edinburgh, Scotland.",
  "altText": "A village with medieval-style homes are shown along a small river."},
  {"url": "images/edinburgh-castle-preview.jpg",
  "text": "The side of a cliff at Edinburgh Castle on a gloomy day. Edinburgh, Scotland.",
  "altText": "A portion of a castle's brick walls is seen from the road below. An old lamp post stands near the road on the bottom-left."},
  {"url": "images/natural-history-ice-rink-preview.jpg",
  "text": "Christmas time at The Natural History Museum. London, England.",
  "altText": "Large beautiful stone-facade of a museum with a Christmas-decorated ice-rink and ice-skaters skating."},
  {"url": "images/opera-house-preview.jpg",
  "text": "Sunset at the Sydney Opera House in Summer. Sydney, Australia.",
  "altText": "The Sydney Opera House is seen surrounded by water with a white ferry boat in front of it."},
  {"url": "images/rower-canterbury-preview.jpg",
  "text": "A rower and tourists on The Great Stour. Canterbury, Kent.",
  "altText": "A canal with a man rowing a small blue boat. Brick buildings are seen on both sides of the canal."},
  {"url": "images/row-of-flats-preview.jpg",
  "text": "A row of flats in Highbury. London, England.",
  "altText": "A row of red brick flat buildings seen from an angle making the buildings on the right appear to get smaller."},
  {"url": "images/sainte-chappelle-preview.jpg",
  "text": "Stained glass of Sainte-Chappelle. Paris, France.",
  "altText": "Blue purple and red stained glass are seen inside a chapel with a gold lit alter on the bottom right."},
  {"url": "images/sata-blur-preview.jpg",
  "text": "My dog, Sata enjoying play time in the garden.",
  "altText": "A short-haired black and grey dog with pointy ears and a tilted head lays in the grass with a bright-orange ball."},
  {"url": "images/st-pancras-hotel-preview.jpg",
  "text": "Entrance to St Pancras Hotel. London, England.",
  "altText": "A tall brick building with many arched windows and 2 tall spires at the top. Above the doors are the words 'Saint Pancras'."},
  {"url": "images/st-pauls-section-preview.jpg",
  "text": "A section of St Paul's Cathedral seen through an alleyway of shops. London, England.",
  "altText": "A section of a large white domed Cathedral is shown between a red building on the left and a white building on the right."},
  {"url": "images/twin-peaks-view-preview.jpg",
  "text": "A view of Market Street seen from Twin Peaks. San Francisco, California, USA.",
  "altText": "A hilltop view of streets and buildings in San Francisco. A mountain range is visible on the horizon behind the skyline."},
  {"url": "images/zeke-train-preview.jpg",
  "text": "My nephew playing in an old train at a park.",
  "altText": "A young boy smiles in the doorway of a retired yellow train. The train reads 'Huntington'."}
];

const imagesUnspliced = images.slice();

let randomImages = document.querySelectorAll(".random-photo");
let textElement = document.querySelectorAll(".text");
let imageToDisplay = document.querySelector(".largePhoto");
let fullSizeImageDiv = document.querySelector(".fullSizeImage");
let profilePhoto =  document.querySelector(".about-me");
let navAbout = document.querySelector(".about-button");
let returnHomeTab = document.querySelector(".return-home");

for (let i = 0; i < randomImages.length; i++) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let image = images[randomIndex];
  randomImages[i].querySelector('img').src = image.url;
  randomImages[i].setAttribute("aria-label", image.altText);
  randomImages[i].querySelector('img').alt = image.text;
  textElement[i].innerText = image.text;
  images.splice(randomIndex, 1);
}

for (let i = 0; i < randomImages.length; i++) {
  randomImages[i].parentNode.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      for (let i = 0; i < imagesUnspliced.length; i++) {
        // 'clicking' on image through tabbing causes target to return info on wrapper, not text div
        if (imagesUnspliced[i].text === e.target.querySelector(".text").innerText) {
          fullSizeImageDiv.style.display = "flex";
          let fullSizeImagePath = imagesUnspliced[i].url.replace(/-preview/, "");
          imageToDisplay.src = fullSizeImagePath;
        }
      }
    }
  });
  randomImages[i].parentNode.addEventListener('click', function showFullSizeImage(e) {
    for (let i = 0; i < imagesUnspliced.length; i++) {
      if (imagesUnspliced[i].text === e.target.innerText) {
        fullSizeImageDiv.style.display = "flex";
        let fullSizeImagePath = imagesUnspliced[i].url.replace(/-preview/, "");
        imageToDisplay.src = fullSizeImagePath;
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
let totalHeight = document.body.scrollHeight;
let screenHeight = window.innerHeight;
window.addEventListener('scroll', function(e) {
  console.log(totalHeight);
  let scrolledDown = document.documentElement.scrollTop > document.body.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  if (scrolledDown + screenHeight >= totalHeight - 200) {
    returnHomeTab.style.display = "block";
  } else {
    returnHomeTab.style.display = "none";
  }
});
