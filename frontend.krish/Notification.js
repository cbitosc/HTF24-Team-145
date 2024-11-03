// Notifications.js

const notificationIcon = document.querySelector('.notification-icon');
const notificationSidebar = document.querySelector('.notification-sidebar');
let notifications = [
  'New bid placed on your artwork!',
  'Workshop booking confirmed!',
  'New message from a buyer.'
];

// Toggle sidebar
notificationIcon.addEventListener('click', () => {
  notificationSidebar.classList.toggle('open');
  displayNotifications();
});

function displayNotifications() {
  const notificationContainer = notificationSidebar.querySelector('.notification-container');
  notificationContainer.innerHTML = '';
  notifications.forEach(notification => {
    const notificationItem = document.createElement('div');
    notificationItem.className = 'notification-item';
    notificationItem.textContent = notification;
    notificationContainer.appendChild(notificationItem);
  });
}