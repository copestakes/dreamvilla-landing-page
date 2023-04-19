// function checkAll() {
//   const input = document.querySelector('#check');
//   input.checked = false;
// }
// window.onload = function () {
//   window.addEventListener('resize', checkAll, false);
// };

// window.addEventListener('click', function () {
//   var checkbox = document.querySelector('#check');
//   checkbox.checked = !checkbox.checked;
// });

//new navigation
const input = document.querySelector('#check');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll('a');

function checkAll() {
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
  nav.addEventListener('click', checkAll, false);
};

anchors.forEach((e) => {
  e.addEventListener('click', checkAll, false);
});

// const checkbox = document.querySelector('#check');
// // add a click event listener to the window object
// window.addEventListener('click', function (event) {
//   // if the clicked element is not the checkbox
//   if (event.target !== checkbox) {
//     // uncheck the checkbox
//     checkbox.checked = false;
//   }
// });
