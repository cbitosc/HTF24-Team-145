// SearchBar.js

document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.toLowerCase();
    const items = document.querySelectorAll('.item'); // Assuming items have a class 'item'
  
    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });