// Animate Smooth Scrool
// Very common STUFF
// scroll slowly to an element on the same page
// remember this code bro

let arr = ['view-about', 'view-skills', 'view-work', 'view-contact'];

for (i of arr) {

	$('#' + i).on('click', function(){
		console.log('clicked');
	  const images = $('#projects').position().top;

	// $('#view-work').on('click', function(){
	// 	console.log('clicked');
	//   const images = $('#projects').position().top;

	$('html, body').animate({
	  scrollTop: images
	}, 900);

	})
}


document.querySelector('#aboutMe').scrollIntoView({ 
  behavior: 'smooth' 
});
