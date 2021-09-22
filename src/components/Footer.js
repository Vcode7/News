import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <div className="container bg-dark">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                        <div className="col-md-4 d-flex align-items-center">                            
                            <span className="text-muted">© 2021 Company, Inc</span>
                        </div>
                    </footer>
                </div>

            </>
        )
    }
}

export default Footer
