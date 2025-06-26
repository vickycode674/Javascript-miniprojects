function toggleConcept(id) {
  const concept = document.getElementById(id);
  const conceptWrapper = concept.closest(".concept");

  const allBodies = document.querySelectorAll(".concept-body");
  const allWrappers = document.querySelectorAll(".concept");

  allBodies.forEach((el) => {
    if (el !== concept) el.style.display = "none";
  });

  allWrappers.forEach((el) => {
    if (el !== conceptWrapper) el.classList.remove("open");
  });

  if (concept.style.display === "block") {
    concept.style.display = "none";
    conceptWrapper.classList.remove("open");
  } else {
    concept.style.display = "block";
    conceptWrapper.classList.add("open");
  }
}
