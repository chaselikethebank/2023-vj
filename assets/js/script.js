// (function () {
//     emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
//   })();

//   function sendEmail(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Compose email parameters
//     var params = {
//       to_name: "Your Name", // Replace with your name or recipient's name
//       from_name: name,
//       from_email: email,
//       message: message,
//     };

//     // Send email using EmailJS
//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params).then(
//       function (response) {
//         console.log("Email sent successfully", response);
//         alert("Email sent successfully!");
//         // Clear form fields
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//       },
//       function (error) {
//         console.error("Email sending failed", error);
//         alert("Failed to send email. Please try again later.");
//       }
//     );
//   }

const data = {
  releases: [
    {
      CatalogNum: "VJ001",
      ReleaseDate: "09.24.2013",
      Artist: "Children of Pop",
      Title: "Fiesta / Drift",
      Format: "LP",
      image: "assets/album-art/children-of-pop-fiesta-drift.jpeg",
    },
    {
      CatalogNum: "VJ002",
      ReleaseDate: "2013",
      Artist: "B.E. Godfrey",
      Title: "Wild Desperation",
      Format: "EP",
      image: "assets/album-art/wild-desperation.jpeg",
    },
    {
      CatalogNum: "VJ003",
      ReleaseDate: "Winter 2013",
      Artist: "Children of Pop",
      Title: "is coming to America",
      Format: "Tour",
      image: "assets/album-art/cop-live-chicago-rooftop.jpeg",
    },
    {
      CatalogNum: "VJ004",
      ReleaseDate: "2014",
      Artist: "Children of Pop",
      Title: "Pre Madonna Tour",
      Format: "City Bus and Backpack Tour",
      image: "assets/album-art/Pre-Madonna-tour.jpeg",
    },
    {
      CatalogNum: "VJ005",
      ReleaseDate: "Summer 2015",
      Artist: "Children of Pop",
      Title: "Rhombus Tour",
      Format: "Midwest X East Coast Tour",
      image: "assets/album-art/2015-cop-nyc-tour.png",
    },
    {
      CatalogNum: "VJ005.5",
      ReleaseDate: "Summer 2050",
      Artist: "Children of Pop X Mirror Kisses",
      Title: "Bummer Summer Tour",
      Format: "City Bus and Backpack Tour",
      image: "assets/album-art/cop-mirror-kisses.jpeg",
    },

    {
      CatalogNum: "VJ006",
      ReleaseDate: "05.06.2016",
      Artist: "Children of Pop",
      Title: "What Does 69 Mean?",
      Format: "LP - digital",
      image: "assets/album-art/69-vinyl.jpeg",
    },
    {
      CatalogNum: "VJ009",
      ReleaseDate: "6.24.16",
      Artist: "Pastel",
      Title: "Bone-Weary EP",
      Format: "EP",
      image: "assets/album-art/bone-weary.jpeg",
    },
    // {
    //   CatalogNum: "VJ010",
    //   ReleaseDate: "11.11.2016",
    //   Artist: "Jerk",
    //   Title: "Jerk",
    //   Format: "LP",

    // },
    {
      CatalogNum: "VJ012",
      ReleaseDate: "11.04.2016",
      Artist: "Deep Cuts",
      Title: "Take Me Back",
      Format: "EP",
      image: "assets/album-art/take-me-back.jpeg",
    },
    {
      CatalogNum: "VJ013",
      ReleaseDate: "12.16.2016",
      Artist: "Love n Lerrone",
      Title: "Vybe Right",
      Format: "Single",
      image: "assets/album-art/vybe-right.jpeg",
    },
    {
      CatalogNum: "VJ014",
      ReleaseDate: "02.10.2017",
      Artist: "Love n Lerrone",
      Title: "U Don't Care",
      Format: "Single",
      image: "assets/album-art/u-don't-care.jpeg",
    },
    {
      CatalogNum: "VJ015",
      ReleaseDate: "3.03",
      Artist: "Love n Lerrone",
      Title: "BaBae",
      Format: "Single",
      image: "assets/album-art/babae.jpeg",
    },
    // {
    //   CatalogNum: "VJ016",
    //   ReleaseDate: "Nov 11th 2016",
    //   Artist:
    //     "Deep Cuts - Love n Lerrone / children of pop / anitra / a dude who played guitar in neon indian",
    //   Title: "Take Me Back Remixes",
    //   Format: "Remix",
    // },
    {
      CatalogNum: "VJ017",
      ReleaseDate: "June 16th 2017",
      Artist: "Jerk",
      Title: "Socotra / War",
      Format: "Single - Digital",
      image: "assets/album-art/socotra.jpeg",
    },
    {
      CatalogNum: "VJ019",
      ReleaseDate: "Sept 29th",
      Artist: "VVELLS",
      Title: "Island of Me",
      Format: "Single - Digital",
      image: "assets/album-art/ISLAND-OF-ME.jpg",
    },
    {
      CatalogNum: "VJ020",
      ReleaseDate: "Oct 13th",
      Artist: "VVELLS",
      Title: "Island of Me",
      Format: "EP - Lathe 10'",
      image: "assets/album-art/VVELLS-COVER.jpg",
    },
    {
      CatalogNum: "VJ021",
      ReleaseDate: "Aug 4th",
      Artist: "Get A Life",
      Title: "What you deserve / 2 plus 2 equals 5",
      Format: "7''",
      image: "assets/album-art/what-you-deserve-get-a-life.jpeg",
    },
    {
      CatalogNum: "VJ022",
      ReleaseDate: "October 6, 2017",
      Artist: "Flossed in Paradise",
      Title: "Hate",
      Format: "EP",
      image: "assets/album-art/hate-ep.jpeg",
    },
    {
      CatalogNum: "VJ023",
      ReleaseDate: "October 20th, 2017",
      Artist: "Deep Cuts",
      Title: "Endlessly Refreshing",
      Format: "Single",
      image: "assets/album-art/endlessly-refreshing.jpg",
    },
    {
      CatalogNum: "VJ025",
      ReleaseDate: "2017",
      Artist: "VVELLS",
      Title: "Green Lights",
      Format: "Single - Digital",
      image: "assets/album-art/green-lights.jpeg",
    },
    {
      CatalogNum: "VJ026",
      ReleaseDate: "June 16th, 2017",
      Artist: "Children of Pop",
      Title: "Poids / Etude en Cours",
      Format: "Single - 7'' Square",
      image: "assets/album-art/poids-etude.jpeg",
    },
    {
      CatalogNum: "VJ028",
      ReleaseDate: "08.25.2017",
      Artist: "Pastel",
      Title: "absent, just dust",
      Format: "EP",
      image: "assets/album-art/absent.jpeg",
    },
    {
      CatalogNum: "VJ029",
      ReleaseDate: "Jan 12, 2018",
      Artist: "Narrow Head",
      Title: "Bulma",
      Format: "Single",
      image: "assets/album-art/narrow_head_bulma_web_large.jpg",
    },
    {
      CatalogNum: "VJ031",
      ReleaseDate: "02.14.2018",
      Artist: "Pastel",
      Title: "Close",
      Format: "Single",
      image: "assets/album-art/close-pastel.jpeg",
    },

    {
      CatalogNum: "VJ033",
      ReleaseDate: "2.23.2018",
      Artist: "Guess Genes",
      Title: "Lilly Vine",
      Format: "Single",
      image: "assets/album-art/lily-vine.png",
    },
    {
      CatalogNum: "VJ035",
      ReleaseDate: "4.21.2018",
      Artist: "Guess Genes",
      Title: "Guess Genes",
      Format: "Tape - Full length",
      image: "assets/album-art/Guess-Genes.png",
    },
    {
      CatalogNum: "VJ036",
      ReleaseDate: "3.9.2018",
      Artist: "Tee Lerrone",
      Title: "I Digress",
      Format: "Single",
      image: "assets/album-art/I-Digress.jpg",
    },
    {
      CatalogNum: "VJ037",
      ReleaseDate: "04.13.2018",
      Artist: "Guess Genes",
      Title: "Bones on the Beach",
      Format: "Single",
      image: "assets/album-art/bones-on-the-beach.jpg",
    },
    {
      CatalogNum: "VJ038",
      ReleaseDate: "8.10.2018",
      Artist: "Caicos",
      Title: "Promised Lands",
      Format: "EP",
      image: "assets/album-art/promised-land.jpeg",
    },
    {
      CatalogNum: "VJ039",
      ReleaseDate: "04.30.2018",
      Artist: "Two Meters",
      Title: "Left Behind",
      Format: "Single",
      image: "assets/album-art/two-meters-two-meters.jpeg",
    },
    {
      CatalogNum: "VJ040",
      ReleaseDate: "05.25.2018",
      Artist: "Two Meters",
      Title: "Captive Audience",
      Format: "Single",
      image: "assets/album-art/two-meters-two-meters.jpeg",
    },
    {
      CatalogNum: "VJ041",
      ReleaseDate: "06.15.2018",
      Artist: "Two Meters",
      Title: "Two Meters",
      Format: "EP",
      image: "assets/album-art/two-meters-two-meters.jpeg",
    },
    {
      CatalogNum: "VJ042",
      ReleaseDate: "October",
      Artist: "Get A Life",
      Title: "get a job",
      Format: "single",
      image: "assets/album-art/get-a-job.jpeg",
    },
    {
      CatalogNum: "VJ043",
      ReleaseDate: "TBD",
      Artist: "MiddleChild",
      Title: "Daisy",
      Format: "EP",
      image: "assets/album-art/middle-child-daisy.jpeg",
    },
    {
      CatalogNum: "VJ00?",
      ReleaseDate: "6/3/2016",
      Artist: "Josiah Gabriel",
      Title: "EP$",
      Format: "EP",
      image: "assets/album-art/JG-$-ep.JPG",
    },
    {
      CatalogNum: "VJ044",
      ReleaseDate: "06.08.2018",
      Artist: "Standard Legal",
      Title: "Mercury",
      Format: "EP",
      image: "assets/album-art/standar-legal.jpg",
    },
    {
      CatalogNum: "VJ045",
      ReleaseDate: "07.06.2018",
      Artist: "Aubrey Haddard",
      Title: "Blue Part",
      Format: "LP",
      image: "assets/album-art/blue-part.jpeg",
    },
    {
      CatalogNum: "VJ047",
      ReleaseDate: "08.03.2018",
      Artist: "Tee Vee",
      Title: "Dreaming",
      Format: "Single",
      image: "assets/album-art/tee-vee-dreaming.jpeg",
    },
    {
      CatalogNum: "VJ049",
      ReleaseDate: "09.07.2018",
      Artist: "BjORDAN",
      Title: "Bad Boy Sad Boy",
      Format: "Single",
      image: "assets/album-art/bjordan.jpeg",
    },
  ],
};

