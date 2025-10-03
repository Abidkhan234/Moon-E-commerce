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
    isAdmin: Yup.boolean()
});

const checkoutSchema = Yup.object({
    firstName: Yup.string()
        .required("First name is required")
        .min(3, "Minimum three characters"),
    lastName: Yup.string()
        .required("Last name is required")
        .min(3, "Minimum three characters"),
    company: Yup.string()
        .default(""),
    countryRegion: Yup.string()
        .required("Country & region is required"),
    streetAddress: Yup.string()
        .required("Address is required"),
    townCity: Yup.string()
        .required("Town & City is required"),
    state: Yup.string()
        .required("State is required"),
    zipCode: Yup.string()
        .default(""),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(/^03[0-9]{9}$/, "Phone number must be a valid Pakistani number"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    orderNotes: Yup.string().default(""),
})

export { loginSchema, signUpSchema, checkoutSchema }