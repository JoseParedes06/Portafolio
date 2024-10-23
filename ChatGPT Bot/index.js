const chatLog = document.getElementById('chat-Log');
    userInput = document.getElementById('user-Input');
    sendButton = document.getElementById('send-Button');
    buttonIcon = document.getElementById('button-icon');
    info = document.getElementById('.info');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    // if message = no se hace nada
    if (message === '') {
        return;
    }
    // if message = developer - se enseña el mensaje
    else if (message === 'developer') {
        userInput.value = '';
        appendMessage('user', message);
        setTimeout(() => {
            appendMessage('bot', 'Code by Jose Paredes');
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pause');
        }, 2000);
        return;
    }

    appendMessage('user', message);
    userInput.value = '';

    };


    fetch('https://chatgpt53.p.rapidapi.com/', options).then((response) => response.json()).then((response) => {
        appendMessage('bot', response.choices[0].message.content);

        buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
        buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
    }).catch((err) => {
        if (err.name === 'TypeError') {
            appendMessage('bot', 'Error : Check Your Api Key!');
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
        }
    });

    function appendMessage(sender, message) {
        info.style.display = 'none';
        buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');
        buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse');

        const messageElement = document.createElement('div');
        const iconElement = document.createElement('div');
        const chatElement = document.createElement('div');
        const icon = document.createElement('i');

        chatElement.classList.add("chat-box");
        iconElement.classList.add("Icon");
        messageElement.classList.add(sender);
        messageElement.innerText = message;

        if (sender === 'user') {
            icon.classList.add('fa-regular', 'fa-user');
            iconElement.setAttribute('id', 'bot-icon');
        }

        iconElement.appendChild(icon);
        chatElement.appendChild(iconElement);
        chatElement.appendChild(messageElement);
        chatLog.appendChild(chatElement);
        chatLog.scrollTo = chatLog.scrollHeight;
    }
