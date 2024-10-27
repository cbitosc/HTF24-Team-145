// Chat.js

const messageArea = document.querySelector('.message-area');
const chatInput = document.querySelector('.chat-input');
const sendBtn = document.querySelector('.send-btn');

// Send message
sendBtn.addEventListener('click', () => {
    const messageText = chatInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.textContent = messageText;
        messageArea.appendChild(messageElement);
        chatInput.value = '';
        messageArea.scrollTop = messageArea.scrollHeight; // Scroll to the bottom
        // Mock receiving a response
        setTimeout(receiveMessage, 1000);
    }
});

// Receive message (mockup)
function receiveMessage() {
    const response = document.createElement('div');
    response.className = 'message received';
    response.textContent = 'Thanks for reaching out!';
    messageArea.appendChild(response);
    messageArea.scrollTop = messageArea.scrollHeight; // Scroll to the bottom
}
