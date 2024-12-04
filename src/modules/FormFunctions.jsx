import { hideAllLists } from "./ListFunctions";

const handleToggle = (event) => {
  let toggleForm = document.getElementById(event.target.value);

  if (toggleForm.className === "hidden-form") {
    hideAllLists();
    hideForms();
    toggleForm.className = "unhidden-form";
  } else {
    toggleForm.className = "hidden-form";
  }
};

function hideForms() {
  let hideForms = document.querySelectorAll("form");
  let formArray = [...hideForms];
  formArray.map((item) => {
    item.className = "hidden-form";
  });
}

export { hideForms, handleToggle };
