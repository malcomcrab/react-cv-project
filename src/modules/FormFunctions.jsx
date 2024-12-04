import { hideAllLists } from "./ListFunctions";

{/* Toggles the display of each form when the 'add' button is clicked 
  the hideForms and hideAllLists functions close all other open forms/lists */}

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

  {/* Closes all other open forms in display */}

function hideForms() {
  let hideForms = document.querySelectorAll(".unhidden-form");
  let formArray = [...hideForms];
  formArray.map((item) => {
    item.className = "hidden-form";
  });
}

export { hideForms, handleToggle };
