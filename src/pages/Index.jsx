import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import Portofolio from '../component/Portofolio';
import Services from '../component/Services';
import Skills from '../component/Skills';

function LandingPage() {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <Portofolio />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

export default LandingPage;