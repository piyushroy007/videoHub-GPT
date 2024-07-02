const checkValidData = (email, password, name, isSignInForm) => {
    const isEmailValid =
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email is not a valid email";

    if (!isPasswordValid) return "Password is not a valid password";

    if (!isSignInForm && (!name || name.trim() === ""))
        return "Name is required";

    return null;
};

export default checkValidData;
