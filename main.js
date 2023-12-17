// Lấy các phần tử HTML cần sử dụng
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');


// Chuyển từ trang đăng nhập sang trang đăng ký và nhảy xuống form đăng ký
document.querySelector('a[href="#registration-form"]').addEventListener('click', function(event) {
  event.preventDefault();
  var registrationForm = document.getElementById('user-registration');
  var loginForm = document.getElementById('user-login');
  registrationForm.style.display = "block";
  loginForm.style.display = "none";
  registrationForm.scrollIntoView({ behavior: 'smooth' });
});

// Chuyển từ trang đăng ký sang trang đăng nhập và nhảy xuống form đăng nhập
document.querySelector('a[href="#user-login"]').addEventListener('click', function(event) {
  event.preventDefault();
  var registrationForm = document.getElementById('user-registration');
  var loginForm = document.getElementById('user-login');
  registrationForm.style.display = "none";
  loginForm.style.display = "block";
  loginForm.scrollIntoView({ behavior: 'smooth' });
});


// Chức năng đăng nhập
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Kiểm tra xem tài khoản có tồn tại trong localStorage không
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Đăng nhập thành công');
    // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
    window.location.href = "#about";
  } else {
    alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
  }
});

// Chức năng đăng ký
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

  const newUsername = document.getElementById('new-username').value;
  const email = document.getElementById('email').value;
  const newPassword = document.getElementById('new-password').value;

  // Kiểm tra xem tài khoản đã tồn tại trong localStorage chưa
  const storedUsername = localStorage.getItem('username');

  if (storedUsername === newUsername) {
    alert('Tài khoản đã tồn tại');
  } else {
    // Lưu thông tin đăng ký vào localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    alert('Đăng ký tài khoản thành công');
    // Thêm các hành động tiếp theo sau khi đăng ký thành công
  }
});


// Lưu thông tin của bảng theo dõi tiến trình
document.getElementById('progress-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var date = document.getElementById('date').value;
  var weight = document.getElementById('weight').value;
  // Perform saving logic here (not actually saving, just showing message)
  console.log('Date:', date, 'Weight:', weight);
  document.getElementById('success-message').style.display = "block";
  setTimeout(function(){ document.getElementById('success-message').style.display = "none"; }, 3000); // 3 seconds
});


// Chức năng tính toán calo
function calculateCalories() {
  const caloriesPer100g = document.getElementById('calories').value;
  const foodWeight = document.getElementById('quantity').value;
  const foodName = document.getElementById('food').value;

  // Kiểm tra xem liệu người dùng đã nhập đủ thông tin hay chưa
  if (caloriesPer100g && foodWeight) {
    const totalCalories = (caloriesPer100g / 100) * foodWeight;
    // Hiển thị tổng số calo
    alert('Tổng số calo của ' + foodName + ' là ' + totalCalories);
  } else {
    // Nếu thông tin không đủ, hiển thị thông báo lỗi
    alert('Vui lòng nhập đủ thông tin để tính toán calo');
  }
}


function submitPost() {
  var newPostContent = document.getElementById('new-post').value;

  // Tạo một phần tử mới để hiển thị bài viết trên trang
  var postElement = document.createElement('div');
  postElement.innerText = newPostContent;

  // Thêm bài viết vào phần tử hiển thị bài đăng
  var postList = document.getElementById('post-list');
  postList.appendChild(postElement);

  // Xóa nội dung trong textarea sau khi đăng bài
  document.getElementById('new-post').value = '';
}


// Tư Vấn Trực Tuyến
function submitQuestion() {
  var question = document.getElementById('question').value;
  var emailAddress = 'minhtranvan1904@gmail.com';
  var subject = 'Câu hỏi từ khách hàng';
  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + question;
  window.location.href = mailtoLink;
}


document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.querySelector('#newsletter-form input[type="email"]').value;
  var newsletterCheckbox = document.querySelector('input[name="newsletter"]');
  var ageConfirmationCheckbox = document.querySelector('input[name="age_confirmation"]');

  // Kiểm tra xem email và checkbox đã được điền đầy đủ chưa
  if (email && newsletterCheckbox.checked && ageConfirmationCheckbox.checked) {
    // Gửi thông tin đăng ký lên server (có thể sử dụng AJAX để gửi dữ liệu)

    // Hiển thị thông báo đăng ký thành công
    alert('Đăng ký nhận thông báo thành công!');
  } else {
    // Hiển thị thông báo lỗi nếu thiếu thông tin
    alert('Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.');
  }
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    
    // Toggle the 'active' state of the question and answer
    question.classList.toggle('active');
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
    
    // Close other answers when one is opened
    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
      if (otherAnswer !== answer) {
        otherAnswer.style.maxHeight = null;
        otherAnswer.previousElementSibling.classList.remove('active');
      }
    });
  });
});
