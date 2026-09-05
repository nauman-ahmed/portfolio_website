# Smart Travel Planner - Agentic RAG System

**Stack:** Python, CrewAI, Llama 3, Ollama, ChromaDB, n8n, Streamlit, Docker

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Smart Travel Planner** is a fully local agentic RAG system that turns a travel brief into a researched, budgeted itinerary. A team of cooperating AI agents handles destination research, cost analysis, and day-by-day planning - and the entire stack runs on your own machine, with no external model API in the loop.

**My Role:** AI Systems Engineer and Generative AI Engineer - designed and developed the agent architecture, retrieval layer, ingestion pipelines, and containerized deployment.

**Project Overview:**

**1. Fully Local Inference:**

Llama 3 served through Ollama handles all generation on-device, so trip data never leaves the machine and there is no per-token API cost or rate limit to design around.

**2. Multi-Agent Workflows:**

CrewAI orchestrates specialized agents for destination research, budget analysis, and itinerary generation, each contributing its own findings to a shared plan rather than relying on one monolithic prompt.

**3. Retrieval-Augmented Generation:**

ChromaDB provides the vector store backing retrieval, grounding agent output in ingested travel guides instead of unverified model recall.

**4. Automated Data Ingestion:**

ETL pipelines continuously pull weather, currency, and travel-guide data, keeping recommendations aligned with current conditions and exchange rates.

**5. Interactive Interface:**

A Streamlit application provides the planning front end, exposing agent progress and the resulting itinerary without a separate frontend build.

**6. Reproducible Deployment:**

The full stack is dockerized, so the model runtime, vector store, automation layer, and UI come up together with a single command.

## Project Description

**1. Agent Architecture (CrewAI):**

**Destination Research Agent:**

- Gathers information on candidate destinations from the ingested travel-guide corpus.

- Surfaces attractions, regional context, and practical considerations for each option.

**Budget Analysis Agent:**

- Evaluates trip costs against the traveller's stated budget.

- Uses live currency data so estimates reflect current exchange rates.

**Itinerary Generation Agent:**

- Synthesizes research and budget findings into a structured day-by-day plan.

- Sequences activities into a coherent schedule rather than an unordered list.

**Orchestration:**

- CrewAI coordinates task handoff between agents, letting each specialize while contributing to one shared output.

---

**2. Retrieval Layer (ChromaDB):**

**Vector Store:**

- ChromaDB as the local embedding store for ingested travel content.

- Travel guides chunked and embedded for granular semantic retrieval.

- Retrieved passages supplied as grounding context to the agents at query time.

---

**3. Local LLM Inference (Ollama / Llama 3):**

**Model Runtime:**

- Llama 3 served locally through Ollama for all agent reasoning and generation.

- No external inference provider, keeping the system fully self-contained and offline-capable.

- Removes per-token cost and third-party rate limits from the design constraints.

---

**4. Data Pipelines (n8n):**

**Automated ETL:**

- Weather ingestion supplying current and forecast conditions for candidate destinations.

- Currency ingestion feeding live exchange rates into budget calculations.

- Travel-guide ingestion extracting and loading reference content into the vector store.

- Pipelines scheduled and orchestrated in n8n so the knowledge base refreshes without manual intervention.

---

**5. User Interface (Streamlit):**

**Planning Front End:**

- Streamlit application collecting trip parameters and budget constraints.

- Displays agent activity and intermediate findings as the plan is assembled.

- Presents the finished itinerary alongside the supporting research and cost breakdown.

---

**6. Deployment:**

**Containerization:**

- Full stack dockerized covering the model runtime, vector store, automation layer, and UI.

- Reproducible local deployment bringing every service up together.

- Self-contained environment requiring no cloud account or external service configuration.

## Technologies Used

**1. Agent Framework:**

- CrewAI for multi-agent orchestration and inter-agent task handoff.

- Role-specialized agents for research, budgeting, and itinerary planning.

**2. Language Model Stack:**

- Llama 3 as the reasoning and generation model.

- Ollama as the local model runtime and serving layer.

- Prompt engineering tailored to each agent's role and output format.

**3. Retrieval:**

- Retrieval-augmented generation grounding responses in ingested travel content.

- ChromaDB as the local vector database for embeddings and similarity search.

**4. Data Engineering:**

- n8n for automated ETL workflow orchestration and scheduling.

- Weather, currency, and travel-guide ingestion pipelines.

**5. Application Layer:**

- Python as the primary implementation language across agents and pipelines.

- Streamlit for the interactive planning interface.

**6. Infrastructure:**

- Docker for containerizing the complete stack.

- Reproducible single-command local deployment.

## Libraries & Dependencies

**Agent and LLM Libraries:**

1. **CrewAI** - Multi-agent framework coordinating research, budget, and itinerary agents.

2. **Ollama** - Local model server providing Llama 3 inference.

3. **Llama 3** - Open-weight language model powering agent reasoning and generation.

**Retrieval Libraries:**

4. **ChromaDB** - Local vector database storing embeddings for travel-guide retrieval.

**Data Pipeline Libraries:**

5. **n8n** - Workflow automation platform running the weather, currency, and guide ETL jobs.

**Application Libraries:**

6. **Python** - Core implementation language for agents, retrieval, and pipeline logic.

7. **Streamlit** - Rapid interactive UI framework for the planning interface.

**Infrastructure:**

8. **Docker** - Container platform packaging the full stack for reproducible local deployment.
