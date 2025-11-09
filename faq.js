let acc = document.getElementsByClassName("accordation");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].parentElement.classList.remove("faq-active");
      }
    }

    // Toggle the current FAQ
    this.parentElement.classList.toggle("faq-active");
  });
}
