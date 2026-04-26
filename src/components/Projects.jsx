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
                        }, index * 200);
                    });
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(ref.current);
    }, []);

    return (
        <section ref={ref} id="projects" style={{
            padding: "100px 20px",
            background: "#020617",
            color: "white"
        }}>
            <div className="container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
                    My Projects
                </h2>

                <div style={{
                    display: "grid", // 👈 بدل flex
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px"
                }}>
                    {[
                        {
                            title: "Electric Cars Website",
                            desc: "A responsive website showcasing electric vehicles with modern UI and smooth user experience.",
                            github: "https://github.com/Mahmoudriizk/electric-cars-website",
                            demo: "https://mahmoudriizk.github.io/electric-cars-website/"
                        },
                        {
                            title: "School Transport System",
                            desc: "A multi-page responsive web app for managing school transportation services and routes.",
                            github: "https://github.com/Mahmoudriizk/school-bus-transport",
                            demo: "https://mahmoudriizk.github.io/school-bus-transport/"
                        },
                        {
                            title: "Medical Clinic Website",
                            desc: "A clean and simple clinic website designed for better user experience and easy navigation.",
                            github: "https://github.com/Mahmoudriizk/Dr-Clinic-Website",
                            demo: "https://mahmoudriizk.github.io/Dr-Clinic-Website/"
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                background: "#1e293b",
                                padding: "20px",
                                borderRadius: "10px",
                                opacity: 0,
                                transform: "translateY(40px)",
                                transition: "0.3s",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(59,130,246,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
                            }}
                        >
                            <h3>{project.title}</h3>

                            <p style={{
                                color: "#94a3b8",
                                marginTop: "10px",
                                fontSize: "14px",
                                lineHeight: "1.5"
                            }}>
                                {project.desc}
                            </p>

                            <div style={{
                                marginTop: "15px",
                                display: "flex",
                                justifyContent: "center"
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
    marginRight: "12px",
    padding: "6px 12px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

const btnOutline = {
    padding: "6px 12px",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

export default Projects;