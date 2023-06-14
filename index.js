//slideshow
var images = document.querySelectorAll('.fade');
var index = 0;

function showImage() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  index = (index + 1) % images.length;
  images[index].style.display = 'block';
}

setInterval(showImage, 3000);



//colors
const colorLinks = document.querySelectorAll('.colors a');

colorLinks.forEach(link => {
  link.addEventListener('click', () => {

    if (link.classList.contains('active')) {

      link.classList.remove('active');
    } else {

      colorLinks.forEach(link => link.classList.remove('active'));

      link.classList.add('active');
    }
  });
});


//menu icon
function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


// JavaScript code for form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Fetch form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate form fields (you can add your own validation logic here)
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Process form data (you can send the data to a server-side script using AJAX or any other method)
  // For demonstration, we'll just log the values to the console
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // Clear form fields after submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});