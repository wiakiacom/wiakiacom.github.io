function toggleMenu(){collapse.classList.toggle("collapse"),collapse.classList.toggle("in")}function closeMenus(){for(var o=0;o<dropdowns.length;o++)dropdowns[o].getElementsByClassName("dropdown-toggle")[0].classList.remove("dropdown-open"),dropdowns[o].classList.remove("open")}function closeMenusOnResize(){document.body.clientWidth>=768&&(closeMenus(),collapse.classList.add("collapse"),collapse.classList.remove("in"))}for(var toggle=document.getElementsByClassName("navbar-toggle")[0],collapse=document.getElementsByClassName("navbar-collapse")[0],dropdowns=document.getElementsByClassName("dropdown"),i=0;i<dropdowns.length;i++)dropdowns[i].addEventListener("click",function(){if(document.body.clientWidth<768){var o=this.classList.contains("open");closeMenus(),o||(this.getElementsByClassName("dropdown-toggle")[0].classList.toggle("dropdown-open"),this.classList.toggle("open"))}});window.addEventListener("resize",closeMenusOnResize,!1),toggle.addEventListener("click",toggleMenu,!1);var reformalOptions={project_id:914098,project_host:"wiakia.reformal.ru",tab_orientation:"right",tab_indent:"50%",tab_bg_color:"#5b7fa6",tab_border_color:"#FFFFFF",tab_image_url:"//wiakia.com/img/tab.png",tab_border_width:2};!function(){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"==document.location.protocol?"https://":"http://")+"wiakia.com/js/reformal.js",document.getElementsByTagName("head")[0].appendChild(o)}();var host="wiakia.com";host==window.location.host&&"https:"!=window.location.protocol&&(window.location.protocol="https");