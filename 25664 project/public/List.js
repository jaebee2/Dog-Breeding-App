getData();

async function getData() {
    try {
        const response = await fetch('/dogs');
        const data = await response.json();

        for (const dog of data) {
            const root = document.createElement('div');
            const name = document.createElement('h2');
            const breed = document.createElement('p');
            const age = document.createElement('p');
            const sex = document.createElement('p');
            const image = document.createElement('img');

            name.textContent = `Name: ${dog.name}`;
            breed.textContent = `Breed: ${dog.breed}`;
            age.textContent = `Age: ${dog.age} years`;
            sex.textContent = `Sex: ${dog.sex}`;
            image.src = `uploads/${dog.imagePath}`; // Assuming images are stored in the 'uploads' folder

            root.append(name, breed, age, sex, image);
            document.body.append(root);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
