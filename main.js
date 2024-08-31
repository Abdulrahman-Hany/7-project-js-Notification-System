let notification = document.querySelector('.notifications');
let success = document.getElementById('sucsses');
let error = document.getElementById('error');
let warning = document.getElementById('wraning');
let info = document.getElementById('info');

function playNotificationSound() {
    let audio = new Audio('message notification sound.mp3');
    audio.play();
}

function createtoast (type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
                <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="contetn">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark"
                onclick= "(this.parentElement).remove()"></i>
            </div>`;
    notification.appendChild(newToast);
    newToast.timeout = setTimeout(
        () => newToast.remove(), 5000
    );
}

success.onclick = function() {
    playNotificationSound(); 
    let type = '';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Success';
    let text = 'This is a Success Notification';
    createtoast(type, icon, title, text);
};

error.onclick = function() {
    playNotificationSound(); 
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let text = 'This is an Error Notification';
    createtoast(type, icon, title, text);
};

warning.onclick = function() {
    playNotificationSound();
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Warning';
    let text = 'This is a Warning Notification';
    createtoast(type, icon, title, text);
};

info.onclick = function() {
    playNotificationSound(); 
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Info';
    let text = 'This is an Info Notification';
    createtoast(type, icon, title, text);
};
