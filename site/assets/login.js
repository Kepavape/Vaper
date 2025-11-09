
document.getElementById('go').addEventListener('click', () => {
  const val = document.getElementById('pw').value;
  if (val === 'vaperis123') {
    localStorage.setItem('access_granted', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Neteisingas slaptažodis!');
  }
});
    