document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', goapp);      
});

function goapp()
{
  let nummer= document.getElementById("number").value ;
  nummer=nummer.toString();
nummer = nummer.replace(/\D/g,'');
nummer = nummer.replace(/^0+/, '');

const link="https://api.whatsapp.com/send?phone="+nummer;
chrome.tabs.create({url:link});

//  window.location = 'https://api.whatsapp.com/send?phone=' + nummer;
return false;}