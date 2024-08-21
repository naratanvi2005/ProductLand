document.getElementById('learn-more-btn').addEventListener('click', function() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});
