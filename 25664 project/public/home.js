// Add event listeners to handle navigation
document.addEventListener('DOMContentLoaded', () => {
    const formLink = document.getElementById('formLink');
    const recordsLink = document.getElementById('recordsLink');

    formLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/Dogform.html';
    });

    recordsLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/success.html';
    });
});
