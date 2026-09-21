import Image from "next/image";
import { footerIndustries, footerLinks, footerServices } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <a className="brand-mark" href="#top" aria-label="Markition home">
            <Image src="/logo.png" alt="Markition" width={32} height={32} />
            <span>Markition Tech</span>
          </a>
          <p className="footer-tagline">The Technology Behind Your Business</p>
          <p className="footer-desc">
            We design and build custom software, business systems, web platforms, mobile applications, integrations, and digital solutions that help businesses operate smarter and scale with confidence.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              {footerIndustries.map((ind) => (
                <li key={ind}>
                  <a href="#industries">{ind}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Markition Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
