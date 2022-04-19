
function change()
{
    var red = document.getElementById("redval").value;
    var green = document.getElementById("greenval").value;
    var blue = document.getElementById("blueval").value;
    var width = document.getElementById("borderW").value;
    var redba = document.getElementById("redvalBack").value;
    var greenba = document.getElementById("greenvalBack").value;
    var blueba = document.getElementById("bluevalBack").value;

    var paragraph = document.getElementById("dummy");

    paragraph.style.borderBlockColor = "rgb("+red+","+green+","+blue+")";
    paragraph.style.borderBlockStyle = "solid";
    paragraph.style.backgroundColor = "rgb("+redba+","+greenba+","+blueba+")";
    paragraph.style.borderWidth = width;

}