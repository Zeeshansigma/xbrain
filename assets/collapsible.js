class CollapsibleElement extends HTMLElement {
  connectedCallback() {
    const title = this.querySelector(".collapsible__title");
    const content = this.querySelector(".collapsible__content");

    const updateHeight = () => {
      if (title.getAttribute("active") === "true") {
        const prevHeight = content.style.height;
        content.style.height = "auto";
        const newScrollHeight = `${content.scrollHeight}px`;
        content.style.height = prevHeight;

        requestAnimationFrame(() => {
          content.style.height = newScrollHeight;
        });
      }
    };

    if (title && title.getAttribute("active") === "true") {
      updateHeight();
    } else {
      title?.setAttribute("active", "false");
    }

    title?.addEventListener("click", function (e) {
      if (title.getAttribute("active") === "true") {
        title.setAttribute("active", "false");
        content.setAttribute("active", "false");
        content.style.height = "0px";
        if (title.classList.contains("read-more-link"))
          title.innerHTML = title.dataset.readMore;
      } else {
        title.setAttribute("active", "true");
        content.setAttribute("active", "true");
        if (title.classList.contains("read-more-link"))
          title.innerHTML = title.dataset.readLess;
        updateHeight();
      }
    });

    window.addEventListener("resize", updateHeight);
  }
}

customElements.define("collapsible-element", CollapsibleElement);
