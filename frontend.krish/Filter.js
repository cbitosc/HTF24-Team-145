// Filter.js

const filters = document.querySelectorAll('.filter-option input');
const items = document.querySelectorAll('.item'); // Assuming items have a class 'item'

filters.forEach(filter => {
  filter.addEventListener('change', () => {
    const activeFilters = Array.from(filters)
      .filter(input => input.checked)
      .map(input => input.value);

    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category'); // Assuming each item has a 'data-category' attribute
      item.style.display = activeFilters.includes(itemCategory) ? 'block' : 'none';
    });
  });
});
