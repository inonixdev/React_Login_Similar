function Card() {
    return(
        <div className="container">
            <div className="facebook-page">
                <div className="text">
                    <h1>facebook</h1>
                    <p>Facebook helps you connect and share</p>
                    <p>with the people in your life.</p>
                </div>
                <form action="">
                    <input type="email" placeholder="Enter you email" required/>
                    <input type="password" placeholder="Password" required />

                    <div className="login-link">
                        <button type="submit" className="login-btn">Log in</button>
                        <a href="" className="forgot-password">Forgotten password?</a>
                    </div>
                    <hr></hr>
                    <div className="create-account">
                        <a href="">Create new account</a>
                    </div>
                </form>
            </div>
            {/* <div className="_58mk">
                <a href="/pages/create/?ref_type=registration_form" class="_8esh">Create a Page</a>
                " for a celebrity, brand of business."
            </div> */}
        </div>
    );
}

export default Card