import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedProject9({ currentProjectId }) {
  // Find the next project in rotation
  const currentIndex = portfolios2.findIndex(item => item.id === currentProjectId);
  
  // Get next project, or loop back to first if we're at the end
  const nextIndex = currentIndex >= 0 && currentIndex < portfolios2.length - 1 
    ? currentIndex + 1 
    : 0;
  
  const nextProject = portfolios2[nextIndex];
  
  // If no next project found (shouldn't happen), return null
  if (!nextProject) return null;

  return (
    <div className="container">
      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
        <span className="text-outline">Next Project</span>
      </h2>
      {/* Portfolio Item */}
      <div
        className={`portfolio-2-item mb-100 mb-sm-50 mix ${nextProject.categories.join(
          " ",
        )}`}
      >
        <div className="row">
          <div className="col-md-8 mb-sm-30 order-md-first">
            <div className="portfolio-2-image">
              <Link 
                href={nextProject.externalUrl || `/bold-portfolio-single-dark/${nextProject.id}`} 
                target={nextProject.externalUrl ? "_blank" : undefined} 
                rel={nextProject.externalUrl ? "noopener noreferrer" : undefined}
              >
                <Image
                  width={1200}
                  height={819}
                  src={nextProject.imageUrl}
                  alt="Image Description"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <hr className="black thick mt-0 mb-20 d-none d-md-block" />
            <h3 className="portfolio-2-title font-alt mb-20">
              <Link 
                href={nextProject.externalUrl || `/bold-portfolio-single-dark/${nextProject.id}`} 
                target={nextProject.externalUrl ? "_blank" : undefined} 
                rel={nextProject.externalUrl ? "noopener noreferrer" : undefined}
              >
                {nextProject.title}
              </Link>
            </h3>
            <p className="portfolio-2-descr">{nextProject.description}</p>
            <div>
              <Link
                href={`/bold-portfolio-single-dark/${nextProject.id}`}
                className="link-hover-anim underline align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  View Project
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  View Project
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Item */}
    </div>
  );
}
