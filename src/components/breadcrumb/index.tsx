import type { BreadCrumb } from "@/types";

const Breadcrumb = ({ label }: BreadCrumb) => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li>
          <a href="#">
            <i className="icon-home" />
          </a>
        </li>
        <li>All {label}</li>
      </ul>
    </div>
  </section>
);

export default Breadcrumb;
