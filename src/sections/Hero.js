export default function Hero() {
    return (
        <div className="section" id='home'>
            <div id='info'>
                <div id='info-intro'>
                    <div>
                        <h1>FULL-STACK DEVELOPER</h1>
                        <p>Hi! I'm <span className="name">Nikola Stancic</span>. Full-stack JavaScript developer based in Belgrade, Serbia.📍</p>
                    </div>
                    <div className='skills'>
                        <div className='stack'>
                            <h2>Front-end</h2>
                            <div className='icons'>
                                <img src="https://skillicons.dev/icons?i=html,css" alt="HTML & CSS" />
                                <img src="https://skillicons.dev/icons?i=js,ts" alt="JS & TS" />
                                <img src="https://skillicons.dev/icons?i=react,nextjs" alt="React & NextJS" />
                                <img src="https://skillicons.dev/icons?i=vue" alt="Vue" />
                                <img src="https://skillicons.dev/icons?i=angular" alt="Angular" />
                                <img src="https://skillicons.dev/icons?i=sass,tailwind,bootstrap" alt="Sass, TailwindCSS & Bootstrap" />
                            </div>
                        </div>
                        <div className='stack'>
                            <h2>Back-end</h2>
                            <div className='icons'>
                                <img src="https://skillicons.dev/icons?i=nodejs,express" alt="NodeJS & Express" />
                                <img src="https://skillicons.dev/icons?i=mongodb,mysql,postgres" alt="Mongodb, MySQL & PostgreSQL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./assets/avatar.jpg" alt="Avatar" className='avatar' />
                </div>
            </div>
        </div>
    );
}