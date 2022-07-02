document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', goapp);      
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('ieee').addEventListener('click', ieee);      
});

function goapp()
{
  let nummer= document.getElementById("number").value ;
  nummer=nummer.toString();
 
  let code= document.getElementById("code").value ;
  code=code.toString();

const link="https://api.whatsapp.com/send?phone="+code+nummer;
chrome.tabs.create({url:link});

//  window.location = 'https://api.whatsapp.com/send?phone=' + nummer;
return false;}
function ieee(){
  const link="https://www.instagram.com/ieeemsit/?hl=en"
  chrome.tabs.create({url:link});
}