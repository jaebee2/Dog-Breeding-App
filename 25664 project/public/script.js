const dogForm = document.getElementById('dogForm');

dogForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(dogForm);

    try {
        const response = await fetch('/dogs', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            window.location.href = '/success.html';
        } else {
            console.error('Error saving dog information.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
