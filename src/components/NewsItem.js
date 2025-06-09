import React, {Component} from 'react';

class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, author, pubDate, newsUrl, source} = this.props;
        return (
            <div className="my-3">
                <div className="card border border-secondary rounded-0">
                    <img src={!imageUrl ? "placeholder-image.jpg" : imageUrl}
                         className=""
                         alt="..."
                         style={{
                             height: "230px",
                             width: "auto",
                         }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className={"card-text"}><span className="badge bg-danger bg-pill">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small
                            className="text-muted">Author: {author ? author : "Unknown"}</small></p>
                        <p className="card-text"><small className="text-muted">@ {pubDate}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark rounded-0">Read
                            More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;