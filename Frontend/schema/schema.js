import * as Yup from 'yup'

const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required")
});

const signUpSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required")
        .min(7, "Password must be at least 7 characters")
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
        .matches(/^(?!\s*$).+/, "Password cannot be empty or spaces only"),

    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password")], "Both passwords must match"),

    userName: Yup.string()
        .trim()
        .required("User name is required")
        .min(3, "Minimum three characters")
        .max(16, "Maximum 16 characters")
        .matches(/^(?!\s*$).+/, "User name cannot be empty or spaces only"),
});

export { loginSchema, signUpSchema }