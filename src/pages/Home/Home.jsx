import Footer from "../../components/Footer/Footer";
import { StickyNavbar } from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";
import Menu from "./Menu/Menu";

const Home = () => {
    return (
        <div className="container mx-auto">
            <StickyNavbar></StickyNavbar>
            <Banner></Banner>
            <Menu></Menu>
            <Membership></Membership>
            <Footer></Footer>
        </div>
    );
};

export default Home;