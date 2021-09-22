import React, { Component } from 'react'


export class Newsdata extends Component {
    render() {

        let {title,desc,imgurl,pageurl,publish} = this.props;
        let date = new Date(publish)
        return (
            <div>
                <div className="card mb-3 text-white bg-dark" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imgurl}   className="img-fluid rounded-start" alt="" />
    </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{desc}...</p>
                                    <a href={pageurl} className="btn btn-danger">Read more</a>
 
                                    <p className="card-text"><small className="text-muted">Published on { date.toDateString() }</small></p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Newsdata
