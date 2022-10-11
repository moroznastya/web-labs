import {
  getInputValues,
  clearInputs,
  addItemToPage,
  renderItemsList
} from "./dom_utils.js";

import {
  getAllCats
} from "./api.js";

const HIDDEN_CLASSNAME = "hidden";
const SELECTED_CLASSNAME = "selected";

const headerNavItems = document.querySelectorAll(".header__nav-item");
const myCatsContainer = document.getElementById("mycats");
const createCatContainer = document.getElementById("createcat");
const myCatsButtons = document.querySelectorAll(".mycats_button");
const createCatButtons = document.querySelectorAll(".createcat_button");
const submitButton = document.getElementById("submit_button");
const findtButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const countButton = document.getElementById("count_button");
const removeButtons = document.querySelectorAll("removecat_button");
const findInput = document.getElementById("find_input");
const cutenessInput = document.getElementById("cuteness_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countResult = document.getElementById("count_result");

let cats = [];

[...createCatButtons].forEach(element => {
  element.addEventListener("click", () => {
      myCatsContainer.classList.toggle(HIDDEN_CLASSNAME);
      createCatContainer.classList.toggle(HIDDEN_CLASSNAME);
      [...headerNavItems].forEach(item => item.classList.toggle(SELECTED_CLASSNAME));
  });
});

[...myCatsButtons].forEach(element => {
  element.addEventListener("click", () => {
      myCatsContainer.classList.toggle(HIDDEN_CLASSNAME);
      createCatContainer.classList.toggle(HIDDEN_CLASSNAME);
      [...headerNavItems].forEach(item => item.classList.toggle(SELECTED_CLASSNAME));
  });
});

const addItem = ({ title, description, cuteness }) => {
  const generatedId = Math.floor(Math.random() * Date.now());
  const newItem = {
      id: generatedId,
      title,
      description,
      cuteness
  };

  cats.push(newItem);

  addItemToPage(newItem);
}



submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { title, description, cuteness } = getInputValues();

  if (title === "") {
      alert("Title can't be empty!");
      return;
  }

  clearInputs();

  addItem({
      title,
      description,
      cuteness
  });
});

findtButton.addEventListener("click", () => {
  const foundCats = cats.filter(cat => cat.title.search(findInput.value) !== -1);

  renderItemsList(foundCats);
});

clearButton.addEventListener("click", () => {
  renderItemsList(cats);

  findInput.value = "";
});

sortCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
      const sortedCats = cats.map((x) => x);
      sortedCats.sort((a, b) => a.cuteness - b.cuteness);
      renderItemsList(sortedCats);
  } else {
      renderItemsList(cats);
  }
});

countButton.addEventListener("click", () => {
  countResult.innerHTML = `${cats.length} cats`;
});

cutenessInput.addEventListener("input", () => {
  document.getElementById("cuteness_percentage").innerHTML = `${cutenessInput.value}%`;
});

renderItemsList();

getAllCats();


