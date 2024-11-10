function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*.,?{}|<>]).{8,}$/;

    // Validate name
    if (!values.name.trim()) {
        error.name = "Name is required";
    }

    // Validate email
    if (!values.email.trim()) {
        error.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    }

    // Validate password
    if (!values.password) {
        error.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters";
    }

    return error;
}

export default Validation;
