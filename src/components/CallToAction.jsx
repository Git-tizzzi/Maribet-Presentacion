import { BRAND, STORE_URL } from '../config/siteConfig.js';

export default function CallToAction() {
  return (
    <section className="cta container" aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta__title">
        ¡Ya disponible <br className="cta__break" />nuestra página web!
      </h2>
      {STORE_URL ? (
        <a className="button" href={STORE_URL} target="_blank" rel="noopener noreferrer">
          {BRAND}
        </a>
      ) : (
        <button className="button" type="button" aria-disabled="true">
          {BRAND}
        </button>
      )}
    </section>
  );
}