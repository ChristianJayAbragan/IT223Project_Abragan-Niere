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