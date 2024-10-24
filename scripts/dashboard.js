document.addEventListener('DOMContentLoaded', (event) => {
   const userData = localStorage.getItem('user');
   const user = JSON.parse(userData);
   const userNameElement = document.getElementById('username');
   userNameElement.innerText = user.username;
})

const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', (e) => {
   localStorage.clear();
   window.location.href = '/index.html';
})