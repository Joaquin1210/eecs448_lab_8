var value = 0;
var imgs = ["img_1.jpg","img_2.jpeg","img_3.jpeg","img_4.jpeg","img_5.jpeg"];

function next()
{
  var currentImg = document.getElementById('img');
  if (value <= 3)
  {
    value = value+1;
    currentImg.src = imgs[value];
  }
  else
  {
    value = 0;
    currentImg.src = imgs[value];
  }
}

function prev()
{
  var currentImg = document.getElementById('img');
  if (value > 0)
  {
    value = value-1;
    currentImg.src = imgs[value];
  }
  else
  {
    value = 4;
    currentImg.src = imgs[value];
  }
}