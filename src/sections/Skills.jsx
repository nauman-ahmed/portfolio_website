/**
 * Text-first rather than a 48-icon wall. Icon grids read as padding; a labelled
 * list is faster to scan and puts the AI work first, which is the point.
 */
const groups = [
  {
    title: 'Applied AI & LLM systems',
    lead: true,
    items: ['LangChain', 'LangGraph', 'RAG', 'AI agents', 'Tool calling', 'Semantic search', 'CrewAI', 'Ollama', 'ChromaDB', 'Langfuse', 'MCP', 'n8n'],
  },
  {
    title: 'Machine learning & NLP',
    lead: true,
    items: ['PyTorch', 'Hugging Face Transformers', 'RoBERTa', 'DeBERTa', 'MiniLM', 'spaCy', 'Optuna', 'Embeddings', 'Sentiment analysis', 'Reinforcement learning (PPO)'],
  },
  {
    title: 'Programming',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & data',
    items: ['FastAPI', 'Node.js', 'Express', 'Django', 'Flask', 'REST APIs', 'GraphQL', 'PostgreSQL', 'pgvector', 'Redis', 'Supabase', 'MongoDB'],
  },
  {
    title: 'Web',
    items: ['React', 'Next.js', 'React Native', 'Vue.js', 'Angular', 'D3.js'],
  },
  {
    title: 'Cloud & infrastructure',
    items: ['AWS (EC2, Lambda, S3, IAM)', 'Docker', 'CI/CD', 'Terraform', 'Linux', 'Git'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Playwright'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="work__inner">
        <header className="sec-head">
          <span className="sec-head__num">03</span>
          <div>
            <h2 className="sec-head__title">Skills</h2>
            <p className="sec-head__note">Tools I reach for, heaviest first.</p>
          </div>
        </header>

        <dl className="sgrid">
          {groups.map((g) => (
            <div className={`sgroup ${g.lead ? 'sgroup--lead' : ''}`} key={g.title}>
              <dt className="sgroup__title">{g.title}</dt>
              <dd className="sgroup__items">
                {g.items.map((item) => (
                  <span className="sitem" key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
