function Projects() {
    return (
      <section id="projects" className="bg-light section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">[Project Title 1]</h5>
                  <p className="card-text">[Description of your first project, e.g., Developed a web app using React and Node.js.]</p>
                  <a href="[Your GitHub Link]" className="btn btn-primary">View on GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">[Project Title 2]</h5>
                  <p className="card-text">[Description of your second project, e.g., Built a Python-based tool for network analysis.]</p>
                  <a href="[Your GitHub Link]" className="btn btn-primary">View on GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">[Project Title 3]</h5>
                  <p className="card-text">[Description of your third project, e.g., Created a task management app with Firebase.]</p>
                  <a href="[Your GitHub Link]" className="btn btn-primary">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;