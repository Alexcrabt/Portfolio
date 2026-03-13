
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
//Idea and code from Mahir Pirmohammed, https://www.mahirp.ml
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
  
//Filter Website
//Had idea to use project filter for filtering and displaying different parts of my website!
function filterSelectionNavbar(elem) {
  // On mobile let the page scroll naturally — section switching is desktop-only
  if (window.innerWidth <= 768) return;

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

//Splider functions for graph section