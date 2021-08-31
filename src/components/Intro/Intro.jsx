import './Intro.scss'

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Arvind Sai</h1>
                    <h3>I am <span>Front-End Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" />
                </a>
            </div>
        </div>
    )
}

export default Intro
