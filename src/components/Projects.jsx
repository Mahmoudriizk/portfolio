import { useEffect, useRef } from "react";

function Projects() {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const cards = ref.current.querySelectorAll(".card");

                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = 1;
                            card.style.transform = "translateY(0)";
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(ref.current);
    }, []);

    return (
        <section ref={ref} id="projects" style={{
            padding: "80px 20px",
            background: "#020617",
            color: "white"
        }}>
            <div className="container" style={{ textAlign: "center" }}>
                
                <h2 style={{
                    fontSize: "clamp(2rem, 5vw, 2.5rem)",
                    marginBottom: "50px"
                }}>
                    My Projects
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "25px"
                }}>
                    {[
                        {
                            title: "Electric Cars Website",
                            desc: "Responsive UI showcasing electric vehicles with smooth UX.",
                            github: "https://github.com/Mahmoudriizk/electric-cars-website",
                            demo: "https://mahmoudriizk.github.io/electric-cars-website/"
                        },
                        {
                            title: "School Transport System",
                            desc: "Web app for managing school transport routes and services.",
                            github: "https://github.com/Mahmoudriizk/school-bus-transport",
                            demo: "https://mahmoudriizk.github.io/school-bus-transport/"
                        },
                        {
                            title: "Medical Clinic Website",
                            desc: "Clean clinic UI focused on simplicity and usability.",
                            github: "https://github.com/Mahmoudriizk/Dr-Clinic-Website",
                            demo: "https://mahmoudriizk.github.io/Dr-Clinic-Website/"
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                background: "#1e293b",
                                padding: "25px",
                                borderRadius: "14px",
                                opacity: 0,
                                transform: "translateY(40px)",
                                transition: "0.4s",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(59,130,246,0.25)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
                            }}
                        >
                            <h3 style={{
                                fontSize: "18px",
                                marginBottom: "10px"
                            }}>
                                {project.title}
                            </h3>

                            <p style={{
                                color: "#94a3b8",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                marginBottom: "20px"
                            }}>
                                {project.desc}
                            </p>

                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px"
                            }}>
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <button style={btn}>GitHub</button>
                                </a>

                                <a href={project.demo} target="_blank" rel="noreferrer">
                                    <button style={btnOutline}>Live</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const btn = {
    padding: "7px 14px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

const btnOutline = {
    padding: "7px 14px",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

export default Projects;
