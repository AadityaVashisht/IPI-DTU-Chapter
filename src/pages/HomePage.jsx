// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main>
      {/* Home Section */}
      <section id="home" data-aos="fade-right">
        <div className="intro-container">
          <img src="/team_photo.jpg" alt="Team Photo" className="intro-img" />
          <div className="intro-text">
            <h2>About Indian Plastics Institute</h2>
            <p>
              The Indian Plastics Institute (IPI) is a technical professional organization that was officially launched on May 6, 1985.
              Significantly, IPI took over from the Plastic and Rubber Institute, London (PRI), establishing itself as a prominent body
              in the field. Today, IPI has grown into a robust professional body, bringing together industrialists, plastic technologists,
              academics, economists, and students. Its influence extends across India with 14 chapters and two international associations
              with Sri Lanka and Nepal. IPI DTU is a leading society that works to connect the industrial world with academia.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Section */}
      <section className="flagship" data-aos="fade-right">
        <h2>Our Flagship Series - POLYGENESIS</h2>
        <div className="intro-container">
          <img src="/polygenesis.jpg" alt="Polygenesis Photo" className="intro-img" />
          <div className="intro-text">
            <p>
              One of our flagship initiatives is the Polygenesis series, where we invite distinguished professionals to share their insights
              and experiences. Past speakers have included esteemed personalities such as Mr. Dinesh Chopra, Chairman of the ICC
              Industry-Academia Committee; Mr. Ashish Rastogi, CEO of ASSA Group; and Dr. Anant Narayan Bhatt, Senior Scientist at DRDO’s
              Institute of Nuclear Medicine and Allied Sciences. Polygenesis attracts over 250+ students from B.Tech, M.Tech, and Ph.D.
              programs across Delhi Technological University.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-aos="fade-left">
        <h2>Our Mission</h2>
        <div className="intro-container">
          <div className="intro-text">
            <p>
              We aim to build a dynamic bridge between industry and academia, fostering meaningful collaboration that drives progress in
              sustainability and the circular economy. Through active engagement in scientific and industrial research, we provide students
              with hands-on experiences that prepare them for real-world challenges.
            </p>
          </div>
        </div>

        <h2>Our Vision</h2>
        <div className="intro-container">
          <div className="intro-text">
            <p>
              Our vision is to establish ourselves as a pioneering student society dedicated to sustainability and the principles of the
              circular economy. We aim to cultivate a community of future-ready leaders by equipping students with the technical knowledge,
              practical skills, and strong industry connections essential for meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mentor & Council Section */}
      <section id="team" className="team-section" data-aos="fade-left">
        <h2>Our Mentor & Faculty Coordinator</h2>
        <div className="mentor-container">
          <img src="/mentor_photo.jpg" alt="Prof. Roli Purwar" className="mentor-img" />
          <div className="mentor-text">
            <p>
              Prof. Roli Purwar serves as the esteemed Faculty Coordinator of the Indian Plastics Institute (IPI) – DTU Chapter.
              She is also the Associate Dean of Planning and Recruitment at Delhi Technological University.
            </p>
          </div>
        </div>

        {/* Advisory Council */}
        <section className="council-section">
          <h2>Advisory Council</h2>
          <div className="council-grid">
            <div className="council-card">
              <img src="/person2.jpg" alt="Arjun Dhama" />
              <h3>Arjun Dhama</h3>
              <p>Founding member and former Vice President of IPI DTU. Played a pivotal role in shaping the chapter’s core values...</p>
            </div>

            <div className="council-card">
              <img src="/person3.jpg" alt="Rukminesh Tiwari" />
              <h3>Rukminesh Tiwari</h3>
              <p>Former General Secretary, admired for his precision and strong administrative planning.</p>
            </div>

            <div className="council-card">
              <img src="/person4.jpg" alt="Pranav Gupta" />
              <h3>Pranav Gupta</h3>
              <p>Ex-Treasurer and sustainability enthusiast with extensive industry experience.</p>
            </div>
          </div>
        </section>

        {/* Senior Council */}
        <section className="council-section">
          <h2>Senior Council</h2>
          <div className="council-grid">
            <div className="council-card">
              <img src="/person5.jpg" alt="Aviral Chaturvedi" />
              <h3>Aviral Chaturvedi</h3>
              <p>Current President of IPI DTU with a focus on innovation and future-ready strategies.</p>
            </div>

            <div className="council-card">
              <img src="/person6.jpg" alt="Aaditya Vashisht" />
              <h3>Aaditya Vashisht</h3>
              <p>Vice President and driving force behind operations, research, and outreach efforts.</p>
            </div>

            <div className="council-card">
              <img src="/person7.jpg" alt="Anwesha Mandal" />
              <h3>Anwesha Mandal</h3>
              <p>Analytical and creative team member contributing to scientific initiatives and events.</p>
            </div>

            <div className="council-card">
              <img src="/person8.jpg" alt="Ayush S Verma" />
              <h3>Ayush S Verma</h3>
              <p>Treasurer, managing finances and contributing to the chapter’s smooth operations.</p>
            </div>

            <div className="council-card">
              <img src="/person9.jpg" alt="Jayesh Kumar" />
              <h3>Jayesh Kumar</h3>
              <p>Joint Treasurer with a focus on financial accuracy and team support.</p>
            </div>

            <div className="council-card">
              <img src="/person10.jpg" alt="Ankur Singh" />
              <h3>Ankur Singh</h3>
              <p>Joint Secretary ensuring seamless coordination of society operations and events.</p>
            </div>

            <div className="council-card">
              <img src="/person11.jpg" alt="Neil Bhatia" />
              <h3>Neil Bhatia</h3>
              <p>Team Coordinator, passionate about renewable energy and structured collaboration.</p>
            </div>
          </div>
        </section>
      </section>

      {/* Report Section */}
      <section id="report" className="flipbook-container" data-aos="fade-up">
        <h2>Our Annual Report</h2>
        <iframe
          src="https://online.anyflip.com/oermr/phbg/"
          allowFullScreen
          scrolling="no"
          title="Annual Report"
        ></iframe>
      </section>

      {/* Publications Section */}
      <section id="publications" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Publications</h2>
          <p>Sharing knowledge through blogs and research digests.</p>
        </div>

        <div className="publication-grid">
          <div className="publication-card">
            <div className="card-content">
              <h3>Smells like Science</h3>
              <div className="card-meta">By Mihika Singh & Shivam Chaube</div>
              <p>The year 2024 saw David Baker, Demis Hassabis, and John M. Jumper being awarded the Nobel Prize in Chemistry. Why? Mr. Baker and his team made astounding advances in computational protein design, 
