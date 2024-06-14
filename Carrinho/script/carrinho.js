const selectAllCheckbox = document.getElementById('selectAll');
const productCheckboxes = document.querySelectorAll('.product-checkbox');

selectAllCheckbox.addEventListener('change', function() {
  productCheckboxes.forEach(checkbox => {
    checkbox.checked = this.checked; // Set the checked state of product checkboxes to match the "Select All" checkbox
  });
});

productCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Update the "Select All" checkbox state based on the individual product checkboxes
    selectAllCheckbox.checked = productCheckboxes.every(checkbox => checkbox.checked);
  });
});

deleteButtons.forEach(button => {
  // ... (same delete button functionality as before)
});
