import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Slogant from "./component/Slogant/Slogant";
import Services from "./component/Services/Services";
import ProductList from "./component/ProductList/ProductList";
import ServiceOption from "./component/ServiceOption/ServiceOption";
import MapLocation from "./component/MapLocation/MapLocation";
import Footer from "./component/Footer/Footer";
import ProductDetail from "./component/ProductDetail/ProductDetail";    
function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Header />
                                <Slogant />
                                <Services />
                                <ProductList />
                                <ServiceOption />
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
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
