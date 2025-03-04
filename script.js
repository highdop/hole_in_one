// وظيفة للتحقق من صحة النموذج
function validateForm(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    // الحصول على القيم من الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // التحقق من أن الحقول ليست فارغة
    if (name === '' || email === '' || message === '') {
        alert('يرجى ملء جميع الحقول.');
        return false;
    }

    // التحقق من صحة البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('يرجى إدخال بريد إلكتروني صالح.');
        return false;
    }

    // إذا كانت جميع التحقق ناجحة، يمكن إرسال النموذج
    alert('تم إرسال النموذج بنجاح!');
    document.querySelector('form').style.display = 'none'; // إخفاء النموذج
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'شكرًا لتواصلك معنا!';
    document.body.appendChild(confirmationMessage);
    return true;
}

// إضافة حدث عند تحميل الصفحة
window.onload = function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
};

// وظيفة لتغيير لون الخلفية عند الضغط على زر
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.transition = 'background-color 0.5s ease'; // إضافة تأثير انتقال
    document.body.style.backgroundColor = randomColor;
}

// إضافة زر لتغيير لون الخلفية
const changeColorButton = document.createElement('button');
changeColorButton.innerText = 'تغيير لون الخلفية';
changeColorButton.onclick = changeBackgroundColor;
document.body.appendChild(changeColorButton);

// وظيفة لإضافة تأثير بانورامي
function initPanorama() {
    const panoramaContainer = document.createElement('div');
    panoramaContainer.id = 'panorama-container';
    panoramaContainer.style.width = '100%';
    panoramaContainer.style.height = '400px';
    document.body.appendChild(panoramaContainer);

    const panorama = new PANOLENS.ImagePanorama('images/panoramic/panorama.jpg');
    const viewer = new PANOLENS.Viewer({
        container: panoramaContainer
    });
    viewer.add(panorama);
}

// إضافة حدث عند تحميل الصفحة
window.onload = function() {
    initPanorama();
};