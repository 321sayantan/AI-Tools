import React from 'react'

const Header = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="/images/80.jpeg"
              alt="First slide"
              className="carousel-image"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Powerful AI Tools</h1>
                <p className="opacity-75">
                  Discover a wide range of AI tools designed to streamline
                  your workflow.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/register">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="/images/1.jpg"
              alt="Second slide"
              className="carousel-image"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Welcome to TOOL-E</h1>
                <p>Your ultimate AI-powered toolkit for enhancing productivity.</p>
                <p>
                  <a
                    className="btn btn-lg btn-primary"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('tools-list').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </a>
                </p>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="\images\39.jpeg"
              alt="Third slide"
              className="carousel-image"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Customizable Solutions</h1>
                <p>
                  Tailor TOOL-E to fit your specific needs and preferences.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Header;
