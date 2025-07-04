function Resume() {
    return (
      <section id="resume" className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Resume</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Academic Background</h4>
              <p><strong>BSc in Computer Science</strong><br />
              [Your University], [City], [Country]<br />
              [Year] - [Year]<br />
              Relevant Coursework: Data Structures, Algorithms, Cybersecurity, Web Development</p>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Work Experience</h4>
              <p><strong>[Your Job Title]</strong><br />
              [Company Name], [City], [Country]<br />
              [Month Year] - [Month Year or Present]<br />
              - [Responsibility 1]<br />
              - [Responsibility 2]</p>
              <p><strong>[Your Job Title]</strong><br />
              [Company Name], [City], [Country]<br />
              [Month Year] - [Month Year]<br />
              - [Responsibility 1]<br />
              - [Responsibility 2]</p>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Certifications</h4>
              <ul>
                <li>[Certification 1, e.g., CompTIA Security+] - [Year]</li>
                <li>[Certification 2, e.g., Certified Ethical Hacker (CEH)] - [Year]</li>
                <li>[Certification 3, e.g., AWS Certified Solutions Architect] - [Year]</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Skills</h4>
              <ul>
                <li>Programming: [e.g., Python, JavaScript, Java]</li>
                <li>Web Development: [e.g., React, Bootstrap, Node.js]</li>
                <li>Cybersecurity: [e.g., Penetration Testing, Network Security]</li>
                <li>Tools: [e.g., Wireshark, Metasploit, Burp Suite]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;