import thesisPdf from '../assets/files/Masters-Thesis-Nauman-Ahmed.pdf';

/**
 * Curated project data — phase 03 content pass.
 *
 * The old `projectDetails.js` carried 14,269 words across 67 modal buttons, with
 * a "Libraries" tab that was 42% redundant with "Tech". Everything cut is kept
 * verbatim in docs/project-notes/ so nothing is lost; the site now carries the
 * short version and links out for depth.
 *
 * Word budget (see the redesign plan, §05):
 *   outcome  <=  25 words  — the card line, always visible
 *   overview <= 150 words  — one panel, one click, no tabs
 *   anything longer lives in docs/project-notes/ or the repo README
 */

export const featuredProjects = [
  {
    id: 'coverage-path-planning',
    title: 'Multi-Agent 3D Coverage Path Planning',
    kind: "Master's thesis · University of Passau",
    imagePath: '/videos/Reinforcement_Learning.webp',
    outcome:
      'The first work to apply Liquid Neural Networks to multi-agent coverage path planning as an end-to-end learned policy.',
    metric: { value: '93.0%', label: 'Mean coverage, 100 held-out environments' },
    stack: ['PyTorch', 'PPO', 'Liquid Time-Constant', 'Multi-Agent RL', 'Python'],
    overview: `
      <p>Coverage path planning asks how a team of UAVs should sweep a space completely,
      under constraints that make naive routes unsafe. Liquid Time-Constant networks had
      never been applied to it as a learned policy — that gap is the thesis.</p>

      <p>I built a 20×20×6 voxel simulator with terrain, volumetric no-fly zones, safe
      landing zones and a hard movement budget, enforced through legal-action masking and
      forced-return safety. The policy combines multi-branch spatial feature extraction, an
      LTC recurrent core, and attention-based communication between agents, trained with PPO.</p>

      <p>Across 11,436 episodes coverage and reward improved consistently, reaching ~97% in
      late training. On 100 held-out fixed-seed environments the selected checkpoint achieved
      <strong>93.0% mean coverage at budget 150</strong> and 88.0% at budget 100, with
      <strong>zero collision penalties</strong> — the policy generalises rather than memorising.</p>
    `,
    links: [{ label: 'Read the thesis', href: thesisPdf }],
  },

  {
    id: 'knowledgeflow',
    title: 'KnowledgeFlow',
    kind: 'AI knowledge assistant · RAG',
    videoPath: '/videos/knowledgeFlow.mp4',
    outcome:
      'A ChatGPT-style assistant that answers from a curated document library and cites the passage behind every claim.',
    metric: { value: 'Planner → Researcher → Answer', label: 'LangGraph agent, with tool calling' },
    stack: ['Next.js', 'FastAPI', 'LangGraph', 'pgvector', 'Redis', 'Langfuse'],
    overview: `
      <p>An assistant is only useful over your own documents if you can check what it said.
      KnowledgeFlow pairs a streaming Next.js chat interface with a FastAPI RAG backend, and
      surfaces retrieved passages as citation chips so every answer is traceable.</p>

      <p>Retrieval runs on PostgreSQL with pgvector: an ingest CLI loads PDF, DOCX, TXT and
      Markdown through LangChain loaders into a chunk store, and cosine similarity ranking
      stays in the database as an RPC rather than in application code.</p>

      <p>A LangGraph agent decomposes questions through Planner, Researcher and Answer nodes
      with tool access. Pydantic enforces structured output, Redis holds conversation memory,
      and Langfuse traces every run — with an eval CLI scoring answer faithfulness so
      regressions are caught before they ship.</p>
    `,
    links: [{ label: 'Repository', href: 'https://github.com/nauman-ahmed/KnowledgeFlow' }],
  },

  {
    id: 'leadflow',
    title: 'LeadFlow AI',
    kind: 'Inbound lead qualification · chat + voice',
    videoPath: '/videos/leadFlow.mp4',
    outcome:
      'Qualifies inbound leads over chat or phone, then books the good ones straight into a calendar.',
    metric: { value: 'Chat + voice', label: 'One backend, two channels' },
    stack: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'n8n', 'Vapi'],
    overview: `
      <p>An embeddable React widget drops into any site with a single script tag and talks to a
      TypeScript Next.js API. Vapi extends the same qualification logic to inbound phone calls,
      so chat and voice share one backend and one lead pipeline. The assistant works in English
      and French.</p>

      <p>Answers are grounded by retrieval over Supabase Postgres with pgvector, with cosine
      similarity exposed as a database RPC. Heuristic scoring ranks each lead, and qualified
      prospects are handed to Cal.com — written back idempotently, so a replayed webhook can
      never produce a duplicate booking.</p>

      <p>n8n handles the automation: Cal.com webhooks are HMAC-verified before anything is
      trusted, and CRM events fire and forget so downstream work never blocks a reply. An admin
      dashboard surfaces leads, transcripts and appointments.</p>
    `,
    links: [{ label: 'Repository', href: 'https://github.com/nauman-ahmed/LeadFlow-AI' }],
  },

  {
    id: 'essay-scoring',
    title: 'Automated Essay Scoring',
    kind: 'NLP · transformers',
    imagePath: '/videos/AutomatedEssayScoring.webp',
    outcome:
      'Transformer-based essay grading that reaches close agreement with human graders.',
    metric: { value: '0.81', label: "Cohen's κ against human scores" },
    stack: ['RoBERTa', 'DeBERTa', 'MiniLM', 'SpaCy', 'Optuna', 'Python'],
    overview: `
      <p>An end-to-end pipeline that grades written essays, built on RoBERTa, DeBERTa and
      MiniLM. Crucially it also implements TF-IDF and Word2Vec baselines, so the transformers
      were measured against established methods rather than adopted on assumption.</p>

      <p>Raw embeddings miss qualities that matter in writing, so the models are fed engineered
      features too: linguistic structure via SpaCy, sentiment via VADER, and readability
      metrics capturing complexity. Optuna handles hyperparameter search, replacing manual
      tuning with systematic optimisation.</p>

      <p>Evaluation uses Cohen's κ rather than accuracy, because raw accuracy overstates
      performance on ordinal grading tasks. The system reached <strong>κ = 0.81</strong> —
      high agreement on a task where human graders themselves disagree.</p>
    `,
    links: [
      { label: 'Repository', href: 'https://github.com/nauman-ahmed/ai_engineering_lab-main' },
    ],
  },

  {
    id: 'smart-travel',
    title: 'Smart Travel Planner',
    kind: 'Agentic RAG · fully local',
    videoPath: '/videos/smartTravel.mp4',
    outcome:
      'A multi-agent travel planner that runs entirely on your own machine — no external model API.',
    metric: { value: '100% local', label: 'Llama 3 via Ollama, no data leaves the machine' },
    stack: ['CrewAI', 'Llama 3', 'Ollama', 'ChromaDB', 'n8n', 'Streamlit'],
    overview: `
      <p>Turns a travel brief into a researched, budgeted itinerary using cooperating agents —
      and the whole stack runs locally. Llama 3 served through Ollama handles every generation
      on-device, so trip data never leaves the machine and there is no per-token cost or rate
      limit to design around.</p>

      <p>CrewAI orchestrates three specialists: a destination researcher working from the
      ingested guide corpus, a budget analyst using live currency data, and an itinerary
      generator that sequences the findings into a day-by-day plan. ChromaDB provides the local
      vector store that grounds them.</p>

      <p>n8n runs automated ETL for weather, currency and travel-guide ingestion so the
      knowledge base stays current, Streamlit provides the interface, and the full stack is
      dockerised for reproducible local deployment.</p>
    `,
    links: [],
  },

  {
    id: 'av-security',
    title: 'Autonomous Systems Security',
    kind: 'Risk modelling · CARLA simulation',
    imagePath: '/videos/RiskMitigation.webp',
    outcome:
      'Quantifies what a cyberattack on a self-driving system actually costs, across four dimensions.',
    metric: { value: 'S · F · O · P', label: 'Safety, Financial, Operational, Privacy' },
    stack: ['CARLA', 'Threat Modelling', 'Risk Assessment', 'Python'],
    overview: `
      <p>Attacks on autonomous vehicles are usually described qualitatively. This work makes the
      consequences measurable: attacks are simulated in CARLA, scored across four independent
      dimensions, and mitigations prioritised by assessed risk rather than intuition.</p>

      <p>Two points of compromise were modelled — steering manipulation, which targets the
      control path, and camera spoofing, which targets the perception layer the driving stack
      depends on. Simulation makes consequences observable that would be unsafe to test on real
      roads.</p>

      <p>The SFOP framework scores Safety, Financial, Operational and Privacy impact separately,
      so one severe consequence cannot mask the others. Mathematical models estimate impact from
      driving context and system state — the same attack is far more severe at speed than in a
      stationary vehicle. Safety is what separates this from ordinary IT security: a compromised
      web server does not injure anyone.</p>
    `,
    links: [],
  },
];

