function validate_form() {
  $("#err_psd").hide();
  document.getElementById("err_usr").style.display="none";
  $("#err_em").hide();
  var pwd = document.forms["newform"]["psd"].value ;
  var mail = document.forms["newform"]["email"].value;
  var fn = document.forms["newform"]["fname"].value;
  var ln = document.forms["newform"]["lname"].value;
  var usr = document.forms["newform"]["usrid"].value;
  var pwd1 = document.forms["newform"]["psd1"].value;
  var atpos=mail.indexOf("@");
  var dotpos=mail.lastIndexOf(".");
  var age_val=$("#age").val();
  var gen_val=$("#gender").val();
  var add1_val=$("#addline1").val();
  var add2_val=$("#addline2").val();
  var add3_val=$("#addline3").val();
  var nation_val=$("nation").val();
  var tenth_val=$("#tenth").val();
  var plustwo_val=$("#plus_two").val();
  var degree_val=$("#degree").val();
  var y10_val=$("#y10").val();
  var y11_val=$("#y11").val();
  var y12_val=$("#y12").val();
  var y13_val=$("#y13").val();
  var y14_val=$("#y14").val();
  var y15_val=$("#y15").val();
  var y16_val=$("#y16").val();
  var i=localStorage.length.toString();
  var keyvalue = "userid"+i;
if (localStorage.length == 0) {
  var m= JSON.stringify(employees[0]);
  localStorage.setItem(keyvalue,m);
  i++;
  keyvalue="userid"+i;
    var n= JSON.stringify(employees[1]);
  localStorage.setItem(keyvalue,n);
}
  if (pwd.length < 6) {
      $("#err_psd").show();
    document.getElementById("err_psd").innerHTML="Password too short";
    newform.reset();
    return false;
  }
  else if (pwd != pwd1) {
    $("#err_psd").show();
    document.getElementById("err_psd").innerHTML="Password doesnot match";
    newform.reset();
    return false;
  }
  else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length){
      $("#err_em").show();
  document.getElementById("err_em").innerHTML="Invalid Email ID";
  newform.reset();
  return false;
  }

  var account = {"firstname":fn,"lastname":ln,"username":usr,"password":pwd,"email":mail,"age":age_val,"gender":gen_val,"addline1":add1_val,"addline2":add2_val,"addline3":add3_val,"nationality":nation_val,"tenth":tenth_val,"plus_two":plustwo_val,"degree":degree_val,"y10":y10_val,"y11":y11_val,"y12":y12_val,"y13":y13_val,"y14":y14_val,"y15":y15_val,"y16":y16_val};
  var i=localStorage.length.toString();
  var keyvalue = "userid"+i;
  for (var i = 0; i < localStorage.length.toString(); i++)
  {
  var check = localStorage.getItem("userid"+i);
  var details= JSON.parse(check);
  if(usr == details.username)
  {
    $("#err_usr").show();
    document.getElementById("err_usr").innerHTML="Username already exists";
    newform.reset();
    return false;
  }
}
localStorage.setItem(keyvalue, JSON.stringify(account));
  alert("Signup success.Login to continue");
  return true;

}

function log_val()
{
  $("#err_us").hide();
  $("#err_pd").hide();
  var userid=$("#user_id").val();
  var pass=$("#user_pd").val();

  for (var i = 0; i < localStorage.length; i++)
  {
  var uscheck = localStorage.getItem("userid"+i);
  var usdetails= JSON.parse(uscheck);
  if(userid == usdetails.username && pass == usdetails.password)
  {
    alert("Login Success");
    return true;
  }
  else if (userid == usdetails.username && pass != usdetails.password) {
    $("#err_pd").show();
    document.getElementById("err_pd").innerHTML="Password incorrect";
    loginform.reset();
    return false;
  }
}
$("#err_us").show();
    document.getElementById("err_us").innerHTML="Username incorrect";
    loginform.reset();
    return false;

}
