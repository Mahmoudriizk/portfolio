import { useEffect, useRef } from "react";

function About() {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.style.opacity = 1;
                    ref.current.style.transform = "translateY(0)";
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(ref.current);
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            style={{
                padding: "120px 20px",
                background: "#0f172a",
                color: "white",
                opacity: 0,
                transform: "translateY(50px)",
                transition: "all 0.8s ease"
            }}
        >
            <div className="container" style={{ textAlign: "center" }}>

                <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                    About Me
                </h2>

                <p style={{
                    maxWidth: "700px",
                    margin: "auto",
                    color: "#94a3b8",
                    lineHeight: "1.6"
                }}>
                    I’m a passionate Frontend Developer focused on building responsive and user-friendly web applications.
                    I enjoy transforming ideas into clean, modern interfaces using React, JavaScript, and CSS.
                    Always eager to learn and improve, I aim to deliver smooth and engaging user experiences.
                </p>

            </div>
        </section>
    );
}

export default About;