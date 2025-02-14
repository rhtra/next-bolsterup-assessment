import { useState } from "react";

import List from "./list";

const ProjectsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  return (
    <section className="projects-content">
      <div className="projects-content__intro">
        <h2>Projects</h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="projects-filter-btn"
        >
          <i className="icon-filters" />
        </button>
        <button type="button" className="projects-filter-btn">
          <i className="icon-filters" />
        </button>
        <form
          className={`projects-content__filter ${orderProductsOpen ? "projects-order-open" : ""}`}
        >
          <div className="projects__filter__select"></div>
        </form>
      </div>

      <List />
    </section>
  );
};

export default ProjectsContent;
