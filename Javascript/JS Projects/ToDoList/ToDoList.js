const UserNameTextField = document.getElementById('username');
const AddUserBtn = document.getElementById('addUser');
const recorddata = document.getElementById('records');

let userArray = []; // Data storage array
let edit_id = null; // Track which user is being edited

// Load existing data from localStorage
const objstr = localStorage.getItem('username');
if (objstr !== null) {
    userArray = JSON.parse(objstr);
    displayData(); // Display data on page load
}

// Add or Edit User
AddUserBtn.onclick = () => {
    const name = UserNameTextField.value.trim(); // Trim whitespace

    if (name === "") {
        alert("Please enter a username.");
        return;
    }

    if (edit_id !== null) {
        // Edit existing user
        userArray[edit_id] = { name };
        edit_id = null; // Reset edit_id
    } else {
        // Add new user
        userArray.push({ name });
    }

    UserNameTextField.value = ""; // Clear input field
    saveData(); // Save to localStorage
};

// Save data to localStorage
function saveData() {
    const strdata = JSON.stringify(userArray);
    localStorage.setItem('username', strdata);
    displayData(); // Refresh the display
}

// Display user data in the table
function displayData() {
    let data = "";
    userArray.forEach((item, index) => {
        data += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>
                <button onclick="editInfo(${index})" style="background:cyan">Edit</button>
                <button onclick="deleteInfo(${index})" style="background:red;">Delete</button>
            </td>
        </tr>`;
    });
    recorddata.innerHTML = data; // Insert rows into the table
}

// Delete user
function deleteInfo(id) {
    userArray.splice(id, 1); // Remove item from array
    saveData(); // Save changes
}

// Edit user
function editInfo(id) {
    edit_id = id;
    UserNameTextField.value = userArray[id].name;
}
