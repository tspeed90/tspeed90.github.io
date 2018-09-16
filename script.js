let images = [
  {
    url: 'images/bay-bridge-preview.jpg',
    text:
      "San Francisco's beautifully lit Bay Bridge at night. San Francisco, California.",
    altText:
      'A bridge at night strung with bright lights and city lights are seen in the distance.'
  },
  {
    url: 'images/building-in-bath-preview.jpg',
    text: 'Plant-covered building in autumn. Bath, England',
    altText:
      'A building covered with a mostly bare ivy plant. A few red autumn leaves are scattered in bunches.'
  },
  {
    url: 'images/chinese-pavilion-preview.jpg',
    text:
      'The Chinese Pavilion on Stow Lake in Golden Gate Park. San Francisco, California.',
    altText:
      'A Chinese-style gazebo with a blue roof and red pillars is surrounded by large bright-green plants.'
  },
  {
    url: 'images/colosseum-lens-flare-preview.jpg',
    text: 'The inside of the Colosseum. Rome, Italy.',
    altText:
      'The ruins of the Colosseum from the inside. The sun shines brightly and lens flares are seen on both sides of the image.'
  },
  {
    url: 'images/dean-village-preview.jpg',
    text:
      'Peaceful Dean Village and Water of Leith in late-spring. Edinburgh, Scotland.',
    altText:
      'A village with medieval-style homes are shown along a small river.'
  },
  {
    url: 'images/edinburgh-castle-preview.jpg',
    text:
      'The side of a cliff at Edinburgh Castle on a gloomy day. Edinburgh, Scotland.',
    altText:
      "A portion of a castle's brick walls is seen from the road below. An old lamp post stands near the road on the bottom-left."
  },
  {
    url: 'images/natural-history-ice-rink-preview.jpg',
    text: 'Christmas time at The Natural History Museum. London, England.',
    altText:
      'Large beautiful stone-facade of a museum with a Christmas-decorated ice-rink and ice-skaters skating.'
  },
  {
    url: 'images/opera-house-preview.jpg',
    text: 'Sunset at the Sydney Opera House in summer. Sydney, Australia.',
    altText:
      'The Sydney Opera House is seen surrounded by water with a white ferry boat in front of it.'
  },
  {
    url: 'images/rower-canterbury-preview.jpg',
    text: 'A rower and tourists on The Great Stour. Canterbury, Kent.',
    altText:
      'A canal with a man rowing a small blue boat. Brick buildings are seen on both sides of the canal.'
  },
  {
    url: 'images/row-of-flats-preview.jpg',
    text: 'A row of flats in Highbury. London, England.',
    altText:
      'A row of red brick flat buildings seen from an angle making the buildings on the right appear to get smaller.'
  },
  {
    url: 'images/sainte-chappelle-preview.jpg',
    text: 'Stained glass of Sainte-Chappelle. Paris, France.',
    altText:
      'Blue purple and red stained glass are seen inside a chapel with a gold lit alter on the bottom right.'
  },
  {
    url: 'images/sata-blur-preview.jpg',
    text: 'My dog, Sata, enjoying play time in the garden.',
    altText:
      'A short-haired black and grey dog with pointy ears and a tilted head lays in the grass with a bright-orange ball.'
  },
  {
    url: 'images/st-pancras-hotel-preview.jpg',
    text: 'Entrance to St Pancras Hotel. London, England.',
    altText:
      "A tall brick building with many arched windows and 2 tall spires at the top. Above the doors are the words 'Saint Pancras'."
  },
  {
    url: 'images/st-pauls-section-preview.jpg',
    text:
      "A section of St Paul's Cathedral seen through an alleyway of shops. London, England.",
    altText:
      'A section of a large white domed Cathedral is shown between a red building on the left and a white building on the right.'
  },
  {
    url: 'images/twin-peaks-view-preview.jpg',
    text:
      'A view of Market Street seen from Twin Peaks. San Francisco, California, USA.',
    altText:
      'A hilltop view of streets and buildings in San Francisco. A mountain range is visible on the horizon behind the skyline.'
  },
  {
    url: 'images/zeke-train-preview.jpg',
    text: 'My nephew playing in an old train at a park.',
    altText:
      "A young boy smiles in the doorway of a retired yellow train. The train reads 'Huntington'."
  },
  {
    url: 'images/bastion-preview.jpg',
    text: "Fisherman's Bastion on a foggy winter evening. Budapest, Hungary.",
    altText:
      "The stone tower of the Fisherman's Bastion is seen through a lit archway."
  },
  {
    url: 'images/budapest-snow-preview.jpg',
    text: 'Snow-covered benches in a public park. Budapest, Hungary.',
    altText:
      'Three wooden and iron chairs are blanketed in snow. A group of tall, evergreen trees are seen in the background.'
  },
  {
    url: 'images/lisbon-van-preview.jpg',
    text:
      'Spring afternoon in front of the 25 de Abril Bridge. Lisbon, Portugal.',
    altText:
      'A purple Volkswagen van is parked in a parking lot. The famous 25th of April Bridge is seen in the distance over the Tagus River.'
  },
  {
    url: 'images/london-snow-preview.jpg',
    text: 'Snow-covered Mini Cooper in a London neighborhood. London, England.',
    altText:
      'A small, dark green Mini Cooper car is covered in snow and parked in front of a brown brick building.'
  },
  {
    url: 'images/pilatus-preview.jpg',
    text: 'View from the top of Mount Pilatus. Lucerne, Switzerland.',
    altText:
      'Snow-capped mountains are seen from the top of a larger mountain and a paraglider is seen flying over the mountains in the distance.'
  }
];