console.log(data);

const container = document.getElementById("card-container");

for (let i = data.releases.length - 1; i >= 0; i--) {
  const release = data.releases[i];

  // console.log(release);

  const card = document.createElement("div");
  const details = document.createElement("div");
  card.classList.add("release-card");
  details.classList.add("details");
 
  const art = document.createElement("img");
  art.setAttribute("alt", "release art or placeholder logo");
  art.setAttribute("src", release.image || "assets/logo/VJ-logo-stamp.png");
  art.style.width = "100%";
  art.style.marginTop = "15%";

  const title = document.createElement("div");
  title.textContent = release.Title;
  title.classList.add("card-detials");

  const artist = document.createElement("div");
  artist.textContent = release.Artist;
  artist.classList.add("pop");

  const catNum = document.createElement("div");
  catNum.textContent = "#" + release.CatalogNum || "Unknown";
  // catNum.classList.add("pop");

  const format = document.createElement("div");
  format.textContent = release.Format;
  format.classList.add("card-detials");

  const date = document.createElement("div");
  date.textContent = release.ReleaseDate || "Unknown";
  
  details.appendChild(art)
  container.appendChild(art);
  card.appendChild(artist);
  card.appendChild(title);
  card.appendChild(format);
  card.appendChild(date);
  card.appendChild(catNum);


  container.appendChild(card);

  
}

