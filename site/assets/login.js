
document.getElementById('go').addEventListener('click',()=>{
 if(document.getElementById('pw').value==='vaperis123'){localStorage.setItem('access_granted','true');location.href='index.html';}
 else alert('Neteisingas slaptažodis!')
});