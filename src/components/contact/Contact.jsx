import './Contact.scss'

const contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/shake.svg" alt="Lets Connect" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="message" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default contact
