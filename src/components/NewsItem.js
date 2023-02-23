import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute end-0 badge rounded-pill bg-danger"
            style={{ zIndex: "1", transform: "translateY(-50%)" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.deccanherald.com/sites/dh/files/articleimages/2022/12/27/new-project-3-1175554-1672138262.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem

