function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="Admin"&& password=="User")
{
    alert("Login Successful");
    return false;
}
else
{
    alert("Login Failed");
}

}