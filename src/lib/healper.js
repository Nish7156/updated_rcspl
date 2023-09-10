export const scrollToSection = (id, offset) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -50;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
