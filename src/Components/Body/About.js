import "../../Styles/About.scss"
  
function About() {
    return (
        <div>  
            <section>
                <h1 className="about_name">Parmanand Chared</h1>
                <h4>Software Engineer</h4>
            </section>
            <section className="about_info">
               <p> I am a passionate Software Engineer with expertise in full-stack development, currently at DataRobe Infotech Pvt. Ltd. 
                I specialize in JavaScript SDK frameworks, UI components, API development, and Unit testing. Previously, 
                I worked at Bharat Electronics Limited, gaining experience in Java, Struts2, JavaFX, and technologies like MySQL and D3.js. Holding a Bachelor's degree in Computer Science, 
                I am skilled in JavaScript, React, Node.js, MongoDB, Docker, and more.
                I thrive in collaborative environments and constantly seek to expand my tech knowledge. </p>
            </section>
                <div className="BoyImgContainer"></div>
        </div>
    )
}

export default About;