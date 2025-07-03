function LabChallenges() {
    return (
      <section id="challenges" className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Lab Challenges</h2>
          <div className="lab-challenge">
            <h4>CTF Challenge: Web Exploitation</h4>
            <p><strong>Problem Statement:</strong> Exploited a vulnerable web application to gain admin access by bypassing authentication.</p>
            <p><strong>Approach:</strong> Identified a SQL injection vulnerability in the login form. Crafted a payload to bypass authentication and accessed admin panel.</p>
            <p><strong>Tools Used:</strong> Burp Suite, SQLMap</p>
            <p><strong>Key Lessons Learned:</strong> Importance of input validation and parameterized queries to prevent SQL injection.</p>
          </div>
          <div className="lab-challenge">
            <h4>CTF Challenge: Reverse Engineering</h4>
            <p><strong>Problem Statement:</strong> Analyzed a binary to extract a hidden flag.</p>
            <p><strong>Approach:</strong> Used Ghidra to decompile the binary, identified the flag-checking logic, and extracted the flag by simulating the correct input.</p>
            <p><strong>Tools Used:</strong> Ghidra, GDB</p>
            <p><strong>Key Lessons Learned:</strong> Understanding binary structures and debugging techniques.</p>
          </div>
          <div className="lab-challenge">
            <h4>Lab: Network Packet Analysis</h4>
            <p><strong>Problem Statement:</strong> Analyzed network traffic to identify suspicious activity.</p>
            <p><strong>Approach:</strong> Captured packets using Wireshark, filtered for anomalies, and identified a data exfiltration attempt.</p>
            <p><strong>Tools Used:</strong> Wireshark, tcpdump</p>
            <p><strong>Key Lessons Learned:</strong> Importance of monitoring network traffic for security incidents.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default LabChallenges;