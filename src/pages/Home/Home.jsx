import Footer from "../../components/Footer/Footer";
import { StickyNavbar } from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";

const Home = () => {
    return (
        <div className="container mx-auto">
            <StickyNavbar></StickyNavbar>
            <Banner></Banner>
            <Membership></Membership>
            <Footer></Footer>
        </div>
    );
};

export default Home;