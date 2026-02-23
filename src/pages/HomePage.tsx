import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('pls-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.pls-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pls-wrap">
      {/* NAV */}
      <nav className={`pls-nav${navScrolled ? ' pls-nav-scrolled' : ''}`}>
        <div className="pls-container pls-nav-content">
          <Link to="/" className="pls-logo">
            <div className="pls-logo-icon">P</div>
            <span>PayLoom Instants</span>
          </Link>

          <div className="pls-nav-links">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>Features</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Testimonials</a>
          </div>

          <div className="pls-nav-actions">
            <Link to="/login" className="pls-btn pls-btn-secondary">Sign In</Link>
            <Link to="/signup" className="pls-btn pls-btn-primary">Get Started Free</Link>
          </div>

          <button className="pls-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="pls-mobile-menu">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>Features</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Testimonials</a>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/signup" className="pls-btn pls-btn-primary" onClick={() => setMobileMenuOpen(false)}>Get Started Free</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pls-hero">
        <div className="pls-container pls-hero-content">
          <div className="pls-hero-text">
            <div className="pls-hero-badge">
              <span className="pls-badge-dot" />
              Powered by M-Pesa • Trusted by 10,000+ Sellers
            </div>

            <h1>
              Sell Anything.{' '}
              <span className="pls-highlight">Get Paid Instantly.</span>
            </h1>

            <p>
              Create payment links in seconds or build your complete online store.
              Share with customers on WhatsApp, Instagram, or anywhere.
              Get paid directly to M-Pesa.
            </p>

            <div className="pls-hero-actions">
              <Link to="/signup" className="pls-btn pls-btn-primary pls-btn-large pls-btn-icon">
                <span>Start Selling Free</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="pls-btn pls-btn-secondary pls-btn-large pls-btn-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>

            <div className="pls-hero-stats">
              <div className="pls-stat">
                <span className="pls-stat-number">10K+</span>
                <span className="pls-stat-label">Active Sellers</span>
              </div>
              <div className="pls-stat">
                <span className="pls-stat-number">KES 50M+</span>
                <span className="pls-stat-label">Payments Processed</span>
              </div>
              <div className="pls-stat">
                <span className="pls-stat-number">Instant</span>
                <span className="pls-stat-label">M-Pesa Payouts</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="pls-hero-visual">
            <div className="pls-phone-mockup">
              <div className="pls-phone-frame">
                <div className="pls-phone-notch" />
                <div className="pls-phone-screen">
                  <div className="pls-screen-content">
                    <div className="pls-app-header">
                      <div className="pls-app-title">My Sales</div>
                      <div className="pls-app-badge">Active</div>
                    </div>

                    <div className="pls-payment-link-preview">
                      <div className="pls-link-header">
                        <div className="pls-link-icon">🔗</div>
                        <div className="pls-link-info">
                          <h4>Premium Headphones</h4>
                          <p>Payment Link</p>
                        </div>
                      </div>
                      <div className="pls-link-amount">KES 4,500</div>
                      <div className="pls-link-actions">
                        <button className="pls-mini-btn pls-mini-btn-primary">Share Link</button>
                        <button className="pls-mini-btn pls-mini-btn-secondary">Copy URL</button>
                      </div>
                    </div>

                    <div className="pls-store-preview">
                      <div className="pls-product-grid">
                        {[
                          { emoji: '👟', name: 'Sneakers', price: 'KES 3,200' },
                          { emoji: '👕', name: 'T-Shirt', price: 'KES 1,500' },
                          { emoji: '⌚', name: 'Watch', price: 'KES 5,800' },
                          { emoji: '🎒', name: 'Backpack', price: 'KES 2,900' },
                        ].map((p, i) => (
                          <div key={i} className="pls-product-card">
                            <div className="pls-product-image">{p.emoji}</div>
                            <div className="pls-product-name">{p.name}</div>
                            <div className="pls-product-price">{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="pls-trust">
        <div className="pls-container pls-trust-content">
          <div className="pls-trust-text">Trusted Payment Infrastructure</div>
          <div className="pls-trust-logos">
            {[
              { icon: '📱', label: 'M-Pesa Integrated' },
              { icon: '🔒', label: 'Secure Payments' },
              { icon: '⚡', label: 'Instant Transfers' },
            ].map((t, i) => (
              <div key={i} className="pls-trust-logo">
                <div className="pls-trust-icon">{t.icon}</div>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="pls-features">
        <div className="pls-container">
          <div className="pls-section-header pls-animate">
            <span className="pls-section-tag">Two Powerful Features</span>
            <h2>Everything You Need to Sell Online</h2>
            <p>Choose your selling style. Payment links for quick sales or full stores for your catalog.</p>
          </div>

          <div className="pls-features-grid">
            {/* Payment Links */}
            <div className="pls-feature-block pls-feature-full pls-animate">
              <div className="pls-feature-visual">
                <div className="pls-feature-image">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <rect x="40" y="60" width="120" height="80" rx="12" fill="white" opacity="0.9" />
                    <circle cx="70" cy="90" r="12" fill="#00D98E" />
                    <rect x="90" y="80" width="50" height="8" rx="4" fill="#00D98E" opacity="0.6" />
                    <rect x="90" y="95" width="35" height="6" rx="3" fill="#00D98E" opacity="0.4" />
                    <path d="M50 120 L150 120 L145 135 L55 135 Z" fill="#00D98E" />
                    <text x="100" y="130" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">PAY NOW</text>
                  </svg>
                </div>
              </div>
              <div className="pls-feature-content">
                <h3>⚡ Instant Payment Links</h3>
                <p>
                  Perfect for freelancers, service providers, and quick sales. Create a payment link
                  in 10 seconds, set your price, and share it anywhere.
                </p>
                <ul className="pls-feature-list">
                  <li>Create unlimited payment links</li>
                  <li>Custom amounts or let customers choose</li>
                  <li>Share via WhatsApp, SMS, Instagram, Email</li>
                  <li>Track payments in real-time</li>
                  <li>Get paid directly to M-Pesa</li>
                  <li>Add product descriptions and images</li>
                </ul>
                <Link to="/signup" className="pls-btn pls-btn-primary">Create Payment Link →</Link>
              </div>
            </div>

            {/* Online Stores */}
            <div className="pls-feature-block pls-feature-full pls-animate">
              <div className="pls-feature-content">
                <h3>🏪 Complete Online Store</h3>
                <p>
                  Build your full product catalog with a beautiful storefront. Perfect for businesses
                  with multiple products. Customers browse, add to cart, and checkout seamlessly.
                </p>
                <ul className="pls-feature-list">
                  <li>Unlimited products with images</li>
                  <li>Organized categories and collections</li>
                  <li>Shopping cart and checkout</li>
                  <li>Custom store URL (yourname.payloom.co)</li>
                  <li>Inventory management</li>
                  <li>Customer order tracking</li>
                </ul>
                <Link to="/signup" className="pls-btn pls-btn-primary">Build Your Store →</Link>
              </div>
              <div className="pls-feature-visual">
                <div className="pls-feature-image">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <rect x="30" y="40" width="140" height="120" rx="12" fill="white" opacity="0.9" />
                    <rect x="40" y="55" width="50" height="45" rx="8" fill="#00D98E" opacity="0.8" />
                    <rect x="100" y="55" width="50" height="45" rx="8" fill="#00D98E" opacity="0.6" />
                    <rect x="40" y="110" width="50" height="45" rx="8" fill="#00D98E" opacity="0.7" />
                    <rect x="100" y="110" width="50" height="45" rx="8" fill="#00D98E" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="pls-how-it-works">
        <div className="pls-container">
          <div className="pls-section-header pls-animate">
            <span className="pls-section-tag">Simple &amp; Fast</span>
            <h2>Start Selling in 3 Steps</h2>
            <p>From signup to first sale in under 5 minutes</p>
          </div>

          <div className="pls-process-visual">
            <div className="pls-process-steps">
              {[
                {
                  num: '1',
                  title: 'Create Your Link or Store',
                  desc: 'Sign up free in 30 seconds with just your phone number. Choose to create a quick payment link or set up your complete online store with products, prices, and images.',
                },
                {
                  num: '2',
                  title: 'Share with Your Customers',
                  desc: "Get a unique shareable link instantly. Send it via WhatsApp, post on Instagram, share on Facebook, or send via SMS. Works on any device—no app download needed for your customers.",
                },
                {
                  num: '3',
                  title: 'Get Paid to M-Pesa Instantly',
                  desc: 'Customer pays via M-Pesa. Money hits your M-Pesa account automatically within seconds. Track all your sales, payments, and earnings in your dashboard. No delays, no hassle.',
                },
              ].map((step, i) => (
                <div key={i} className="pls-process-step pls-animate">
                  <div className="pls-process-number">
                    <span>{step.num}</span>
                  </div>
                  <div className="pls-process-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pls-cta-banner">
        <div className="pls-container pls-cta-content">
          <h2>Ready to Start Selling?</h2>
          <p>
            Join 10,000+ sellers already making money with PayLoom Instants.
            Create your first payment link or store in less than 60 seconds.
          </p>
          <div className="pls-cta-actions">
            <Link to="/signup" className="pls-btn pls-btn-white pls-btn-large pls-btn-icon">
              <span>Get Started Free</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="pls-btn pls-btn-outline pls-btn-large">Watch Demo Video</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="pls-social-proof">
        <div className="pls-container">
          <div className="pls-section-header pls-animate">
            <span className="pls-section-tag">Success Stories</span>
            <h2>Loved by Sellers Across Kenya</h2>
            <p>Real stories from sellers growing their business with PayLoom</p>
          </div>

          <div className="pls-testimonials-grid">
            {[
              {
                text: "I sell handmade jewelry on Instagram. PayLoom's payment links are perfect! I just comment the link, customer pays, and money is in my M-Pesa instantly.",
                name: 'Sarah Mwikali',
                role: 'Jewelry Designer, Nairobi',
                initials: 'SM',
              },
              {
                text: 'Built my entire fashion store in 20 minutes. My customers love how easy it is to browse and pay. Sales have tripled since switching to PayLoom!',
                name: 'James Kariuki',
                role: 'Fashion Retailer, Kisumu',
                initials: 'JK',
              },
              {
                text: "As a freelance designer, payment links have changed my life. No more chasing clients for payments. I send the link, they pay immediately. Simple!",
                name: 'Grace Lumumba',
                role: 'Graphic Designer, Mombasa',
                initials: 'GL',
              },
            ].map((t, i) => (
              <div key={i} className="pls-testimonial-card pls-animate">
                <div className="pls-testimonial-stars">★★★★★</div>
                <p className="pls-testimonial-text">"{t.text}"</p>
                <div className="pls-testimonial-author">
                  <div className="pls-author-avatar">{t.initials}</div>
                  <div className="pls-author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pls-footer">
        <div className="pls-container">
          <div className="pls-footer-grid">
            <div>
              <div className="pls-footer-brand">
                <div className="pls-logo-icon">P</div>
                <span>PayLoom Instants</span>
              </div>
              <p className="pls-footer-description">
                Empowering African sellers with instant payment links and beautiful online stores.
                Get paid faster, sell smarter, grow bigger.
              </p>
              <div className="pls-footer-social">
                <a href="https://x.com/payloom" target="_blank" rel="noopener noreferrer" className="pls-social-icon" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" height="16"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </a>
                <a href="https://linkedin.com/company/payloom" target="_blank" rel="noopener noreferrer" className="pls-social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="16" height="16"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 112 102.2 112c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </a>
                <a href="https://facebook.com/payloom" target="_blank" rel="noopener noreferrer" className="pls-social-icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" height="16"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.4 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </a>
                <a href="https://instagram.com/payloom" target="_blank" rel="noopener noreferrer" className="pls-social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="16" height="16"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
              </div>

              {/* Newsletter Signup */}
              <div className="pls-newsletter">
                <h4>Stay in the loop</h4>
                <p>Get tips, updates & seller success stories.</p>
                <form
                  className="pls-newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                    const email = input?.value?.trim();
                    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                      input.value = '';
                      alert('🎉 Subscribed! Check your inbox.');
                    }
                  }}
                >
                  <input type="email" placeholder="Enter your email" required maxLength={255} />
                  <button type="submit" className="pls-btn pls-btn-primary">Subscribe</button>
                </form>
              </div>
            </div>

            {[
              { title: 'Product', links: [
                { label: 'Payment Links', to: '/info/payment-links' },
                { label: 'Online Stores', to: '/info/online-stores' },
                { label: 'Pricing', to: '/info/pricing' },
                { label: 'Features', to: '/info/features' },
                { label: 'Mobile App', to: '/info/mobile-app' },
              ]},
              { title: 'Resources', links: [
                { label: 'Help Center', to: '/info/help' },
                { label: 'Tutorials', to: '/info/tutorials' },
                { label: 'Example Stores', to: '/info/example-stores' },
                { label: 'Blog', to: '/info/blog' },
                { label: 'Community', to: '/info/community' },
              ]},
              { title: 'Company', links: [
                { label: 'About Us', to: '/info/about' },
                { label: 'Careers', to: '/info/careers' },
                { label: 'Press', to: '/info/press' },
                { label: 'Partners', to: '/info/partners' },
                { label: 'Contact', to: '/info/contact' },
              ]},
              { title: 'Legal', links: [
                { label: 'Privacy Policy', to: '/legal' },
                { label: 'Terms of Service', to: '/legal' },
                { label: 'Refund Policy', to: '/legal' },
                { label: 'Security', to: '/legal' },
              ]},
            ].map((section, i) => (
              <div key={i} className="pls-footer-section">
                <h4>{section.title}</h4>
                <ul className="pls-footer-links">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pls-footer-bottom">
            <div>© 2026 PayLoom Instants. All rights reserved.</div>
            <div>Empowering sellers across Africa 🚀</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
