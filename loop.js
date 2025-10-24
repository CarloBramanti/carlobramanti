// Column 1 Reroll BIO
const trigger = document.getElementById('trigger-really');
const funnyBio = document.getElementById('funny-bio');

const textColors = ['red', 'blue'];

const bioOptions = [
  "He hates writing bios where he speaks in third person of himself.",
  "His 4 favorites on Letterboxd are: John Wick, John Wick 2, John Wick 3, and John Wick 4.",
  "He likes, among others, the following video games: Return of the Obra Dinn, Hollow Knight, Kentucky Route Zero, Pokémon Crystal, The Binding of Isaac, Disco Elysium.",
  "He is the top of the West, always cool, he is the best *<a style='color: var(--textColor)' href=' https://youtu.be/sFFLQ89bJRM?si=ppRm6G_ITwrYg1Xx&t=81' target='_blank'>whistling</a>*",
  "He is in this <a style='color: var(--textColor)' href='images/Disco Elysium.png' target='_blank'>image</a>.",
  "His highscore on Tetris.com is 1,000,077",
  "He is the Referendary of the Order of the Rosicrucians in Europe, Secret Knight of the Grand Priory In Patribus of Rhodes, Malta and Thessaloniki."
];

const spinSpeed = 35; // millisecond speed for each frame
const spinDuration = 1100; // total duration of the spin
const mobileSize = window.matchMedia("(max-width: 765px)");

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

