import React, { Suspense, lazy } from "react";

// Import the components for the portfolio items
const Component1 = lazy(() => import("../components/portfolio/clock/Clock.js"));
// const Component2 = lazy(() => import("../components/portfolio/clock/Clock.js"));
// const Component3 = lazy(() => import("../components/portfolio/clock/Clock.js"));

const components = ["comp", <Component1 />, <Component1 />, <Component1 />];

function PortfolioPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1>My Portfolio</h1>
          {components.map((comp, index) => (
            <div key={index}>{comp}</div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default PortfolioPage;
