function Hero() {
    return (
        <section style={{
            minHeight: "90vh",
            background: "#020617",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <div className="container" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "40px",
                padding: "80px 0",
            }}>

                {/* LEFT TEXT */}
                <div style={{
                    flex: 1,
                    minWidth: "280px",
                    textAlign: "center"
                }}>

                    <h1 style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        lineHeight: "1.2"
                    }}>
                        Mahmoud Rezk
                    </h1>

                    <p style={{
                        marginTop: "10px",
                        color: "#3b82f6",
                        fontWeight: "600",
                        letterSpacing: "1px"
                    }}>
                        Frontend Developer
                    </p>

                    <p style={{
                        marginTop: "15px",
                        color: "#94a3b8",
                        lineHeight: "1.6",
                        maxWidth: "500px",
                        marginInline: "auto"
                    }}>
                        Frontend Developer focused on building fast, responsive, and modern web applications.
                        I turn ideas into clean, interactive user experiences using React.
                    </p>

                    <div style={{
                        marginTop: "25px",
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>
                        <a href="#projects">
                            <button
                                style={btn}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-3px)";
                                    e.target.style.boxShadow = "0 10px 20px rgba(59,130,246,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                View Projects
                            </button>
                        </a>

                        <a href="#contact">
                            <button
                                style={btnOutline}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "white";
                                    e.target.style.color = "#020617";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.color = "white";
                                }}
                            >
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div style={{
                    flex: 1,
                    textAlign: "center",
                    minWidth: "280px"
                }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                        alt="developer"
                        style={{
                            width: "220px", // 👈 أصغر للموبايل
                            borderRadius: "20px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                            animation: "float 3s ease-in-out infinite"
                        }}
                    />
                </div>

            </div>
        </section>
    );
}

const btn = {
    padding: "10px 20px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

const btnOutline = {
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
};

export default Hero;
