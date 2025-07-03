function Contact() {
    return (
      <section id="contact" className="bg-light section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
              <p>Phone: +123-456-7890</p>
              <div className="mt-3">
                <a href="https://linkedin.com/in/yourusername" className="btn btn-outline-primary mx-2">LinkedIn</a>
                <a href="https://github.com/yourusername" className="btn btn-outline-primary mx-2">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;