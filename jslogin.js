function validate_form() {
  document.getElementById("err_psd").style.display="none";
  document.getElementById("err_usr").style.display="none";
  document.getElementById("err_em").style.display="none";

  var pwd = document.forms["newform"]["psd"].value ;
  var mail = document.forms["newform"]["email"].value;
  var fn = document.forms["newform"]["fname"].value;
  var ln = document.forms["newform"]["lname"].value;
  var usr = document.forms["newform"]["usrid"].value;
  var pwd1 = document.forms["newform"]["psd1"].value;
  var atpos=mail.indexOf("@");
  var dotpos=mail.lastIndexOf(".");
  if (pwd.length < 6) {
    document.getElementById("err_psd").style.display="block";
    document.getElementById("err_psd").innerHTML="Password too short";
    newform.reset();
    return false;
  }
  else if (pwd != pwd1) {
    document.getElementById("err_psd").style.display="block";
    document.getElementById("err_psd").innerHTML="Password doesnot match";
    newform.reset();
    return false;
  }
  else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length){
    document.getElementById("err_em").style.display="block";
  document.getElementById("err_em").innerHTML="Invalid Email ID";
  newform.reset();
  return false;
  }
  var i=localStorage.length.toString();
  var keyvalue = "userid"+i;
  var account = new Array;
  account.push(fn);
  account.push(ln);
  account.push(usr);
  account.push(pwd);
  account.push(mail);
  for (var i = 0; i < localStorage.length; i++) {
  var check = localStorage.getItem("userid"+i);
  var details= JSON.parse(check);
  if(usr == details[2])
  {
    document.getElementById("err_usr").style.display="block";
    document.getElementById("err_usr").innerHTML="Username already exists";
    newform.reset();
    return false;
  }
}
localStorage.setItem(keyvalue, JSON.stringify(account));
  alert("Signup success.Login to continue");
  return true;

}

function logval() {
  document.getElementById("err_pd").style.display="none";
  document.getElementById("err_us").style.display="none";
  var userid = document.forms["loginform"]["usid"].value;
  var pass = document.forms["loginform"]["pd"].value;
  for (var i = 0; i < localStorage.length; i++)
  {
  var uscheck = localStorage.getItem("userid"+i);
  var usdetails= JSON.parse(uscheck);
  if(userid == usdetails[2] && pass == usdetails[3])
  {
    alert("Login Success");
    return true;
  }
  else if (userid == usdetails[2] && pass != usdetails[3]) {
    document.getElementById("err_pd").style.display="block";
    document.getElementById("err_pd").innerHTML="Password incorrect";
    loginform.reset();
    return false;
  }
}
document.getElementById("err_us").style.display="block";
    document.getElementById("err_us").innerHTML="Username incorrect";
    loginform.reset();
    return false;

}
