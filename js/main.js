document.getElementById('searchInput').addEventListener('input', searchUsers);

let allUsers = [];

// Función para obtener todos los usuarios de la API
function fetchAllUsers() {
    fetch('https://6674179975872d0e0a950e53.mockapi.io/user')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verificar los datos obtenidos de la API
            allUsers = data;
            displayUsers(allUsers);
        })
        .catch(error => console.error('Error:', error));
}

// Función para mostrar usuarios en el HTML
function displayUsers(users) {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <div class="persona">
                <img src="${user.avatar}" alt="${user.name_full}">
            </div>
            <div class="text">
                <h2>${user.name_full}</h2>
                <small>${user.description}</small>
            </div>
        `;
        output.appendChild(userDiv);
    });
}

// Función para buscar usuarios en tiempo real
function searchUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = allUsers.filter(user =>
        user.name_full.toLowerCase().includes(searchTerm) || user.description.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
}

// Obtener todos los usuarios cuando la página cargue
fetchAllUsers();

function fetchAllUsers() {
    fetch('https://6674179975872d0e0a950e53.mockapi.io/user')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verificar los datos obtenidos de la API
            allUsers = data;
            displayUsers(allUsers);
        })
        .catch(error => console.error('Error:', error));
}

