import { Form, Formik } from "formik";
import heroLogo from "../../../../public/assets/Icons/hero-section-logo.svg";
import EmailInput from "../../ui/forms/inputs/EmailInput";
import PasswordInput from "../../ui/forms/inputs/PasswordInput";
import Input from "../../ui/forms/inputs/Input";
import { loginSchema, signUpSchema } from "../../../../schema/schema";
import { useState } from "react";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4 py-10">
      <div className=" w-full max-w-[1000px] md:h-[500px] h-[700px] overflow-hidden relative rounded-md shadow-lg">
        <div className="relative w-full h-full">
          {/* LEFT HALF */}
          <>
            <div
              className={`absolute ${
                isLoginForm
                  ? "md:translate-x-0 md:translate-y-0 translate-y-0"
                  : "md:translate-x-[-100%] md:translate-y-0 translate-y-[100%]"
              } bottom-0 md:left-0 md:w-[55%] w-full md:h-full h-[50%] transition-transform duration-500`}
            >
              <LoginForm />
            </div>

            <div
              className={`absolute ${
                isLoginForm
                  ? "md:translate-x-0 md:translate-y-0 translate-y-0"
                  : "md:translate-x-[100%] md:translate-y-0 translate-y-[-100%]"
              } top-0 md:right-0 md:w-[45%] w-full md:h-full h-[40%] transition-transform duration-500`}
            >
              <FormOtherHalf
                title="Hello, Friend!"
                subTitle="Don't have an account"
                btnText="Create account"
                setIsLoginForm={setIsLoginForm}
                isLoginForm={isLoginForm}
              />
            </div>
          </>

          {/* RIGHT HALF */}
          <>
            <div
              className={`absolute ${
                isLoginForm
                  ? "md:translate-x-[100%] md:translate-y-0 translate-y-[-100%]"
                  : "md:translate-x-[0%] md:translate-y-0 translate-y-[0%]"
              } top-0 md:right-0 md:w-[55%] w-full md:h-full h-[65%] transition-transform duration-500`}
            >
              <SignUpForm />
            </div>

            <div
              className={`absolute ${
                isLoginForm
                  ? "md:translate-x-[-100%] md:translate-y-0 translate-y-[100%]"
                  : "md:translate-x-[0%] md:translate-y-0 translate-y-[0%]"
              } bottom-0 md:left-0 md:w-[45%] w-full md:h-full h-[35%] transition-transform duration-500`}
            >
              <FormOtherHalf2
                title="Welcome Back!"
                subTitle="Already have an account"
                btnText="Login"
                setIsLoginForm={setIsLoginForm}
                isLoginForm={isLoginForm}
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const submitHandler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="h-full w-full flex justify-center items-center px-2">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={submitHandler}
      >
        <Form className="flex flex-col gap-7 w-full min-[426px]:max-w-[500px]">
          <h3 className="font-bold text-4xl text-center text-[#3A3845] tracking-wider">
            Login
          </h3>
          <div className="flex flex-col gap-7">
            <>
              <EmailInput
                autoComplete="off"
                placeholder={"Email Address"}
                name={"email"}
              />
            </>
            <>
              <PasswordInput
                placeholder={"Enter password"}
                name={"password"}
                autoComplete="off"
              />
            </>
            <div className="w-full">
              <button
                type="submit"
                className="font-semibold text-lg cursor-pointer py-1.5 bg-[#826F66] text-[#FFFDFB] rounded-md w-full"
              >
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const SignUpForm = () => {
  const submitHandler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="h-full w-full flex justify-center items-center px-2 z-10">
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={submitHandler}
      >
        <Form className="flex flex-col gap-7 w-full max-w-[500px]">
          <h3 className="font-bold text-4xl text-center text-[#3A3845] tracking-wider">
            Create Account
          </h3>
          <div className="flex flex-col w-full gap-6">
            <div className="w-full">
              <Input
                placeholder={"Enter Name"}
                name={"userName"}
                autoComplete={"off"}
              />
            </div>
            <div className="w-full">
              <EmailInput
                autoComplete="off"
                placeholder={"Email Address"}
                name={"email"}
              />
            </div>
            <div className="w-full">
              <PasswordInput
                placeholder={"Enter password"}
                name={"password"}
                autoComplete="off"
              />
            </div>
            <div className="w-full">
              <PasswordInput
                placeholder={"Confirm password"}
                name={"confirmPassword"}
                autoComplete="off"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="font-semibold text-lg cursor-pointer py-1.5 bg-[#826F66] text-[#FFFDFB] rounded-md w-full"
              >
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const FormOtherHalf = ({
  title,
  subTitle,
  btnText,
  setIsLoginForm,
  isLoginForm,
}) => {
  return (
    <div className="h-full w-full">
      <div
        className={`h-full md:max-h-full w-full bg-[#826F66] flex items-center md:py-0 py-5 md:rounded-tl-[150px] md:rounded-bl-[150px] md:rounded-b-none rounded-br-[80px] rounded-bl-[80px] z-20`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-col md:gap-4 gap-2 items-center text-center">
            <div className="">
              <img
                src={heroLogo}
                className="md:size-[80px] size-[60px]"
                alt="logo"
              />
            </div>

            <h1 className="capitalize text-4xl font-bold leading-12 text-[#FFFDFB] tracking-wider">
              {title}
            </h1>

            <h2 className="text-xl font-bold text-[#FFFDFB]">{subTitle}</h2>

            <button
              type="button"
              className="font-medium text-lg bg-[#FFFDFB] text-[#3A3845] rounded-md min-[425px]:px-10 px-7 py-1 cursor-pointer md:w-max min-[425px]:w-full"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormOtherHalf2 = ({
  title,
  subTitle,
  btnText,
  setIsLoginForm,
  isLoginForm,
}) => {
  return (
    <div className="h-full w-full">
      <div
        className={`h-full md:max-h-full w-full bg-[#826F66] flex items-center md:rounded-tr-[150px] md:rounded-br-[150px] md:rounded-t-none rounded-tr-[80px] rounded-tl-[80px] z-20`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-col md:gap-4 gap-2 items-center text-center">
            <div className="">
              <img
                src={heroLogo}
                className="md:size-[80px] size-[60px]"
                alt="logo"
              />
            </div>

            <h1 className="capitalize min-[375px]:text-4xl text-3xl font-bold leading-12 text-[#FFFDFB] tracking-wider">
              {title}
            </h1>

            <h2 className="min-[375px]:text-xl text-lg font-bold text-[#FFFDFB]">{subTitle}</h2>

            <button
              type="button"
              className="font-medium text-lg bg-[#FFFDFB] text-[#3A3845] rounded-md min-[425px]:px-10 px-8 py-1 cursor-pointer md:w-max min-[425px]:w-full"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
