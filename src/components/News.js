import React, { Component } from 'react'
import Newsdata from './Newsdata.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner.js';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      items: [],
      pageSize: 5
    };
  }
  fetchData = async () => {
    this.setState({
      pageSize: this.state.pageSize + 3,
    })
    await setTimeout(() => {
      this.setState({
        items: this.props.data.articles.slice(0, this.state.pageSize)
      })
    }, 500)
  }
  async componentDidMount() {

    this.setState({
      isLoaded: true,
      items: this.props.data.articles.slice(0, this.state.pageSize)
    });

  }

  render() {
    return (
      <>
        <br />
        <br />
        <div className="container">
          <br />
          <h1 className="text-center">TODAY'S NEWS</h1>
          <hr />
          {!this.state.isLoaded && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.items.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.items.length !== this.props.data.articles.length}
            loader={< Spinner />}
            >
              {this.state.items.map((elm) => {
                if(elm.urlToImage){
                  return <Newsdata title={elm.title} desc={elm.description} imgurl={elm.urlToImage} pageurl={elm.url} publish={elm.publishedAt} />
                }
              })}

          </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News
