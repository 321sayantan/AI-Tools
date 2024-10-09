import React from 'react'

const Testimonials = () => {
  return (
    <section className=" back">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="fw-bold mb-4 display-5">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0 lead">
              See what our users are saying! Our cutting-edge AI tools have
              transformed workflows, enhanced efficiency, and delivered tangible
              results. Read the stories of how we've empowered businesses and
              individuals to achieve more.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card text-bg-dark border min-h-full">
              <div className="card-body py-4 mt-2 ">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    className="rounded-circle shadow-1-strong"
                    width={100}
                    height={100}
                  />
                </div>
                <h5 className="font-weight-bold">Sarah Martinez</h5>
                <h6 className="font-weight-bold my-3">
                  Digital Marketing Specialist
                </h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt fa-sm text-info" />
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2" />
                  TOOL-E has been a game-changer for our marketing campaigns!
                  The AI tools help us automate complex tasks, saving countless
                  hours while delivering accurate insights. It’s like having an
                  extra team member with top-notch problem-solving skills!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card text-bg-dark border min-h-full">
              <div className="card-body py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                    className="rounded-circle shadow-1-strong"
                    width={100}
                    height={100}
                  />
                </div>
                <h5 className="font-weight-bold">Maggie McLoan</h5>
                <h6 className="font-weight-bold my-3">Software Engineer</h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2" />
                  As a developer, I’ve tried numerous AI tools, but TOOL-E
                  stands out for its user-friendly interface and advanced
                  capabilities. It easily integrates into our workflow and
                  consistently delivers high-quality results. This platform is a
                  must-have for any tech professional!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-0 ">
            <div className="card text-bg-dark border min-h-full">
              <div className="card-body py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                    className="rounded-circle shadow-1-strong"
                    width={100}
                    height={100}
                  />
                </div>
                <h5 className="font-weight-bold">Emily Thompson</h5>
                <h6 className="font-weight-bold my-3">
                  CEO, Bright Ideas Consulting
                </h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info" />
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-info" />
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2" />
                  TOOL-E’s AI solutions have streamlined our operations in ways
                  we didn’t think possible. From data analysis to automating
                  routine tasks, it’s helped our team focus on what really
                  matters—delivering value to our clients. Highly recommended
                  for businesses of all sizes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
