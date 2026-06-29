import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import { allPortfolios } from "@/data/portfolio";
import Image from "next/image";

const portfolioNav = [
  { href: "/#home", text: "Home" },
  { href: "/#about", text: "About" },
  { href: "/#portfolio", text: "Portfolio" },
  { href: "/#contact", text: "Contact" },
];

export const metadata = {
  title: "Code_V",
  description: "Code_V landing page",
};

function getPortfolioMedia(portfolioItem) {
  const gallery =
    portfolioItem.gallery?.length > 0
      ? portfolioItem.gallery
      : [portfolioItem.imageUrl || portfolioItem.imgSrc].filter(Boolean);

  const bgImage = gallery[0] || "/assets/images/demo-bold/section-bg-2.jpg";
  const scrollImages = gallery.length > 1 ? gallery.slice(1) : gallery;

  return { bgImage, scrollImages };
}

export default async function BoldPortfolioSinglePageDark(props) {
  const params = await props.params;
  const portfolioItem =
    allPortfolios.find((elm) => elm.id == params.id) || allPortfolios[0];

  const { bgImage, scrollImages } = getPortfolioMedia(portfolioItem);

  return (
    <>
      <div className="theme-bold portfolio-single-page">
        <div className="dark-mode">
          <div className="page" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header2 links={portfolioNav} />
            </nav>

            <main id="main">
              <section
                className="page-section bg-dark-alpha-30 light-content portfolio-single-page__hero"
                style={{ backgroundImage: `url("${bgImage}")` }}
                id="home"
              >
                <div className="container position-relative pt-sm-40">
                  <div className="text-center">
                    <h1 className="hs-title-4 font-alt mb-0">
                      <span
                        className="wow charsAnimInLong-1"
                        data-splitting="chars"
                      >
                        <AnimatedText text={portfolioItem.title} />
                      </span>
                    </h1>
                  </div>
                </div>
              </section>

              <section className="page-section bg-dark-1 light-content pt-80 pb-80">
                <div className="container position-relative">
                  <div className="portfolio-single-page__content">
                    {/* Glassmorphism Details Card */}
                    <div
                      className="portfolio-glass-card wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <div className="portfolio-glass-card__header">
                        <h2 className="h3 mb-0 font-alt">Project Details</h2>
                        {portfolioItem.externalUrl && (
                          <a
                            href={portfolioItem.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-btn"
                          >
                            <span>View Project</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                              />
                            </svg>
                          </a>
                        )}
                      </div>

                      <div className="portfolio-glass-card__body">
                        {portfolioItem.date && (
                          <div className="meta-item">
                            <span className="meta-label">Released</span>
                            <span className="meta-value">
                              {portfolioItem.date}
                            </span>
                          </div>
                        )}

                        {portfolioItem.description && (
                          <div className="meta-item description-block">
                            <span className="meta-label">Overview</span>
                            <p className="meta-value description-text">
                              {portfolioItem.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="portfolio-single-page__gallery wow fadeInUp">
                      <div className="portfolio-single-page__gallery-header">
                        <h3 className="h4 mb-0 font-alt">Gallery</h3>
                        <span className="small text-white-50">
                          Scroll horizontally →
                        </span>
                      </div>

                      <div className="portfolio-single-page__scroll">
                        {scrollImages.map((src, i) => (
                          <div
                            key={`${src}-${i}`}
                            className="portfolio-single-page__slide"
                          >
                            <div className="portfolio-single-page__frame">
                              <Image
                                src={src}
                                alt={`${portfolioItem.title} image ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 72vw, 320px"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                priority={i < 2}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="white opacity-015 mt-0 mb-0" />

              <section className="page-section bg-dark-1 light-content">
                <RelatedProject9 />
              </section>
            </main>

            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-single-page__hero {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 42vh;
          display: flex;
          align-items: center;
        }

        .portfolio-single-page__content {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* Modernized Glassmorphism Card styling */
        .portfolio-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .portfolio-glass-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 24px;
          margin-bottom: 32px;
        }

        /* Glassmorphic Animated Button */
.glass-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 12px 28px;
  border-radius: 50px;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  /* FIXED: Apply transition to the button AND all child elements globally */
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.glass-btn * {
  /* This ensures the inner span and SVG animate smoothly at the exact same pace */
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Explicitly targets the button, its spans, and icons during hover */
.glass-btn:hover {
  background: #ffffff !important;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.25);
  border-color: #ffffff !important;
}

/* Switches text and fill smoothly without text-bg layout bugs */
.glass-btn:hover,
.glass-btn:hover span,
.glass-btn:hover svg {
  color: #000000 !important;
  fill: #000000 !important;
}

/* Micro-interaction for the arrow icon */
.glass-btn svg {
  transition: transform 0.3s ease;
}

.glass-btn:hover svg {
  transform: translate(2px, -2px);
}

        /* Card Content Layout */
        .portfolio-glass-card__body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .portfolio-glass-card__body {
            grid-template-columns: 200px 1fr;
          }
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .meta-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 700;
        }

        .meta-value {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
        }

        .description-block {
          grid-column: 1 / -1;
        }
        
        @media (min-width: 768px) {
          .description-block {
            grid-column: 2 / 3;
          }
        }

        .description-text {
          line-height: 1.75;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 4px;
        }

        /* Gallery Overrides */
        .portfolio-single-page__gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .portfolio-single-page__scroll {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding: 4px 4px 24px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .portfolio-single-page__scroll::-webkit-scrollbar {
          height: 6px;
        }

        .portfolio-single-page__scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
        }

        .portfolio-single-page__scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }

        .portfolio-single-page__slide {
          flex: 0 0 auto;
          scroll-snap-align: start;
        }

        .portfolio-single-page__frame {
          position: relative;
          width: min(300px, 75vw);
          aspect-ratio: 9 / 16;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          background: #13161c;
          transition: transform 0.4s ease;
        }
        
        .portfolio-single-page__frame:hover {
          transform: translateY(-4px);
        }

        .opacity-015 {
          opacity: 0.15;
        }
      `}</style>
    </>
  );
}