const imagesUnspliced = images.slice();

let randomImages = document.querySelectorAll('.random-photo');
let textElement = document.querySelectorAll('.text');
let imageToDisplay = document.querySelector('.largePhoto');
let descText = document.querySelector('.img-desc');
let fullSizeImageDiv = document.querySelector('.fullSizeImage');
let navAbout = document.querySelector('.about-button');
let returnHomeTab = document.querySelector('.return-home');
let content = document.querySelector('.about-page');
let fontOptions = document.querySelector('.font-sizes');
let footerLinks = document.querySelectorAll('.footer-item');
let body = document.getElementsByTagName('body')[0];
const exitButton = document.querySelector('.exit-button');

for (let i = 0; i < randomImages.length; i++) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let image = images[randomIndex];
  randomImages[i].querySelector('img').src = image.url;
  randomImages[i].setAttribute('aria-label', image.altText);
  randomImages[i].querySelector('img').alt = image.text;
  textElement[i].innerText = image.text;
  images.splice(randomIndex, 1);
}

for (let i = 0; i < randomImages.length; i++) {
  randomImages[i].parentNode.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      for (let i = 0; i < imagesUnspliced.length; i++) {
        // 'clicking' on image through tabbing causes target to return info on wrapper, not text div
        if (
          imagesUnspliced[i].text === e.target.querySelector('.text').innerText
        ) {
          fullSizeImageDiv.style.display = 'flex';
          fullSizeImageDiv.focus();
          let fullSizeImagePath = imagesUnspliced[i].url.replace(
            /-preview/,
            ''
          );
          imageToDisplay.src = fullSizeImagePath;
        }
      }
    }
  });
  randomImages[i].parentNode.addEventListener(
    'click',
    function showFullSizeImage(e) {
      for (let i = 0; i < imagesUnspliced.length; i++) {
        if (imagesUnspliced[i].text === e.target.innerText) {
          fullSizeImageDiv.style.display = 'flex';
          fullSizeImageDiv.focus();
          body.style.overflow = 'hidden';
          let fullSizeImagePath = imagesUnspliced[i].url.replace(
            /-preview/,
            ''
          );
          imageToDisplay.src = fullSizeImagePath;
          descText.textContent = imagesUnspliced[i].text;
        }
      }
    }
  );
}

function exitFullSize() {
  fullSizeImageDiv.style.display = 'none';
  // reset img src to prevent previous photo from displaying while current img downloads
  imageToDisplay.src = '';
  body.style.overflow = 'auto';
}
fullSizeImageDiv.addEventListener('click', function() {
  exitFullSize();
});
document.addEventListener('keydown', function(e) {
  if (
    e.key === 'Escape' ||
    e.key === ' ' ||
    e.keyCode === 27 ||
    e.keyCode === 32
  ) {
    exitFullSize();
    e.preventDefault();
  }
});

exitButton.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    exitFullSize();
    e.preventDefault();
  }
});

footerLinks.forEach(function(link) {
  link.addEventListener('mouseover', function(e) {
    const img = link.querySelector('.hidden');
    img.classList.remove('hidden');
    setTimeout(function() {
      img.classList.add('hidden');
    }, 1300);
  });
});

let totalHeight = document.body.scrollHeight;
let screenHeight = window.innerHeight;
window.addEventListener('scroll', function(e) {
  let scrolledDown =
    document.documentElement.scrollTop > document.body.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  if (scrolledDown + screenHeight >= totalHeight - 450) {
    returnHomeTab.style.display = 'block';
  } else {
    returnHomeTab.style.display = 'none';
  }
});

fontOptions.addEventListener('click', function(e) {
  content.style.fontSize = `${window.getComputedStyle(e.target).fontSize}`;
});

fontOptions.addEventListener('keydown', function(e) {
  if (
    e.key === 'Enter' ||
    e.key === ' ' ||
    e.keyCode === 13 ||
    e.keyCode === 27
  ) {
    content.style.fontSize = `${window.getComputedStyle(e.target).fontSize}`;
  }
});
