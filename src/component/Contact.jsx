function Contact() {

    return (
        <section id="contact">
            <div className="container">
                <form className="content-form" action="https://formspree.io/f/mleqqajz" method="post">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <div>
                        <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
                <div className="content-contact">
                    <div className="info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                <path
                                    d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z">
                                </path>
                            </svg>
                        </div>
                        <div className="detail">
                            <h4>Address</h4>
                            <p>3424 Layman Avenue, Fayetteville, NC</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                            </svg>
                        </div>
                        <div className="detail">
                            <h4>Phone</h4>
                            <p>(501) 414-1541</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                clip-rule="evenodd">
                                <path
                                    d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                            </svg>
                        </div>
                        <div className="detail">
                            <h4>Email</h4>
                            <p>dummyemail@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact