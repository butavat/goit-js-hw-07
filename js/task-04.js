console.log("task-04");

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {};

        document.querySelectorAll('.login-form input:not([type="submit"])').forEach((element) => {
            formData[element.name] = element.value.trim();

            if (formData[element.name] === '') {
                alert('All form fields must be filled in');
                return;
            }
        });

        console.log(formData);

        loginForm.reset();
    });
});