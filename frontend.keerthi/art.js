function showAlert(artPiece) {
    alert(`You clicked on ${artPiece}.`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    this.reset(); // Reset the form fields after submission
});
