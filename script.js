// كود JavaScript بسيط للتحقق من صحة النموذج
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (username && email && password) {
            // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
            alert('تم إنشاء الحساب بنجاح!');
            form.reset();
        } else {
            alert('يرجى ملء جميع الحقول');
        }
    });
});// localStorage.setItem("name","mohamed");
// console.log(localStorage.setItem("name"));

