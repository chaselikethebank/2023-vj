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
      Format: "LP"
    }
    ,
    {
      CatalogNum: "VJ00?",
      ReleaseDate: "06.24.2016",
      Artist: "Josiah Gabriel",
      Title: "BIG FACE",
      Format: "EP"
    }
,
    {
      CatalogNum: "TOUR",
      ReleaseDate: "June",
      Artist: "Children of Pop",
      Title: "Summer tour",
      Format: "East coast - Select West coast"
    },
    {
      CatalogNum: "VJ006",
      ReleaseDate: "05.06.2016",
      Artist: "Children of Pop",
      Title: "What Does 69 Mean?",
      Format: "LP"
    },
    {
      CatalogNum: "VJ008",
      ReleaseDate: "06.03.2016",
      Artist: "Josiah Gabriel",
      Title: "EP$",
      Format: "EP"
    },
    {
      CatalogNum: "VJ009",
      ReleaseDate: "6.24.16",
      Artist: "Pastel",
      Title: "Bone-Weary EP",
      Format: "EP"
    },
    {
      CatalogNum: "VJ010",
      ReleaseDate: "11.11.2016",
      Artist: "Jerk",
      Title: "Jerk",
      Format: "LP"
    },
    {
      CatalogNum: "VJ012",
      ReleaseDate: "11.04.2016",
      Artist: "Deep Cuts",
      Title: "Take Me Back",
      Format: "EP"
    },
    {
      CatalogNum: "VJ013",
      ReleaseDate: "12.16.2016",
      Artist: "Love n Lerrone",
      Title: "Vybe Right",
      Format: "Single"
    },
    {
      CatalogNum: "VJ014",
      ReleaseDate: "02.10.2017",
      Artist: "Love n Lerrone",
      Title: "U Don't Care",
      Format: "Single"
    },
    {
      CatalogNum: "VJ015",
      ReleaseDate: "3.03",
      Artist: "Love n Lerrone",
      Title: "BaBae",
      Format: "Single"
    },
    {
      CatalogNum: "VJ016",
      ReleaseDate: "Nov 11th",
      Artist: "Deep Cuts - Love n Lerrone / children of pop / anitra / a dude who played guitar in neon indian",
      Title: "Take Me Back Remixes",
      Format: "Remix"
    },
    {
      CatalogNum: "VJ017",
      ReleaseDate: "June 16th",
      Artist: "Jerk",
      Title: "Socotra / War",
      Format: "Single - Digital"
    },
    {
      CatalogNum: "VJ019",
      ReleaseDate: "Oct 13th",
      Artist: "VVELLS",
      Title: "Island of Me",
      Format: "EP - Lathe 10'"
    },
    {
      CatalogNum: "VJ020",
      ReleaseDate: "Sept 29th",
      Artist: "VVELLS",
      Title: "Island of Me",
      Format: "Single - Digital"
    },
    {
      CatalogNum: "VJ021",
      ReleaseDate: "Aug 4th",
      Artist: "Get A Life",
      Title: "What you deserve / 2 plus 2 equals 5",
      Format: "7''"
    },
    {
      CatalogNum: "VJ022",
      ReleaseDate: "October 6th",
      Artist: "Flossed in Paradise",
      Title: "Hate EP",
      Format: "EP"
    },
    {
      CatalogNum: "VJ023",
      ReleaseDate: "October 20th",
      Artist: "Deep Cuts",
      Title: "Endlessly Refreshing",
      Format: "Single"
    },
    {
      CatalogNum: "VJ025",
      ReleaseDate: "Aug 18th",
      Artist: "VVELLS",
      Title: "Green Lights",
      Format: "Single - Digital"
    },
    {
      CatalogNum: "VJ026",
      ReleaseDate: "June 16th",
      Artist: "Children of Pop",
      Title: "Poids / Etude en Cours",
      Format: "Single - 7'' Square"
    },
    {
      CatalogNum: "VJ028",
      ReleaseDate: "08.25.2017",
      Artist: "Pastel",
      Title: "absent, just dust",
      Format: "EP"
    },
    {
      CatalogNum: "VJ029",
      ReleaseDate: "Jan 12, 2018",
      Artist: "Narrow Head",
      Title: "Bulma",
      Format: "Single"
    },
    {
      CatalogNum: "VJ031",
      ReleaseDate: "02.14.2018",
      Artist: "Pastel",
      Title: "Close",
      Format: "Single"
    },
    {
      CatalogNum: "VJ033",
      ReleaseDate: "2.23",
      Artist: "Guess Genes",
      Title: "Lilly Vine",
      Format: "Single"
    },
    {
      CatalogNum: "VJ035",
      ReleaseDate: "4.21",
      Artist: "Guess Genes",
      Title: "Guess Genes",
      Format: "Tape - Full length"
    },
    {
      CatalogNum: "VJ036",
      ReleaseDate: "3.9",
      Artist: "Tee Lerrone",
      Title: "I Digress",
      Format: "Single"
    },
    {
      CatalogNum: "VJ037",
      ReleaseDate: "04.13.2018",
      Artist: "Guess Genes",
      Title: "Bones on the Beach",
      Format: "Single"
    },
    {
      CatalogNum: "VJ038",
      ReleaseDate: "8.10.2018",
      Artist: "Caicos",
      Title: "Promis Lands",
      Format: "EP"
    },
    {
      CatalogNum: "VJ039",
      ReleaseDate: "04.30.2018",
      Artist: "Two Meters",
      Title: "Left Behind",
      Format: "Single"
    },
    {
      CatalogNum: "VJ040",
      ReleaseDate: "05.25.2018",
      Artist: "Two Meters",
      Title: "Captive Audience",
      Format: "Single"
    },
    {
      CatalogNum: "VJ041",
      ReleaseDate: "06.15.2018",
      Artist: "Two Meters",
      Title: "Two Meters",
      Format: "EP"
    },
{
      CatalogNum: "VJ042",
      ReleaseDate: "October",
      Artist: "Get A Life",
      Title: "get a job",
      Format: "single"
    },
    {
      CatalogNum: "VJ043",
      ReleaseDate: "TBD",
      Artist: "MiddleChild",
      Title: "Daisy",
      Format: "EP"
    },
    {
      CatalogNum: "VJ044",
      ReleaseDate: "06.08.2018",
      Artist: "Standard Legal",
      Title: "Mercury",
      Format: "EP"
    },
    {
      CatalogNum: "VJ045",
      ReleaseDate: "07.06.2018",
      Artist: "Aubrey Haddard",
      Title: "Blue Part",
      Format: "LP"
    },
    {
      CatalogNum: "VJ047",
      ReleaseDate: "08.03.2018",
      Artist: "Tee Vee",
      Title: "Dreaming",
      Format: "Single"
    },
    {
      CatalogNum: "VJ049",
      ReleaseDate: "09.07.2018",
      Artist: "BjORDAN",
      Title: "Bad Boy Sad Boy",
      Format: "Single"
    },
    {
      CatalogNum: "VJ050",
      ReleaseDate: "09.07.2018",
      Artist: "IEVA",
      Title: "30 Nights",
      Format: "Single"
    },
    {
      CatalogNum: "VJ...",
      ReleaseDate: "02.08.201...",
      Artist: "..."
    }
  ]
};

