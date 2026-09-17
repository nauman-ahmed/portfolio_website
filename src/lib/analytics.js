import { track } from '@vercel/analytics';

/**
 * Conversion events.
 *
 * Page views alone say how many people arrive, not what they do. These are the
 * actions that actually indicate interest, so the Vercel dashboard can answer
 * "does anyone open the projects?" and "how many readers reach the CV?".
 *
 * No personal data is sent — only the event name and a project/section id.
 */
export const events = {
  cvDownloaded: () => track('cv_downloaded'),
  thesisOpened: (from) => track('thesis_opened', { from }),
  projectOpened: (id) => track('project_overview_opened', { project: id }),
  repoClicked: (id) => track('repo_link_clicked', { project: id }),
  contactStarted: () => track('contact_form_started'),
  contactSent: () => track('contact_form_sent'),
  contactFailed: (reason) => track('contact_form_failed', { reason: String(reason).slice(0, 80) }),
};

export default events;
