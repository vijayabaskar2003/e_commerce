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