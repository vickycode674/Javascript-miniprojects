// script.js
function toggleConcept(id) {
  const row = document.getElementById(id);
  const isVisible = row.style.display === 'table-row';

  // Collapse all others (optional if you want only one open at a time)
  document.querySelectorAll('.concept-detail').forEach(r => r.style.display = 'none');

  if (!isVisible) {
    row.style.display = 'table-row';
  } else {
    row.style.display = 'none';
  }
}
