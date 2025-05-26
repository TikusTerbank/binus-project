const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');

openSidebar.addEventListener('click', () => {
  sidebar.classList.add('show');
  overlay.classList.add('show');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
});

const form = document.querySelector('.form-main');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthDate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById('terms').checked;
    const privacy = document.getElementById('privacy').checked;

    let errors = [];


    if (!fullName) {
      errors.push("Full Name is required.");
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.push("Email Address is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Please enter a valid Email Address.");
    }


    if (!birthDate) {
      errors.push("Birth Date is required.");
    }


    if (!gender) {
      errors.push("Please select your Gender.");
    }


    if (!terms) {
      errors.push("You must agree to the Terms and Conditions.");
    }

    if (!privacy) {
      errors.push("You must accept the Privacy Policy.");
    }


    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Form submitted successfully!");
      form.submit();
    }
  });