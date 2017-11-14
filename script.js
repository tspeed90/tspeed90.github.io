let images = [
  {"url": "images/bay-bridge-preview.jpg",
  "text": "San Francisco's beautifully lit Bay Bridge at night. San Francisco, California.",
  "altText": ""},
  {"url": "images/building-in-bath-preview.jpg",
  "text": "Plant-covered building in autumn. Bath, England",
  "altText": ""},
  {"url": "images/chinese-pavilion-preview.jpg",
  "text": "The Chinese Pavilion on Stow Lake in Golden Gate Park. San Francisco, California.",
  "altText": ""},
  {"url": "images/colosseum-lens-flare-preview.jpg",
  "text": "The inside of The Colosseum. Rome, Italy.",
  "altText": ""},
  {"url": "images/dean-village-preview.jpg",
  "text": "Peaceful Dean Village and Water of Leith in late-Spring. Edinburgh, Scotland.",
  "altText": ""},
  {"url": "images/edinburgh-castle-preview.jpg",
  "text": "The side of a cliff at Edinburgh Castle on a gloomy day. Edinburgh, Scotland.",
  "altText": ""},
  {"url": "images/natural-history-ice-rink-preview.jpg",
  "text": "Christmas time at The Natural History Museum. London, England.",
  "altText": ""},
  {"url": "images/opera-house-preview.jpg",
  "text": "Sunset at the Sydney Opera House in Summer. Sydney, Australia.",
  "altText": ""},
  {"url": "images/rower-canterbury-preview.jpg",
  "text": "A rower and tourists on The Great Stour. Canterbury, Kent.",
  "altText": ""},
  {"url": "images/row-of-flats-preview.jpg",
  "text": "A row of flats in Highbury. London, England.",
  "altText": ""},
  {"url": "images/sainte-chappelle-preview.jpg",
  "text": "Stained glass of Sainte-Chappelle. Paris, France.",
  "altText": ""},
  {"url": "images/sata-blur-preview.jpg",
  "text": "My dog, Sata enjoying play time in the garden.",
  "altText": ""},
  {"url": "images/st-pancras-hotel-preview.jpg",
  "text": "Entrance to St Pancras Hotel. London, England.",
  "altText": ""},
  {"url": "images/st-pauls-section-preview.jpg",
  "text": "A section of St Pauls Cathedral seen through an alleyway of shops. London, England.",
  "altText": ""},
  {"url": "images/twin-peaks-view-preview.jpg",
  "text": "A view of Market Street seen from Twin Peaks. San Francisco, California, USA.",
  "altText": ""},
  {"url": "images/zeke-train-preview.jpg",
  "text": "My nephew playing in an old train at a park.",
  "altText": ""}
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
let clickedImage;

for (let i = 0; i < randomImages.length; i++) {
  randomImages[i].parentNode.addEventListener('click', function showFullSizeImage(e) {
    for (let i = 0; i < imagesUnspliced.length; i++) {
      if (imagesUnspliced[i].text === e.target.innerText) {
        clickedImage = imagesUnspliced[i];
        fullSizeImageDiv.style.display = "flex";

        imageToDisplay.src = imagesUnspliced[i].url;
      }
    }
  });
}

fullSizeImageDiv.addEventListener('click', function() {
  fullSizeImageDiv.style.display = "none";
});