console.log(data);

data.releases.forEach((release) => {
  // Add the image property to each release object
  release.image = "https://f4.bcbits.com/img/0016413644_2.jpg";
});


console.log(data);
const container = document.getElementById("card-container");

data.releases.forEach((release) => {
  const card = document.createElement("div");
  card.classList.add("release-card");

  const art = document.createElement("img");
  art.setAttribute("alt", "release art or placeholder logo");
  art.setAttribute("src", "assets/logo/VJ-logo-stamp.png"); 
  art.style.width = "95%";

  
  const title = document.createElement("h2");
  title.textContent = "Release: " + release.Title;

  const artist = document.createElement("h2");
  artist.textContent = "Artist: " + release.Artist;

  const catNum = document.createElement("h2");
  catNum.textContent = "Cat Number: #" + release.CatalogNum || "Unknown";

  const format = document.createElement("h2");
  format.textContent = "Format: " + release.Format;

  const date = document.createElement("h2");
  date.textContent = "Release Date: " + release.ReleaseDate || "Unknown";



  // Append the release data elements to the card
  card.appendChild(art);
  card.appendChild(artist);
  card.appendChild(title);
  card.appendChild(catNum);
  card.appendChild(format);
  card.appendChild(date);

  // Append the card to the container element
  container.appendChild(card);
});