//emojis

APIKEY = "24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIURLALLEMOJIS =
  "https://emoji-api.com/emojis?access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIWAVE =
  "https://emoji-api.com/emojis?search=wave&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APISTAG =
  "https://emoji-api.com/emojis?search=deer&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIROSE =
  "https://emoji-api.com/emojis?search=flower&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIMOUNTAIN =
  "https://emoji-api.com/emojis?search=MOUNTAIN&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIPATH =
  "https://emoji-api.com/emojis?search=dharma&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";
APIVISION =
  "https://emoji-api.com/emojis?search=telescope&access_key=24998c4e9075abdb3923a34c0e5d0dd31c7fcb50";

const waveContainer = document.getElementById("wave-container");
const stagContainer = document.getElementById("stag-container");
const roseContainer = document.getElementById("rose-container");
const mountainContainer = document.getElementById("mountain-container");
const pathContainer = document.getElementById("path-container");
const visionContainer = document.getElementById("vision-container");

fetch(APIWAVE)
  .then((response) => response.json())
  .then((data) => {
    const firstEmoji = data[0];
    if (firstEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = firstEmoji.character;
      waveContainer.appendChild(emojiCard);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

fetch(APISTAG)
  .then((response) => response.json())
  .then((data) => {
    const firstEmoji = data[0];
    if (firstEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = firstEmoji.character;
      stagContainer.appendChild(emojiCard);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

fetch(APIROSE)
  .then((response) => response.json())
  .then((data) => {
    const correctEmoji = data[1];
    if (correctEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = correctEmoji.character;
      roseContainer.appendChild(emojiCard);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

fetch(APIMOUNTAIN)
  .then((response) => response.json())
  .then((data) => {
    const correctEmoji = data[19];
    if (correctEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = correctEmoji.character;
      mountainContainer.appendChild(emojiCard);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

fetch(APIPATH)
  .then((response) => response.json())
  .then((data) => {
    const correctEmoji = data[0];
    if (correctEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = correctEmoji.character;
      pathContainer.appendChild(emojiCard);
    }
    // console.log(data);
  })
  .catch((error) => console.log(error));

fetch(APIVISION)
  .then((response) => response.json())
  .then((data) => {
    const correctEmoji = data[0];
    if (correctEmoji) {
      const emojiCard = document.createElement("div");
      emojiCard.classList.add("emoji-card");
      emojiCard.textContent = correctEmoji.character;
      visionContainer.appendChild(emojiCard);
    }
    console.log(data);
  })
  .catch((error) => console.log(error));

// adding to stream count

const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
const years = 10;

const totalSeconds = years * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;

const totalStreams = 6632480;
const streamsPerSecond = totalStreams / totalSeconds;

let count = totalStreams;
const streamCount = document.getElementById('stream-number');

setInterval(() => {
  count += streamsPerSecond / 100;
  console.log(streamsPerSecond)
  const newCount = count.toLocaleString();
  streamCount.textContent = newCount;
  // console.log(newCount);

  // streamCount.classList.add('stream-blur-animation');
  // setTimeout(() => {
  //   streamCount.classList.remove('stream-blur-animation');
  // }, 500);
}, 10);
