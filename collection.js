// script link head la kudutha 1 line code declare panna tha work aagum 
// body tag la use panna 1 line code theva illa
document.addEventListener('DOMContentLoaded', function () {
      var productContainer = document.getElementById("products");
      var search = document.getElementById("search");
      var productlist = productContainer.querySelectorAll("div");


//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//search ku addEventListener() method  search button la keyup aachuna function call aagum

      search.addEventListener("keyup", function () {
            var enteredValue = event.target.value.toUpperCase();

            for (count = 0; count < productlist.length; count = count + 1) {
                  var productname = productlist[count].querySelector("p").textContent;

                  if (productname.toUpperCase().indexOf(enteredValue) < 0) {
                        productlist[count].style.display = "none";
                  } 
                  else {
                        productlist[count].style.display = "block";
                  }
            }
      });

});


var siden;
document.addEventListener('DOMContentLoaded', function () {
      siden = document.querySelector(".side-bar");
      // siden.style.display = "none";
});
//intha function na menu bar icon la onclick mulkayama kuduthurukkom
function showSidebar() {
      // siden.style.display = "block";
// click panna left 0 style apply aagi display pannum
      siden.style.left="0"
}
// inthsa function na x icon la onclick mulayama kuduthurukkom 
function closeSidebar() {
      // siden.style.display = "none";
//click panna left-60% apply aagi display aanathu hide aagum
      siden.style.left="-60%"
}