import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            background: "rgba(2, 6, 23, 0.85)",
            backdropFilter: "blur(10px)",
            color: "white",
            zIndex: 1000,
            borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
            <div className="container" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 20px"
            }}>

                {/* LOGO */}
                <h3 style={{ fontWeight: "bold" }}>
                    Mahmoud
                </h3>

                {/* DESKTOP LINKS */}
                <div className="nav-links">
                    {["about", "projects", "contact"].map((item) => (
                        <a key={item} href={`#${item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <div
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="mobile-menu">
                    {["about", "projects", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setOpen(false)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;