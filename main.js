const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__form", {
  ...scrollRevealOption,
  delay: 500,
});

// trending container
ScrollReveal().reveal(".trending__card", {
  ...scrollRevealOption,
  interval: 500,
});

// destination container
ScrollReveal().reveal(".destination__card", {
  duration: 1000,
  interval: 500,
});

// seller container
ScrollReveal().reveal(".seller__card", {
  ...scrollRevealOption,
  interval: 500,
});

// guide container
ScrollReveal().reveal(".guide__card", {
  ...scrollRevealOption,
  interval: 500,
});

//  client container
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 500,
});

function submitForm() {
    // Extract values from the form fields
    let destination = document.getElementById('destination').value;
    let date = document.querySelector('input[type="date"]').value;
    let eventType = document.querySelector('input[placeholder="Type of Event"]').value;
    let guests = document.getElementById('guests').value;

    // Store these values in local storage
    localStorage.setItem('destination', destination);
    localStorage.setItem('date', date);
    localStorage.setItem('eventType', eventType);
    localStorage.setItem('guests', guests);

    // Redirect the user to next_page.html
    window.location.href = 'next_page.html';
}
