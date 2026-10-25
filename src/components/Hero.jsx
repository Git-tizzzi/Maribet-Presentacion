import { HERO_IMAGE, HERO_IMAGE_ALT } from '../config/siteConfig.js';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {HERO_IMAGE ? (
        <img className="hero__image" src={HERO_IMAGE} alt={HERO_IMAGE_ALT} fetchPriority="high" />
      ) : (
        <div className="hero__placeholder" role="img" aria-label={HERO_IMAGE_ALT} />
      )}
      <div className="hero__overlay" />
      <div className="hero__content">
        <h2 id="hero-title" className="hero__title">¡Bienvenidos a Maribet!</h2>
        <p className="hero__subtitle">Moda para los más chicos.</p>
      </div>
    </section>
  );
}
