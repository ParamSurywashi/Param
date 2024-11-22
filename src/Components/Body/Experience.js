import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import "../../Styles/Experience.scss";
  
  function Experience() {
    return (
      <div>
        <h2 className="head_point">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jun 2023 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Robe Infotech Pvt Ltd</h4>
            <p>
              I work at DataRobe Infotech Pvt. Ltd. as a Software Engineer, contributing to JavaScript SDK development, 
              optimizing project integration, enhancing UI components, and creating robust APIs with unit testing.
            </p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="November 2021 - November 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            
            position="left"
          >
            <h3 className="vertical-timeline-element-title">Graduate Apprentice Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Bharat Electronics Limited, Ghaziabad</h4>
            <p>
              I developed large-scale web applications using Java, Struts2, and JavaFX, and gained experience with MySQL, D3.js, 
              and Amchart for data visualization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
  
        <h2 className="head_point">Education</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="May 2016 - Sep 2020"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            
            position="right"
          >
            <h3 className="vertical-timeline-element-title">Bachelor's of Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science Engineering</h4>
            <p>8.35 CGPA</p>
            <p>My technical expertise includes JavaScript, React, Node.js, MySql, MongoDB, Struts2, and Docker, among others.</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="May 2015 - May 2016"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            
          >
            <h3 className="vertical-timeline-element-title">Intermediate (Class XII)</h3>
            <h4 className="vertical-timeline-element-subtitle">PCM</h4>
            <p>76%</p>
            <p>Govt. Boys High Secondary School Pipliyamandi MP</p>
            <p>Board of Secondary Education Bhopal MP</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="May 2013 - May 2014"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            
            position="right"
          >
            <h3 className="vertical-timeline-element-title">Matriculation (Class X)</h3>
            <h4 className="vertical-timeline-element-subtitle">PCM</h4>
            <p>65%</p>
            <p>Govt. High School Lasudia Rathore MP</p>
            <p>Board of Secondary Education Bhopal MP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            
             />
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Experience;
  