trigger.addEventListener('click', () => {
  let interval = setInterval(() => {
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinSpeed);

  setTimeout(() => {
    clearInterval(interval);
    // Set last random bio
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinDuration);
});

funnyBio.addEventListener('click', () => {
  let interval = setInterval(() => {
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinSpeed);

  setTimeout(() => {
    clearInterval(interval);
    // Set last random bio
    funnyBio.innerHTML = bioOptions[Math.floor(Math.random() * bioOptions.length)];
  }, spinDuration);
});

//Picks the right file according to the theme (red or blue)
function setTheme() {
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');
  const arrowDown = document.getElementById('arrow-down');

  const i = getRandomIntInclusive(0, textColors.length - 1)
  const newColor = textColors[i];
  const root = document.documentElement;
  root.style.setProperty('--textColor', newColor);

  arrowLeft.src = `arrow-left-${newColor}.svg`;
  arrowRight.src = `arrow-right-${newColor}.svg`;
  arrowDown.src = `arrow-down-${newColor}.svg`;
}

// Colonna 3
const projects = [
  {
    name: "Project 1",
    folder: "project1",
    caption: "<em>The Bigger Picture</em> is an exploratory diagrammatic installation I designed as a graduation project at DAE. The installation consists of a room-sized flowchart drawn directly onto the exhibition surfaces with invisible ink that can be seen only using a UV-flashlight. Through the game/investigation experience, made of crossroads, choices and hidden elements, I unpack the content of my research on the formal and and theoretical similarities between design and conspiracy theories. The project aims at opening a discussion about the legitimacy of information and the social perception of design and conspiracy theories: two esoteric systems of knowledge in constant need to expand the scope of their research.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
  },
  {
    name: "Project 2",
    folder: "project2",
    caption: "<em>Images of Uncertain Mysophobia</em> is a speculative publication about future pandemics. The project starts with the assignment, received during my MA at DAE, to make an exercise in future archeology and imagine what will be the representative features of our time, hereby defined by after-COVID uncertainty. Based on scenarios of higher risk that seem to have more consensus in the scientific community, I developed an editorial project that through archival images and diaristic notes tells the story of laboratory leak and speculates on what could be the iconography of the next pandemic.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  },
  {
    name: "Project 3",
    folder: "project3",
    caption: "<em>Spoiled Air</em> is a project of visualization of air and its relationship with mental health issues. The installation, designed for an assignment during my MA at DAE, displays a series of quantified information about air volumes, atmospheric composition, breathing mechanisms, and the perception of such in situations of isolation and psychological distress. The information is represented through the metaphoric unit of inflatable origamis, hinting both at the calming practice of breathing in a paper bag, and at the sense of enclosure and missing air that various conditions of psychological struggle can induce. The last bit of information eventually opens as the origami unfolds, inviting to breathe.",
    colorImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "1.mp4"]
  },

  {
    name: "Project 4",
    folder: "project4",
    caption: "In 2023 I designed the visual identity for <em>Backward Steps</em>, an independent musical project of producer and beat-maker Ha-Maze. Together with the artist we defined the core aspects of the project that needed to be conveyed and we imagined how to translate such sensations and ideas through visual metaphors. The lo-fi, broken, and glitchy urban sounds were represented by juxtaposing photographs and videos with a residual, dreamlike appearance with animated ASCII art. The ASCII typographic visuals were obtained using a P5js script (based on the work of Andreas Gysin) that maps and converts the brightness of the pixels in a video into a list of glyphs.",
    colorImages: ["1.jpg", "2.mp4", "3.mp4", "4.mp4", "5.jpg"]
  },

  {
    name: "Project 5",
    folder: "project5",
    caption: "<em>Representation Wars</em> is an infographic designed to try to deconstruct the rhetorical function of war depictions inside the Rijksmuseum in Amsterdam. Prompted by an assignment received during my MA to design an hacking intervention within the Rijksmuseum that would counter its act of creation of national identity, I examined room 2.1.5 of the museum, where some of the most important paintings of dutch naval battles are exhibited. I then selected 'The Battle of Leghorn' by Reiner Nooms as a case study and designed an essential infographic to expose the limits the painting as an historical document and show the way it serves as tool of national glorification.",
    colorImages: ["1.jpg", "1.mp4", "1.png", "2.png", "3.png", "4.png"]
  },

  {
    name: "Project 6",
    folder: "project6",
    caption: "<em>Cosa scopro quando disegno</em> (&quotWhat I find out as I draw&quot) is my thesis and graduation project from my BA at ISIA Urbino. It is an inquiry into the processes of learning and unlearning how to draw. As the ability to draw analogically becomes less and less present in designers' practices it keeps on offering a multitude of discoveries and questions, both practical and philosophical, particularly when framed as process-centered activity. Cosa scopro quando disegno is a publication that collects historical cases, interviews, personal reflections, and self-initiated workshops, all centered on exercises that invite to deconstruct our understanding of drawing.",
    colorImages: ["2.png", "3.png", "4.png", "5.png", "6.png", "7.png"]
  },
  // add more projects here
];

const dotsContainer = document.getElementById("gallery-dots-B");
const loopContainer = document.getElementById("loop-B");
const captionEl = document.getElementById("caption-B");
const leftArrow = document.querySelector(".gallery-arrows img:first-child");
const rightArrow = document.querySelector(".gallery-arrows img:last-child");

let currentIndex = 0;
let loopInterval;
let isHovering = false;
let colorIndex = 0;

function startLoop() {
  loopInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    if (!isHovering) showPreview(currentIndex);
  }, 3000);
}

function stopLoop() {
  clearInterval(loopInterval);
}

function showColorVersion(index) {
  const project = projects[index];
  const colorImg = project.colorImages[colorIndex % project.colorImages.length];
  const filePath = `images/${project.folder}/${colorImg}`;
  const extension = colorImg.split('.').pop().toLowerCase();

  let mediaElement = "";

  if (["mp4", "webm"].includes(extension)) {
    // Se è un video
    mediaElement = `
      <video class="loop-video" autoplay muted playsinline loop>
        <source src="${filePath}" type="video/${extension}">
      </video>
    `;
  } else {
    // Se è un’immagine
    mediaElement = `<img src="${filePath}" class="loop-image" />`;
  }

  loopContainer.innerHTML = mediaElement;
  captionEl.innerHTML = project.caption;
  captionEl.style.display = "block";

  // Forza il video a partire quando il DOM è pronto
  const video = loopContainer.querySelector('video');
  if (video) {
    video.load();
    video.play().catch(() => {
      // fallback se il browser blocca autoplay
      video.muted = true;
      video.play().catch(() => { });
    });
  }
}

loopContainer.addEventListener("mouseenter", () => {
  isHovering = true;
  stopLoop();
  colorIndex = 0;
  showColorVersion(currentIndex);
});

loopContainer.addEventListener("mouseleave", () => {
  console.log("Esco dall’hover");

  isHovering = false;
  captionEl.style.display = "none";
  loopContainer.innerHTML = "";
  showPreview(currentIndex);
  startLoop();
});

loopContainer.addEventListener("click", () => {
  if (isHovering) {
    colorIndex++;
    showColorVersion(currentIndex);
  }
});

leftArrow.addEventListener("click", () => {
  if (!isHovering) goToIndex(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
  if (!isHovering) goToIndex(currentIndex + 1);
});

//Navigation dots for projects
function createDots() {
  dotsContainer.innerHTML = "";
  projects.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      if (!isHovering) goToIndex(i);
    });

    dotsContainer.appendChild(dot);
  });
}

