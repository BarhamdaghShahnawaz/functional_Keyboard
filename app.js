document.addEventListener("keydown", (e) => {
  const keyDiv = document.querySelector(`.key[data-code="${e.code}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 200);
  }
});

const input = document.querySelector("#searchbar");

document.addEventListener("keydown", (e) => {
  if (!input) return;

  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (e.key.length === 1) {
    input.value += e.key;
  } else if (e.key === "Enter") {
    const search_item = input.value.trim();
    if (search_item !== "") {
      const search_url = "https://www.google.com/search?q=" + encodeURIComponent(search_item);
      window.open(search_url, "_blank");
    }
  }
});

