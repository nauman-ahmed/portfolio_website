import { useState } from 'react';
import { featuredProjects, archiveProjects } from '../data/projects';
import FeaturedProject from '../components/FeaturedProject';
import ProjectArchive from '../components/ProjectArchive';
import OverviewPanel from '../components/OverviewPanel';

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="work" id="project">
      <div className="work__inner">
        <header className="sec-head" data-reveal>
          <span className="sec-head__num">01</span>
          <div>
            <h2 className="sec-head__title">Featured work</h2>
            <p className="sec-head__note">
              Six projects where the result was measured, not just shipped.
            </p>
          </div>
        </header>

        <div className="entries">
          {featuredProjects.map((p, i) => (
            <FeaturedProject key={p.id} project={p} index={i} onOpen={setOpen} />
          ))}
        </div>

        <ProjectArchive projects={archiveProjects} />
      </div>

      <OverviewPanel project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
