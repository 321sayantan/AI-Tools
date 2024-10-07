import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="inline-flex items-center justify-center w-full bg-cyan-600">
        <hr
          className="w-64 bg-white border-1 bg-"
          style={{ marginBottom: "-25px" }}
        />
        <h1 className="absolute hover:bg-cyan-600 font-medium text-white -translate-x-5 bg-gray-800 left-1/2 dark:text-white dark:bg-gray-900">
          or
        </h1>
      </div>
    </div>
  );
};

export default Heading;

// <div className="px-4 py-0 my-0 text-center">
//   <h1 className="display-5 fw-bold text-body-white">AI Tools</h1>

//   <div className="col-lg-6 mx-auto">
//     <p className="lead">
//       Quickly design and customize responsive mobile-first sites with
//       Bootstrap, the world’s most popular front-end open source toolkit,
//     </p>
//   </div>
// </div>
