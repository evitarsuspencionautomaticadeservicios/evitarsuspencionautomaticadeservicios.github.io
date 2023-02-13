function checkFilled() {
    var fld=document.getElementById('logn').value;
 var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
 if(fld.length < 1){
      document.getElementById('logn').style.borderColor = "rgb(232, 17, 35)";
      document.getElementById('efire').style.display = "block";
      document.getElementById('efired').style.display = "none";
      return false;
  }else{
      document.getElementById('logn').style.borderColor = "blue";
  }
 
     if (fld.match(emailExp)) 
    { 
 document.getElementById('filth').style.display = "none";
 document.getElementById('porn').style.display = "block";
 document.getElementById('logn').style.borderColor = "blue";
       } else {
    document.getElementById('logn').style.borderColor = "rgb(232, 17, 35)";
      document.getElementById('efire').style.display = "block";
      document.getElementById('efired').style.display = "none";
      return false;
  }
}

function checkPassy() { 
  var fn=document.getElementById('passd').value;	
if(fn.length < 5){
      document.getElementById('passd').style.borderColor = "rgb(232, 17, 35)";
      document.getElementById('efired').style.display = "block";
      return false;
  }else{
    document.getElementById('passd').style.borderColor = "blue";
  }
}