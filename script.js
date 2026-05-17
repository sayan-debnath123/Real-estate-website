function openModal() {

  document
    .getElementById("enquireModal")
    .classList.remove("hidden");

  document
    .getElementById("enquireModal")
    .classList.add("flex");
}

function closeModal() {

  document
    .getElementById("enquireModal")
    .classList.add("hidden");

  document
    .getElementById("enquireModal")
    .classList.remove("flex");
}

const form = document.getElementById("enquiryForm");

form.addEventListener("submit", async function(e) {

  e.preventDefault();

  const formData = {

    Name: document.getElementById("Name").value,

    Email: document.getElementById("Email").value,

    Phone: document.getElementById("Phone").value,

    Property: document.getElementById("Property").value,

    Budget: document.getElementById("Budget").value,

    Message: document.getElementById("Message").value,

    Page: window.location.href,

    Timestamp: new Date().toLocaleString()

  };

  console.log(formData);

  try {

    const response = await fetch(
      "https://sheetdb.io/api/v1/prowvxxerih96",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          data: [formData]
        })

      }
    );

    const result = await response.json();

    console.log(result);

    if(response.ok) {

      alert("Enquiry Submitted Successfully!");

      form.reset();

      closeModal();

    } else {

      alert("Submission failed");

    }

  } catch(error) {

    console.error(error);

    alert("Error connecting to database");

  }

});

function searchProperties() {

  const location =
    document
      .getElementById("searchLocation")
      .value
      .toLowerCase();

  const type =
    document
      .getElementById("searchType")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(".property-card");

  cards.forEach(card => {

    const cardLocation =
      card.dataset.location.toLowerCase();

    const cardType =
      card.dataset.type.toLowerCase();

    const matchesLocation =
      cardLocation.includes(location);

    const matchesType =
      type === "" || cardType === type;

    if(matchesLocation && matchesType) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

}