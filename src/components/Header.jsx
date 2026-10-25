import { BRAND } from '../config/siteConfig.js';

export default function Header() {
  return (
    <header className="header">
      <p className="header__brand">{BRAND}</p>
    </header>
  );
}
