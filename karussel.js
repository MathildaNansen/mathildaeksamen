// Vi blev introduceret til en karrusel efter studiestartsprøven.
// Man kan se karrusellen som en kommode
// Kommoden er vores overordnede kodestruktur
// Skufferne i kommoden er vores array af billeder
// Hvor hvert billede er gemt i en skuffe
// Også har vi nogle funktioner der styrer hvilken skuffe der skal åbnes

// slideIndex holder styr på det aktuelle billede i karrusellen
let slideIndex = 0;

// viser det første billede i karrusellen
showSlides(slideIndex);

// funktion til at skifte frem og tilbage i billederne
// function kaldet er lavet med onclick i html
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// viser det slide man er kommet til, holder styr på indeholdet i array
function showSlides(n) {
  // henter alle billeder - document.querySelectorAll laver et array
  const slides = document.querySelectorAll(".slides img");

  // den kontrollerer om n er større eller lig med antallet af billeder
  // hvis det er tilfældet, sættes slideIndex til 0
  // så karrusellen starter forfra
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // hvis n er mindre end 0, sættes slideIndex til det sidste billede
  // giver en loop effekt
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // dette sikrer at ingen billeder er synlige før det aktuelle billede er bestemt
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // og til sidst viser det aktuelle billede
  slides[slideIndex].style.display = "block";
}
