const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTable');

let students = []; // Array to store student data

// Function to render the student table
function renderTable() {
  studentTableBody.innerHTML = ''; // Clear existing data

  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.contact}</td>
      <td>${student.address}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;
    studentTableBody.appendChild(row);
  });
}

// Function to handle form submission
studentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const className = document.getElementById('class').value;
  const address = document.getElementById('address').value;
  const contact = document.getElementById('contact').value;

  // Add new student to the array
  students.push({ name, class: className, address, contact });

  // Clear the form fields
  studentForm.reset();

  // Render updated table
  renderTable();
});

// Function to edit a student
function editStudent(index) {
  const student = students[index];
  document.getElementById('name').value = student.name;
  document.getElementById('class').value = student.class;
  document.getElementById('address').value = student.address;
  document.getElementById('contact').value = student.contact;

  // Remove the student and re-render the table after editing
  students.splice(index, 1);
  renderTable();
}

// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1); // Remove student from the array
  renderTable(); // Render updated table
}
