// Favorites.js

const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        const action = icon.classList.contains('active') ? 'Added to favorites' : 'Removed from favorites';
        console.log(action);
    });
});
