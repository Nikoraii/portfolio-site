export default function Projects() {
    return (
        <div className="section" id="projects">
            <div className="projects-title">
                <h3>PROJECTS</h3>
            </div>
            <div className="all-projects">
                <div className="project">
                    <div className="project-picture">
                        <a href="https://www.starraidle.com/" rel="noreferrer" target="_blank">
                            <img src="assets/starraidle-guessed.png" alt="Starraidle screenshot" />
                        </a>
                    </div>
                    <div className="project-description">
                        <div className="project-title">
                            <h4>STARRAIDLE:</h4>
                            <img src="https://skillicons.dev/icons?i=vue,tailwind,nodejs,express" alt="HTML & CSS" />
                        </div>
                        <div className="project-info">
                            <p>
                                Daily character guessing game using characters from <span className="mini-title">Honkai: Star Rail</span>, with thousands of daily users.
                                Responsive application that allows users to play on a wide variety of devices.
                            </p>
                            <p>
                                Every day the game resets with a new character to guess, same for everyone.
                                Utilizing daily streak users are encouraged to play every day in order to keep their streak.
                            </p>
                            <div className="project-link">
                                <a href="https://www.starraidle.com/" rel="noreferrer" target="_blank">starraidle.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="more-info">
                    More projects currently in development...
                </div>

                {/* TO ADD LATER */}
                {/* <div className="project">
                    <div className="project-picture">
                        <a href="https://honkai-starraidle-frontend.vercel.app/" rel="noreferrer" target="_blank">
                            <img src="assets/starraidle-guessed.png" alt="Starraidle screenshot" />
                        </a>
                    </div>
                    <div className="project-description">
                        <div className="project-title">
                            <h4>STARRAIDLE:</h4>
                            <img src="https://skillicons.dev/icons?i=vue,tailwind,nodejs,express" alt="HTML & CSS" />
                        </div>
                        <div className="project-info">
                            <p>
                                Daily character guessing game using characters from Honkai Star Rail with thousands of daily users.
                            </p>
                            <p>
                                Each day the game resets with a new character to guess, same for everyone.
                                Utilizing daily streak users are encouraged to play every day.
                            </p>
                            <div className="project-link">
                                <a href="https://honkai-starraidle-frontend.vercel.app/" rel="noreferrer" target="_blank">starraidle.com</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}