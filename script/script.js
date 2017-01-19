$(document).ready(function(){
var count = 0;
document.addEventListener('keydown', function(event){
  switch(event.keyCode){
    case 38:
      if(count==0||count==1)count++;
      else count=0;
      break;
    case 40:
      if(count==2||count==3)count++;
      else count=0;
      break;
    case 37:
      if(count==4||count==6)count++;
      else count=0;
      break;
    case 39:
      if(count==5||count==7)count++;
      else count=0;
      break;
    case 66:
      if(count==8)count++;
      else count=0;
      break;
    case 65:
      if(count==9)count++;
      else count = 0;
      break;
    case 13:
      if(count==10){
        $("body").css("font-family", "Times New Roman");
        $("body").css("background", 'url("../img/logo.png")');
        $("body").css("background-size", "50% 50%");
        $(".navbar").css("background", 'url("../img/logo.png")');
        $(".navbar").css("background-size", "50% 50%");
        $("#logo").css("background-color", "white");
        $("#logo").css("background", 'url9"../img/logo.png")');
        $("#logo").css("background-size", "25% 25%");
        $("#logo").css("width", "20%");
        $("#logo").css("padding", "0 0 0 0");
        $("*").css("color", "black");
      }
      else count = 0;
      break;
    default:
      count = 0;
  }
});

var links=[".genlink", ".robotlink", ".visionlink", ".weblink", ".telelink", ".homelink"];
var content=[".general", ".robot", ".vision", ".website", ".telemetry", ".home"];
var isDisplayed = [false, false, false, false, false, true]; //So we know which is displayed

var changeLink = function(toActive, body){
  for(var i=0;i<links.length;i++){
    $(links[i]).removeClass("active");
  };
  $(toActive).addClass('active');
  for(var i=0;i<content.length;i++){
    if(isDisplayed[i]){
      $(content[i]).slideUp(500, function(){ //Takes 500ms to do the fancy animation
        isDisplayed[i]=false;
        $(body).slideDown(500); //Before starting the next (so they don't overlap)
        isDisplayed[content.indexOf(body)] = true; //So that the array knows which is active
      });
      break;
    }
  }
}

$(".homelink").click(function(){changeLink(".homelink", ".home");});
$(".genlink").click(function(){changeLink(".genlink", ".general");});
$(".robotlink").click(function(){changeLink(".robotlink", ".robot");});
$(".visionlink").click(function(){changeLink(".visionlink", ".vision");});
$(".weblink").click(function(){changeLink(".weblink", ".website");});
$(".telelink").click(function(){changeLink(".telelink", ".telemetry");});
});
