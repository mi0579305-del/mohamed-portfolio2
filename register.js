

// كود التحقق من صحة نموذج التسجيل
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const terms = document.getElementById('terms');
    
    // تعطيل الإرسال الافتراضي للنموذج
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
            alert('تم إنشاء الحساب بنجاح! سيتم توجيهك إلى صفحة التسوق.');
            form.reset();
            // إعادة توجيه المستخدم بعد التسجيل
            // window.location.href = 'index.html';
        }
    });
    
    // التحقق من صحة النموذج
    function validateForm() {
        let isValid = true;
        
        // مسح رسائل الخطأ السابقة
        clearErrors();
        
        // التحقق من الاسم
        const fullname = document.getElementById('fullname').value.trim();
        if (fullname === '') {
            showError('name-error', 'الاسم الكامل مطلوب');
            isValid = false;
        }
        
        // التحقق من البريد الإلكتروني
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('email-error', 'البريد الإلكتروني مطلوب');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email-error', 'البريد الإلكتروني غير صالح');
            isValid = false;
        }
        
        // التحقق من كلمة المرور
        if (password.value.length < 6) {
            showError('password-error', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            isValid = false;
        }
        
        // التحقق من تطابق كلمة المرور
        if (password.value !== confirmPassword.value) {
            showError('confirm-error', 'كلمات المرور غير متطابقة');
            isValid = false;
        }
        
        // التحقق من الموافقة على الشروط
        if (!terms.checked) {
            showError('terms-error', 'يجب الموافقة على الشروط والأحكام');
            isValid = false;
        }
        
        return isValid;
    }
    
    // التحقق من صحة البريد الإلكتروني
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // عرض رسالة الخطأ
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
    
    // مسح جميع رسائل الخطأ
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
    
    // التحقق من كلمة المرور أثناء الكتابة
    confirmPassword.addEventListener('input', function() {
        if (password.value !== confirmPassword.value) {
            showError('confirm-error', 'كلمات المرور غير متطابقة');
        } else {
            showError('confirm-error', '');
        }
    });
});