function goToIndex(index) {
  currentIndex = (index + projects.length) % projects.length;
  showPreview(currentIndex);
  stopLoop();
  startLoop();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function showPreview(index) {
  const project = projects[index];
  loopContainer.innerHTML = `<img src="images/${project.folder}/preview-bw.jpg" class="loop-image" />`;
  updateDots();
}


// Generates slide for projects on mobile
function loadProjects() {
  if (mobileSize.matches) {
    let wrapper = document.getElementsByClassName('swiper-wrapper')[0];

    projects.forEach((proj, projectIndex) => {
      let slide = document.createElement('div');
      slide.classList.add('project-slide', 'swiper-slide');

      // inside your loadProjects() when creating each slide:
      let badge = document.createElement('div');
      badge.className = 'tap-for-more';
      badge.textContent = 'tap for more';
      slide.appendChild(badge); // slide è la .swiper-slide

      // Wrapper media
      let mediaWrapper = document.createElement('div');
      mediaWrapper.classList.add('project-slide-image');

      // Primo media: sempre il primo file del progetto
      let mediaEl;
      const firstFile = proj.colorImages[0];
      const ext = firstFile.split('.').pop().toLowerCase();

      if (["mp4", "webm"].includes(ext)) {
        mediaEl = document.createElement('video');
        mediaEl.src = `images/${proj.folder}/${firstFile}`;
        mediaEl.autoplay = true;
        mediaEl.muted = true;
        mediaEl.loop = true;
        mediaEl.playsInline = true;
      } else {
        mediaEl = document.createElement('img');
        mediaEl.src = `images/${proj.folder}/${firstFile}`;
      }

      mediaWrapper.append(mediaEl);

      // Caption
      let captionWrapper = document.createElement('div');
      captionWrapper.classList.add('caption-wrapper');
      let caption = document.createElement('p');
      caption.classList.add('caption');
      caption.innerHTML = proj.caption;
      captionWrapper.append(caption);

      // Aggiunge tutto alla slide
      slide.append(mediaWrapper);
      slide.append(captionWrapper);
      wrapper.append(slide);

      // Click listener per ciclare media
      let colorIndex = 0;
      mediaEl.addEventListener("click", function cycleMedia() {
        colorIndex++;
        const nextFile = proj.colorImages[colorIndex % proj.colorImages.length];
        const nextExt = nextFile.split('.').pop().toLowerCase();

        let newEl;
        if (["mp4", "webm"].includes(nextExt)) {
          newEl = document.createElement('video');
          newEl.src = `images/${proj.folder}/${nextFile}`;
          newEl.autoplay = true;
          newEl.muted = true;
          newEl.loop = true;
          newEl.playsInline = true;
        } else {
          newEl = document.createElement('img');
          newEl.src = `images/${proj.folder}/${nextFile}`;
        }

        mediaEl.replaceWith(newEl);
        mediaEl = newEl;
        mediaEl.addEventListener("click", cycleMedia); // Riattacca listener
      });
    });
  }
}


// Tooltip tracking
const tooltip = document.getElementById('tooltip');
const projectframeB = document.getElementsByClassName('project-frame-B')[0];
projectframeB.addEventListener("mousemove", (e) => {
  const rect = tooltip.getBoundingClientRect();
  const x = e.clientX - (rect.width / 2);
  const y = e.clientY + 20;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
});

// Initialize
showPreview(currentIndex);
startLoop();
createDots();
updateDots();
loadProjects();

// Swiper initialisation
var swiper = new Swiper(".proj-mobile", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

// Osserva cambi di dimensione del container per forzare autoplay su mobile/desktop small
const ro = new ResizeObserver(() => {
  const video = loopContainer.querySelector('video');
  if (video && loopContainer.offsetWidth > 0 && loopContainer.offsetHeight > 0) {
    video.load();
    video.play().catch(() => { });
  }
});
ro.observe(loopContainer);