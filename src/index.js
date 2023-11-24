function handleSearchSubmit(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = searchFormInput.value;
  console.log(searchFormElement.value);
}

let searchFormElement = document.querySelector("#search-form-element");
searchFormElement.addEventListener("submit", handleSearchSubmit);
