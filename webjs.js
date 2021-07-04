
//CANVAS IMAGE
const canvas = document.getElementById("canvas")
const ctx= canvas.getContext("2d")
const img= new Image()
img.src= "./Coffee_Space.jpg";
img.onload = () => {ctx.drawImage(img, 0, 0, img.width, img.height
                                    , 0, 0, canvas.width, canvas.height);};
                          
//Filter Website
function filterSelectionNavbar(elem) {
  var sect = document.getElementsByClassName("sect");
  var btn = document.getElementsByClassName("nav-btn");


  if (elem == "intro") 
    elem = "sect";
    

  for (i = 0; i < btn.length; i++) {
    if (btn[i].classList.contains(elem)) {
      btn[i].classList.add("");
    } else {
      btn[i].classList.remove("active");
    }
  }
  
  for (i = 0; i < sect.length; i++) {
    if (!sect[i].classList.contains(elem)) {
      sect[i].classList.add("d-none");
    } else {
      sect[i].classList.remove("d-none");
    }
  }
}
//About Me Hobby Sidebar
function openHob() {
  const sidebar = document.getElementById('sidebar-r');
  sidebar.classList.toggle('open');
}
function openSkll() {
  const sidebar = document.getElementById('sidebar-l');
  sidebar.classList.toggle('open');
}
//Filter Projects
function filterSelection(elem) {
    var card = document.getElementsByClassName("port");
    var btn = document.getElementsByClassName("btn");
  
    if (elem == "all") 
      elem = "port";

    for (i = 0; i < btn.length; i++) {
      if (btn[i].classList.contains(elem)) {
        btn[i].classList.add("");
      } else {
        btn[i].classList.remove("active");
      }
    }
    
    for (i = 0; i < card.length; i++) {
      if (!card[i].classList.contains(elem)) {
        card[i].classList.add("d-none");
      } else {
        card[i].classList.remove("d-none");
      }
    }
  }
  