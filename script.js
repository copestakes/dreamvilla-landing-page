function checkAll() {
  const input = document.querySelector('#check');
  input.checked = false;
}
window.onload = function () {
  window.addEventListener('resize', checkAll, false);
};

// const checkbox = document.querySelector('#check');
// // add a click event listener to the window object
// window.addEventListener('click', function (event) {
//   // if the clicked element is not the checkbox
//   if (event.target !== checkbox) {
//     // uncheck the checkbox
//     checkbox.checked = false;
//   }
// });
