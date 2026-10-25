import { BRAND, STORE_URL } from '../config/siteConfig.js';

export default function CallToAction() {
  const hasUrl = Boolean(STORE_URL);

  return (
    <section className="cta container" aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta__title">
        ¡Ya disponible <br className="cta__break" />nuestra página web!
      </h2>
      <a
        className="button"
        href={hasUrl ? STORE_URL : undefined}
        aria-disabled={hasUrl ? undefined : 'true'}
        {...(hasUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {BRAND}
      </a>
    </section>
  );
}
