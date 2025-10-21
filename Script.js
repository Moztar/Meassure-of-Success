function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('message');

  const usernameBenar = 'admin';
  const passwordBenar = '12345';

  if (user === usernameBenar && pass === passwordBenar) {
    msg.style.color = 'green';
    msg.textContent = 'Login berhasil!';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Email/No HP atau password salah!';
  }
}