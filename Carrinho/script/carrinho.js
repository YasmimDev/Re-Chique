const selectAllCheckbox = document.getElementById('selectAll');
const productCheckboxes = document.querySelectorAll('.product-checkbox');

selectAllCheckbox.addEventListener('change', function() {
  productCheckboxes.forEach(checkbox => {
    checkbox.checked = this.checked; 
  });
});

productCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    selectAllCheckbox.checked = productCheckboxes.every(checkbox => checkbox.checked);
  });
});

deleteButtons.forEach(button => {
 
});
