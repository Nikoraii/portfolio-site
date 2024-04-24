export default function Contact() {
    return (
        <div className="section" id="contact">
            <div className="contact-container">
                <div className="contact-title">
                    CONTACT
                </div>
                <div className="contact-subtitle">
                    Feel free to contact me!
                </div>
                <div className="contact-info">
                    <div className="contact-link">
                        <div className="info-icon">
                            <img src="/assets/globe.png" alt="Globe emoji" />
                        </div>
                        <div className="info-text">
                            <div className="top-text">LOCATION</div>
                            <div className="bottom-text">Belgrade, Serbia</div>
                        </div>
                    </div>
                    <div className="contact-link">
                        <div className="info-icon">
                            <img src="/assets/email.png" alt="Email emoji" />
                        </div>
                        <div className="info-text">
                            <div className="top-text">MAIL</div>
                            <div className="bottom-text"><a href="mailto:nikost.inquiries@gmail.com">nikost.inquiries@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}