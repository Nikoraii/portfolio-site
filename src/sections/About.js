export default function About() {
    return (
        <div className='section' id='about'>
            <div id='about-container'>
                <div id='left-container'>
                    <p>OPEN FOR WORK!</p>
                    <img src="./assets/developer.png" alt='Developer Emoji' />
                </div>
                <div id='right-container'>
                    <h3>ABOUT ME</h3>
                    <p>Hello there! I'm Nikola Stancic, a passionate and innovative Full-Stack Developer with a knack for creating seamless, user-friendly digital experiences.</p>
                    <p>My journey began in 2019 when I first discovered my love for coding which is when I got into University! In 2023 I graduated with a bachelor's degree in <span id='comp-sci'>Computer Science</span>.</p>
                    <p>My current stack is <span className="tech">React & Next.js</span> with <span className="tech">Tailwind CSS</span> for front-end and <span className="tech">Node.js</span> with <span className="tech">Express</span> and <span className="tech">MongoDB/PostgreSQL</span> for back-end.</p>
                </div>
            </div>
        </div>
    )
}