function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();
  
  document.addEventListener("DOMContentLoaded", function () {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
  
    function openTab(tabIndex) {
      for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tabcontent[tabIndex].style.display = "block";
    }
  
    tablinks[0].addEventListener("click", function () {
      openTab(0);
    });
  
    tablinks[1].addEventListener("click", function () {
      openTab(1);
    });
  
    tablinks[2].addEventListener("click", function () {
      openTab(2);
    });
  
    tablinks[0].click();
  });
  