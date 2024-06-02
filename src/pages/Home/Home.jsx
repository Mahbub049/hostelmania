import { StickyNavbar } from "../../components/Navbar/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="container mx-auto">
            <StickyNavbar></StickyNavbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;