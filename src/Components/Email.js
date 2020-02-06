import React from 'react'

function Email() {
    return (
        <div className="email">
            <form>
                <div className="email-head">
                    <h2>SUBSCRIBE TO OUR NEWSLETTER!</h2>
                </div>

                {/* Row Div */}
                <div className="row">
                    <div className="col email-box">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col">
                    <div id="register-btn">
                        <button type="button" className="btn btn-primary">SUBSCRIBE</button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Email;