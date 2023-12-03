console.log("task-04");

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      var formData = {};
  
      for (var i = 0; i < loginForm.elements.length; i++) {
        var element = loginForm.elements[i];
  
        if (element.tagName === 'INPUT' && element.type !== 'submit') {
          formData[element.name] = element.value.trim();
  
          if (formData[element.name] === '') {
            alert('All form fields must be filled in');
            return;
          }
        }
      }
  
      console.log(formData);
  
      loginForm.reset();
    });
  });