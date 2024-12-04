import { hideForms } from "./FormFunctions";

const handleListToggle = (event) => {
  let toggle = document.getElementById(event.target.value);

  if (toggle.className === "hidden-list") {
    hideAllLists();
    hideForms();
    toggle.className = "unhidden-list";
  } else {
    toggle.className = "hidden-list";
  }
};

function hideAllLists() {
  let lists = document.querySelectorAll(".unhidden-list");
  console.log(lists);
  let listElementArray = [...lists];
  listElementArray.map((item) => {
    item.className = "hidden-list";
  });
}

export { hideAllLists, handleListToggle };
