import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  // Animation fade-in au scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* --- Bannière --- */}
      <header className="banner fade-in">
        <img src="/banniere.png" alt="Bannière Hair Spa" className="floating" />
        <div className="banner-text">
          <h1 className="typewriter">Hair Spa Évasion</h1>
          <p>Offrez à vos cheveux le soin qu’ils méritent</p>
          <button
            className="reserve-btn"
            onClick={() => {
              const contact = document.querySelector(".contact");
              if (contact) {
                contact.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Réserver
          </button>
        </div>
      </header>

      {/* --- Prestations --- */}
      <section id="prestations" className="fade-in">
        <h2>Nos Prestations</h2>
        <div className="prestations">
          <div className="prestation-card">
            <img src="/1.png" alt="Head Spa Japonais" />
            <h3>Head Spa Japonais</h3>
          </div>
          <div className="prestation-card">
            <img src="/2.png" alt="Hair Spa Holistique" />
            <h3>Hair Spa Holistique</h3>
          </div>
          <div className="prestation-card">
            <img src="/3.png" alt="Enfant & Duo" />
            <h3>Enfant & Duo</h3>
          </div>
        </div>
      </section>

      {/* --- Qui sommes-nous --- */}
      <section id="about" className="fade-in">
        <h2>Qui sommes-nous ?</h2>
        <p>
          <strong>HEAD SPA METZ</strong> — Institut comme chez vous 🤍
          Spécialiste du <em>Head Spa Japonais</em> 🫧 Nous proposons des soins{" "}
          <em>Hair Spa holistiques</em>, ainsi que des expériences adaptées aux{" "}
          <em>enfants et duos</em>. Premier centre certifié sur Metz, fondé par{" "}
          <strong>Vanessa (@maderotherapie_metz)</strong>.
        </p>
      </section>

      {/* --- Contact --- */}
      <footer className="contact fade-in">
        <h2>Contact</h2>
        <p>
          📍 Metz, France <br />
          📞 <a href="tel:+3300000000">+33 6 00 00 00 00</a> <br />
          ✉️{" "}
          <a href="mailto:contact@headspametz.com">contact@headspametz.com</a>
        </p>
      </footer>

      {/* --- Pop-up Bon de réduction --- */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Bon de Réduction</h3>
            <p>
              Entrez votre adresse e-mail pour recevoir un bon de réduction
              exclusif sur votre première séance.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowPopup(false);
              }}
            >
              <input type="email" placeholder="Votre email" required />
              <button type="submit">Valider</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
