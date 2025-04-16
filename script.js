// Randomly toggle rug alert every 10 seconds
setInterval(() => {
    const alert = document.getElementById('rug-alert');
    alert.textContent = (Math.random() > 0.5) ? 'RUG ALERT: ON' : 'RUG ALERT: OFF';
}, 10000);
