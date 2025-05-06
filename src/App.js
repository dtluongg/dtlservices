import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Slogant from "./component/Slogant/Slogant";
import Services from "./component/Services/Services";
// import ProductList from "./component/ProductList/ProductList";
import ServiceOption from "./component/ServiceOption/ServiceOption";
import MapLocation from "./component/MapLocation/MapLocation";
import Footer from "./component/Footer/Footer";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import Social from "./component/Social/Social";
import CarService from "./page/CarService/CarService";
import BanhMiService from "./page/BanhMiService/BanhMiService";
import LaptopService from "./page/LaptopService/LaptopService";
import ProductListAvailable from "./component/ProductListAvailable/ProductListAvailable";
import ProductListSold from "./component/ProductListSold/ProductListSold";
function App() {
    return (
        <div>
            <Router basename="/dtlservices">
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Header />
                                <Slogant /> 
                                <Services />
                                <Social />
                                <MapLocation />
                                <Footer />
                            </>
                        } />
                        <Route path="/product/:id" element={
                            <>
                                <Header />
                                <ProductDetail />
                                <Footer />
                            </>
                        } />
                        <Route path="/car-service" element={
                            <>
                                <Header />
                                <CarService />
                                <Footer />
                            </>
                        } />
                        <Route path="/laptop-service" element={
                            <>
                                <Header />
                                <LaptopService />
                                <ServiceOption />
                                <ProductListAvailable />
                                <ProductListSold />
                                {/* <ProductList /> */}
                                <Footer />
                            </>
                        } />        
                        <Route path="/banh-mi" element={
                            <>
                                <Header />
                                <BanhMiService />
                                <Footer />
                            </>
                        } />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
