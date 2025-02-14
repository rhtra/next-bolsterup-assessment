import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Map from "@/components/projects/google-map";
import ProjectsContent from "@/components/projects/projects-content";

import Layout from "../layouts/Main";

const Projects = () => (
  <Layout>
    <Breadcrumb label="Projects" />
    <section className="products-page">
      <div className="container">
        <ProjectsContent />
        <Map />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Projects;
