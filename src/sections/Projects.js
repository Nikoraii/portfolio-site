import { FaGithub } from "react-icons/fa";

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
                            <img src="https://skillicons.dev/icons?i=vue,tailwind,nodejs,express" alt="Vue, Tailwind CSS, Node.js and Express.js icons" />
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

                {/* <div className="more-info">
                    More projects currently in development...
                </div> */}

                <div className="project">
                    <div className="project-picture">
                        <a href="https://dod-projects.vercel.app/" rel="noreferrer" target="_blank">
                            <img src="assets/dod-projects.png" alt="DoD Projects screenshot" />
                        </a>
                    </div>
                    <div className="project-description">
                        <div className="project-title">
                            <h4>DoD Projects:</h4>
                            <img src="https://skillicons.dev/icons?i=nextjs,react,ts,css" alt="Next.js, React and CSS icons" />
                        </div>
                        <div className="project-info">
                            <p>
                                List of all public Department of defense projects.
                            </p>
                            <p>
                                Complete list of projects with sorting and filtering options for DoD Project. For every project additional data is
                                displayed on their individual page. Data <a href="https://code.mil/code.json" target="_blank" rel="noreferrer">used</a>.
                            </p>
                            <div className="project-link">
                                <a href="https://dod-projects.vercel.app/" rel="noreferrer" target="_blank">dod-projects.vercel.app</a>
                                <a href="https://github.com/Nikoraii/dod-projects" target="_blank" rel="noreferrer" className="git-link">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-picture">
                        <a href="https://job-tracking-five.vercel.app/" rel="noreferrer" target="_blank">
                            <img src="assets/screencapture-job-tracking.png" alt="Job Tracking screenshot" />
                        </a>
                    </div>
                    <div className="project-description">
                        <div className="project-title">
                            <h4>Job Tracking Application:</h4>
                            <img className="img-5" src="https://skillicons.dev/icons?i=react,nextjs,ts,tailwindcss,supabase" alt="Vue, Tailwind CSS, Node.js and Express.js icons" />
                        </div>
                        <div className="project-info">
                            <p>
                                Track all your job applications in one place!
                            </p>
                            <p>
                                With this app you can easily track and store all your job applications.
                            </p>
                            <div className="project-link">
                                <a href="https://job-tracking-five.vercel.app/" rel="noreferrer" target="_blank">job-tracking-five.vercel.app</a>
                                <a href="https://github.com/Nikoraii/job-tracking" target="_blank" rel="noreferrer" className="git-link">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}