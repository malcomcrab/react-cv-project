
Preface:

    I have repeated myself a bunch so its a very cluttered app atm. 
    I've tried to make it as readable as possible and at the bottom here I've listed the apps that are
    relevant to the bug. 

What should happen:

    -When the education form is submitted the data is added to an array and stored in state.
    
    -When the education drop down menu is clicked in the browser it displays each entry as a list, each entry showing the title and edit/delete buttons.

    -When you click the edit button a form pops up with the corresponding data in the input fields.
    
    -On submission the orginal formData is filtered out and the new data inserted into the array and saved to state.
    
    -Update displays, lists etc...

How I approached it:

    - I have built it so that when an edit button is clicked it filters out the corresponding formData from the array in state (using a unique key assigned on submission) and copies/stores that in a new seperate state (editData).

    - The idea was that when each edit button is pressed they overwrite a new data object in editData state and this causes the edit form component to rerender with the new data in the input fields.
    -It does not do that.

Relevant Components:

    -Parent and State => App.jsx
    
    -Where the Edit button is triggered from => EducationEditList.jsx
    
    -The form that should display the formData for editing => EducationEditor.jsx.

Bugs:

    1: It will only update the fields one time. The first time an edit button is clicked.
    2: If you open up dev tools and look at the elements, when you click edit on two different list items 
    the data updates for the edit form element it just never displays those changes.