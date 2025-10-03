import { Field, Form, Formik } from "formik";
import heroLogo from "../../../../public/assets/Icons/hero-section-logo.svg";
import EmailInput from "../../ui/inputs/EmailInput";
import PasswordInput from "../../ui/inputs/PasswordInput";
import Input from "../../ui/inputs/Input";
import { loginSchema, signUpSchema } from "../../../../schema/schema";
import { useState } from "react";
import Loader from "../../ui/loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { setItem } from "../../../utils/localStorageHelper";
import { useNavigate } from "react-router";
import { decodeToken } from "../../../utils/tokenDecoded";
import useAuthContext from "../../../../context/AuthContext";
import toast from "react-hot-toast";
import Checkbox from "../../ui/inputs/Checkbox";

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
              <SignUpForm
                setIsLoginForm={setIsLoginForm}
                isLoginForm={isLoginForm}
              />
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
  const { setUserData } = useAuthContext();
  const loginMutation = useAuth();

  const { isPending } = loginMutation;

  const navigate = useNavigate();

  const submitHandler = async (values, { resetForm }) => {
    loginMutation.mutate(
      {
        endpoint: "/auth/login",
        method: "post",
        data: values,
      },
      {
        onSuccess: (res) => {
          setItem("accessToken", res.accessToken);
          setItem("refreshToken", res.refreshToken);

          const { email, userName } = decodeToken(res.accessToken);

          setUserData({ email, userName });

          setItem("userData", { email, userName });

          toast.success(res?.message || "Success");

          setTimeout(() => {
            navigate("/");
          }, 600);
          resetForm();
        },
        onError: (err) => {
          toast.error(
            err?.response?.data?.message ||
              err?.message ||
              "Something went wrong"
          );
        },
      }
    );
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
              <EmailInput placeholder={"Email Address"} name={"email"} />
            </>
            <>
              <PasswordInput placeholder={"Enter password"} name={"password"} />
            </>
            <div className="w-full">
              <button
                disabled={isPending ? true : false}
                type="submit"
                className="font-semibold text-lg cursor-pointer py-1.5 bg-[#826F66] text-[#FFFDFB] rounded-md w-full disabled:opacity-80 disabled:pointer-events-none flex justify-center items-center disabled:gap-5"
              >
                {isPending && <Loader />}
                Sign up
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const SignUpForm = ({ setIsLoginForm, isLoginForm }) => {
  const registerMutation = useAuth();

  const { isPending } = registerMutation;

  const submitHandler = async (values, { resetForm }) => {
    const { userName, email, password, isAdmin } = values;

    const role = isAdmin ? "admin" : "user";

    registerMutation.mutate(
      {
        endpoint: "/auth/register",
        method: "post",
        data: { userName, email, password, role },
      },
      {
        onSuccess: (res) => {
          setIsLoginForm(!isLoginForm);
          toast.success(res?.message || "Success");
          resetForm();
        },
        onError: (err) => {
          toast.error(
            err?.response?.data?.message ||
              err?.message ||
              "Something went wrong"
          );
        },
      }
    );
  };

  return (
    <div className="h-full w-full flex justify-center items-center px-2 z-10">
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          isAdmin: false,
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
              <Input placeholder={"Enter Name"} name={"userName"} />
            </div>
            <div className="w-full">
              <EmailInput placeholder={"Email Address"} name={"email"} />
            </div>
            <div className="w-full">
              <PasswordInput placeholder={"Enter password"} name={"password"} />
            </div>
            <div className="w-full">
              <PasswordInput
                placeholder={"Confirm password"}
                name={"confirmPassword"}
              />
            </div>
            <div className="w-fit flex items-center">
              <label className="container flex items-center gap-2 lg:text-base md:text-sm font-medium cursor-pointer">
                <Field
                  className="peer cursor-pointer hidden after:opacity-100"
                  type="checkbox"
                  name={"isAdmin"}
                />
                <span className="inline-block w-4 h-4 border-2 relative rounded-sm cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[6px] after:h-[6px] after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>
                Admin
              </label>
            </div>

            <div className="w-full">
              <button
                disabled={isPending ? true : false}
                type="submit"
                className="font-semibold text-lg cursor-pointer py-1.5 bg-[#826F66] text-[#FFFDFB] rounded-md w-full disabled:opacity-80 disabled:pointer-events-none flex justify-center items-center disabled:gap-5"
              >
                {isPending && <Loader />}
                Sign up
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

            <h2 className="min-[375px]:text-xl text-lg font-bold text-[#FFFDFB]">
              {subTitle}
            </h2>

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
