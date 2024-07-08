import ImageHome from '../asset/imgHome.png';

function Home() {

    return (
        <section id="home">
            <div className="container">
                <div className="content-home">
                    <p className="desc">MY NAME IS</p>
                    <h1>Eka <span>Syafrino</span></h1>
                    <p>Creative front-end developer with more than +5 years of experience in enterprise companies and
                        startups. Proficient in Javascript and React. Passionate about UI/UX.</p>
                </div>
                <div className="img-container">
                    <img src={ImageHome} alt="Ilustrate me" />
                </div>
            </div>
        </section>
    );
}

export default Home;