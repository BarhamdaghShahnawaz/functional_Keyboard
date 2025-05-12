document.addEventListener("keydown", (e) => {
  const keyDiv = document.querySelector(`.key[data-code="${e.code}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 200);
  }
  var input = document.querySelector("#searchbar");
 document.addEventListener("keydown", function(e) {
  const input = document.getElementById("yourInputId"); // apne input field ka ID daalo

  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } 
  else if (e.key.length === 1) {
    // Sirf characters (letters, numbers, symbols)
    input.value += e.key;
  }

  else if (e.key === "Enter") {

    var  search_item = input.value;
    var search_url = "https://www.google.com/search?q=" + search_item;
    window.open(search_url, "_blank");
  }
});



  
});

