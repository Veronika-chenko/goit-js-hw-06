// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;
//     const mail = formElements.email.value;
//     const password = formElements.password.value;

//     const alertMessage = 'All fields must be filled in.';

    // const formData = {
    //     mail, password,
    // };

//     if (mail === '' || password === '') {
//         alert(alertMessage);
//     } else {
//         console.log(formData);
//     }
// }

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    const objOfFormValues = {
        email: email.value,
        password: password.value,
    };

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled in.');
    } else {
        // console.log(`Email: ${email.value}, Password: ${password.value}`);
        console.log(objOfFormValues);
        event.currentTarget.reset();
    }
}