/**
 * Everything else — a row each, no modal. Depth lives in docs/project-notes/.
 * `year` is intentionally null where the date isn't recorded anywhere reliable;
 * these need filling in rather than guessing.
 */
export const archiveProjects = [
  { title: 'Passenger Volume Prediction', kind: 'DB Regio · time series forecasting', year: null, stack: ['Machine Learning', 'Time Series', 'Feature Engineering'], href: null },
  { title: 'AI-Powered Story Generation', kind: 'LLM · content moderation', year: null, stack: ['Django', 'Mixtral-8x7B', 'BERT', 'PyTorch'], href: null },
  { title: 'Shannon Associates', kind: 'Digital artist platform', year: null, stack: ['React', 'Node.js', 'MongoDB', 'AWS S3'], href: null },
  { title: 'Academic Assistant', kind: 'Course catalog semantic search', year: null, stack: ['Django', 'sentence-transformers', 'scikit-learn'], href: null },
  { title: 'DEWA', kind: 'Energy management platform (IoT)', year: null, stack: ['React', 'Node.js', 'IoT', 'PostgreSQL'], href: null },
  { title: 'Conversational Campus Assistant', kind: 'University cafeteria & news', year: null, stack: ['Django', 'Transformers', 'PyTorch', 'Prometheus'], href: null },
  { title: 'ShutterDown', kind: 'Event management system', year: null, stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'], href: null },
  { title: 'POS System', kind: 'Point of sale', year: null, stack: ['React', 'Node.js', 'MongoDB'], href: null },
  { title: 'Stock Tracking App', kind: 'Inventory tracking', year: null, stack: ['React', 'Node.js', 'MongoDB'], href: null },
  { title: 'Liver Disease Analytics', kind: 'Interactive data visualisation', year: null, stack: ['D3.js', 'JavaScript'], href: null },
  { title: 'Real-Time Assessment Scoring', kind: 'Simulation-based grading platform', year: null, stack: ['React', 'Flask', 'MongoDB'], href: null },
];
