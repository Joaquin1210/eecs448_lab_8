function validate()
{
  var firstpas= document.getElementById('first').value;
  var secondpas= document.getElementById('second').value;
  if (firstpas.length < 8)
  {
    alert("Password must be 8 characters long");
  }
  else if (firstpas != secondpas)
  {
    alert("Passwords don't match");
  }
  else
  {
    alert("Password verified!");
  }
}
