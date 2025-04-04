const responses = [
    "I'm here to help!",
    "That's interesting!",
    "Could you tell me more?",
    "Let's talk about it.",
    "I'm not sure. Want to use voice?"
];

function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");
    document.getElementById("hello-user").style.display = "none";

    let userMessage = `<div class="user-message"><strong>You:</strong> ${message}</div>`;
    chatBox.insertAdjacentHTML('beforeend', userMessage);

    setTimeout(() => {
        let botReply = `<div class="bot-message"><strong>Bot:</strong> ${responses[Math.floor(Math.random() * responses.length)]}</div>`;
        chatBox.insertAdjacentHTML('beforeend', botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

function startVoiceInput() {
    alert("Voice input coming soon!");
}

document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
