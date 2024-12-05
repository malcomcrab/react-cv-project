import { hideForms } from "./FormFunctions";

{/* Toggles the display of each list when the dropdown button is clicked 
  the hideForms and hideAllLists functions close all other open forms/lists */}

const handleListToggle = (event) => {
  let toggle = document.getElementById(event.target.value);

  if (toggle.className == "hidden-list") {
    hideAllLists();
    hideForms();
    toggle.className = "unhidden-list";
  } else {
    toggle.className = "hidden-list";
  }
};

{/* Closes all open lists */}

function hideAllLists() {
  let lists = document.querySelectorAll(".unhidden-list");
  console.log(lists);
  let listElementArray = [...lists];
  listElementArray.map((item) => {
    item.className = "hidden-list";
  });
}

export { hideAllLists, handleListToggle };
