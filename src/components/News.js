import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

class News extends Component {

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            pageSize: 12,
        }
        document.title = `${this.props.category} - LiveNews on World Affairs`;
    }

    async updateNews(){
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&sortBy=publishedAt&apiKey=370afd43cff34f18bb74a6fc4bd350cd`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews()
    }



    handlePrevClick = async ()=> {
        this.setState(
            (prevState) => ({ page: prevState.page - 1 }),
            () => this.updateNews()
        );
    }
    handleNextClick = async ()=> {
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            () => this.updateNews()
        );
    }
    renderPlaceholders = ()=> {
        // Create an array of 12 placeholders (same as pageSize)
        return ( Array.from({ length: 12 }).map((_, index) => (
                <Spinner key={index} /> )
        ))
    }

    render() {
        return (
            <>
                <div className="container my-4 text-center">
                    <h2>Top Headlines from {this.props.category} | Live News</h2>
                </div>
                <div className="container px-10 py-10">
                    <div className="row">
                        {this.state.loading ?
                            this.renderPlaceholders()
                        : 
                            this.state.articles.map((article) => {
                                return (
                                    <div className="col-md-3" key={article.url}>
                                        <NewsItem title={article.title?article.title.slice(0,50):"News Heading: Not Provided."}
                                                description={article.description?article.description.slice(0,140):"No News Description"}
                                                imageUrl={article.urlToImage?article.urlToImage:"https://media.wired.com/photos/683631d1a984193c72371e4d/191:100/w_1280,c_limit/migrant-children-dna-database.jpg"}
                                                author={article.author}
                                                pubDate={new Date(article.publishedAt).toGMTString()}
                                                newsUrl={article.url}
                                                  source={article.source.name}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br />
                <hr />
                <div className="container d-flex justify-content-around">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-lg rounded-0" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.articles.length<12} type="button" className="btn btn-lg btn-dark rounded-0" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
                <p></p>
            </>
        );
    }
}

export default News;