something that has been a fantasy since the idea of protein design came into the picture. 
Now, why would this be such an interesting discovery? </p>
              <a href="/SmellsLikeScience" className="read-more-link">Read More →</a>
            </div>
          </div>

          <div className="publication-card">  
            <div className="card-content">
              <h3>Topological Superconductors</h3>
              <div className="card-meta">By Abhinav Agarwal</div>
              <p>Who would have thought that in 1937, an Italian physicist, Ettore Majorana, would theoretically propose a new kind of particle, the Majorana fermion, Majorana made the idea that spin -½ particles could be their antiparticles theoretically, but the vanishing of Majorana under mysterious circumstances left behind both a legend and a scientific mystery. Why all this information? 
Because this led to the creation of a new state of matter - Topological superconductors.

Let’s know more about them….</p>
              <a href="/TopologicalSuperconductors" className="read-more-link">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" data-aos="fade-up">
        <h2>IPI DTU on Social Media</h2>
        <div className="insta-section">
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="//lightwidget.com/widgets/0ab4199bc08458a4b23722f7f8286799.html"
            scrolling="no"
            allowTransparency
            className="lightwidget-widget"
            style={{ height: '400px' , width: '100%', border: 0}}
            title="IPI Instagram"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>Have questions or want to become a member? Reach out to us!</p>

        <p>
          <i className="fa fa-envelope"></i> Email:{' '}
          <a href="mailto:ipi@dtu.ac.in">ipi@dtu.ac.in</a>
        </p>
        <p>
          <i className="fa fa-map-marker"></i> Delhi Technological University, Shahbad Daulatpur,
          Main Bawana Road, Delhi-110042
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/company/indian-plastics-institute-dtu-chapter/" target="_blank" rel="noreferrer"></a>
          <a href="https://www.instagram.com/ipidtu/" target="_blank" rel="noreferrer"></a>
          <a href="https://www.youtube.com/@IPIDTUchapter" target="_blank" rel="noreferrer"></a>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
