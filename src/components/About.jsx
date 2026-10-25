import { BRAND, FOUNDED_YEAR } from '../config/siteConfig.js';

export default function About() {
  return (
    <section className="about container" aria-labelledby="about-title">
      <h2 id="about-title" className="about__title">¿Quiénes somos?</h2>
      
      <p className="about__text">
        {BRAND} es un emprendimiento que nació en {FOUNDED_YEAR} dedicado a la venta de accesorios e
        indumentaria para niños.
      </p>
    </section>
  );
}
