import { loadStripe } from "@stripe/stripe-js";
import Footer from "../../components/Footer/Footer";
import { StickyNavbar } from "../../components/Navbar/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
  return (
    <div className="container mx-auto">
      <StickyNavbar></StickyNavbar>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
