var btnIN = document.querySelector('#btn-opt-in');
btnIN.addEventListener('click', function(event) {
  event.preventDefault();
  document.cookie = "nf_ab=0.9; expires=Thu, 01 Jan 2019 00:00:00 GMT";
  console.log(document.cookie);
  // window.location.reload(true);
}, false);


var btnOUT = document.querySelector('#btn-opt-out');
btnOUT.addEventListener('click', function(event) {
  event.preventDefault();
  document.cookie = "nf_ab=0.1; expires=Thu, 01 Jan 2019 00:00:00 GMT";
  console.log(document.cookie);
  // window.location.reload(true);
}, false);
