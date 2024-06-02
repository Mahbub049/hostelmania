import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { StickyNavbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto">
      <StickyNavbar></StickyNavbar>
      <div className="my-20 flex justify-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                {...register("name", { required: true })}
                type="text"
                placeholder="Mahbub Sarwar"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.name && <span>This field is required</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Image
              </Typography>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:bg-[#5271FF] file:text-white file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "
                />
                {errors.image && <span>This field is required</span>}
              </label>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                {...register("email", { required: true })}
                type="email"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.email && <span>This field is required</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                {...register("password", { required: true })}
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              color="#5271FF"
            />
            <Button className="mt-6 bg-[#5271FF]" fullWidth>
              <input type="submit" value="Sign Up"/>
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
