import { useEffect, useRef } from "react";

function Contact() {
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
            id="contact"
            style={{
                padding: "100px 20px",
                background: "#020617",
                color: "white",
                opacity: 0,
                transform: "translateY(50px)",
                transition: "0.8s"
            }}
        >
            <div className="container" style={{ textAlign: "center" }}>

                <h2 style={{ fontSize: "2.5rem" }}>
                    Contact Me
                </h2>

                <p style={{ color: "#94a3b8", margin: "20px 0" }}>
                    Feel free to reach out to me.
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap"
                }}>

                    <a href="mailto:Mahmoudriiizk251@gmail.com">
                        <button className="btn">Email</button>
                    </a>

                    <a href="https://github.com/Mahmoudriizk" target="_blank">
                        <button className="btn-outline">GitHub</button>
                    </a>

                    <a href="https://www.linkedin.com/in/mahmoud-riizk-768005264/" target="_blank">
                        <button className="btn-outline">LinkedIn</button>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;