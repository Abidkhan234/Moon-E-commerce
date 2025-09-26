import { Form, Formik } from "formik";
import { NavLink } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

import TextArea from "../../ui/inputs/TextArea";
import Input from "../../ui/inputs/Input";
import { checkoutSchema } from "../../../../schema/schema";

const initialValues = {
  firstName: "",
  lastName: "",
  company: "",
  countryRegion: "",
  streetAddress: "",
  townCity: "",
  state: "",
  zipCode: "",
  phone: "",
  email: "",
  orderNotes: "",
};

const BillingDetailSection = () => {
  const submitHandler = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <section className="flex md:flex-row flex-col justify-between gap-7 w-full h-full">
      <div className="md:order-1 order-2 flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-semibold text-[#3A3845]">
          Billing Details
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={submitHandler}
        >
          <Form className="flex flex-col gap-5">
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="First Name"
                  placeholder="Samatha"
                  name="firstName"
                />
              </div>
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="last name"
                  placeholder="Clarken"
                  name="lastName"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="md:basis-[50%] basis-full ">
                <Input
                  isRounded={false}
                  labelText="Company"
                  placeholder="Moon (optional)"
                  name="company"
                />
              </div>
              <div className="md:basis-[50%] basis-full ">
                <Input
                  isRounded={false}
                  labelText="Country / Region"
                  placeholder="United states"
                  name="countryRegion"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="basis-full">
                <Input
                  isRounded={false}
                  labelText="Street address"
                  placeholder="Address"
                  name="streetAddress"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="Town / City"
                  placeholder="City"
                  name="townCity"
                />
              </div>
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="State"
                  placeholder="State"
                  name="state"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="ZIP Code"
                  placeholder="Zip code (optional)"
                  name="zipCode"
                />
              </div>
              <div className="md:basis-[50%] basis-full">
                <Input
                  isRounded={false}
                  labelText="Phone"
                  placeholder="(123) 456 - 7890"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="basis-full">
                <Input
                  isRounded={false}
                  labelText="Email"
                  placeholder="example@youremail.com"
                  name="email"
                />
              </div>
            </div>
            <div className="flex md:flex-row md:items-center flex-col gap-4">
              <div className="basis-full">
                <TextArea
                  isRounded={false}
                  labelText="Order notes"
                  placeholder="Type your message here... (optional)"
                  name="orderNotes"
                />
              </div>
            </div>
            <div className="flex sm:justify-between sm:flex-row flex-col items-center w-full gap-7 mt-5">
              <NavLink
                to={`/cart`}
                className={`flex sm:justify-start justify-center items-center gap-2 sm:w-max w-full`}
              >
                <span className="text-xl text-[#595667]">
                  <IoIosArrowBack />
                </span>
                <span className="uppercase font-medium text-base text-[#3A3845]">
                  Return to cart
                </span>
              </NavLink>
              <button
                type="submit"
                className="bg-[#3A3845] text-[#FFFFFF] py-3 px-22 uppercase cursor-pointer tracking-wide rounded-sm sm:w-max w-full text-nowrap"
              >
                Place order
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      <div className="md:order-2 order-1 flex flex-col gap-5 w-full h-full">
        <div className="flex justify-between items-center border-b border-[#8c8b91] pb-2">
          <h3 className="font-semibold text-xl text-[#3A3845]">Product</h3>
          <h3 className="font-semibold text-xl text-[#3A3845]">Subtotal</h3>
        </div>
        <ul className="flex flex-col gap-2.5">
          <li className="flex justify-between items-center">
            <span className="text-[#3A3845] text-sm font-medium lg:max-w-[60%]">
              Porcelain Dinner Plate (27cm)
            </span>
            <span className="font-medium text-sm text-[#3A3845]">$59.00</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-2.5 border-b border-[#8c8b91] pb-3">
          <li className="flex justify-between items-center">
            <span className="text-[#3A3845] text-base font-semibold">
              Subtotal
            </span>
            <span className="font-semibold text-base text-[#3A3845]">
              $59.00
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-[#3A3845] text-base font-semibold">
              Shipping
            </span>
            <span className="font-semibold text-base text-[#3A3845]">
              $15.00
            </span>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-[#3A3845]">Total</span>
          <span className="text-xl font-bold text-[#3A3845]">$450.00</span>
        </div>
      </div>
    </section>
  );
};

export default BillingDetailSection;
