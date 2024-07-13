document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://130.162.195.228/mhs714220006/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            // Tambahkan log untuk melihat status dan teks respons
            console.log('Status:', response.status);
            console.log('Status Text:', response.statusText);
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            alert('Login berhasil');
            window.location.href = "./product.html";
        } else {
            alert('Login gagal');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan: ' + error.message);
    });
});
