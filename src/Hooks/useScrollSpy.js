import { useEffect, useState } from "react";

function useScrollSpy(sections) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newActiveSection = null;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight - 100;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            newActiveSection = section.id;
            break;
          }
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return activeSection;
}

export default useScrollSpy;
