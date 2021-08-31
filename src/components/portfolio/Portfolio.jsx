import './Portfolio.scss'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={`https://www.bobsguide.com/wp-content/uploads/2021/05/TCS-BaNCS_Logo.png`} alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
