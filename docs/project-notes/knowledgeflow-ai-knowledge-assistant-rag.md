# KnowledgeFlow - AI Knowledge Assistant (RAG)

**Stack:** Next.js, React, TypeScript, Clerk, FastAPI, Python, PostgreSQL, pgvector, LangChain, LangGraph, Langfuse, Redis, Pydantic, RAGAS, Docker

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**KnowledgeFlow** is a ChatGPT-style knowledge assistant built over a curated document library. It pairs a Next.js chat interface with a FastAPI retrieval-augmented generation (RAG) backend, so answers are grounded in your own documents and every claim is traceable back to its source.

**My Role:** AI Systems Engineer - full-stack and GenAI integration, covering the retrieval pipeline, the agent graph, observability, and deployment.

**Project Overview:**

**1. Grounded Question Answering:**

Retrieval-augmented generation over a PostgreSQL/pgvector store, so responses are drawn from the indexed document library rather than model memory alone.

**2. Citation-Backed Answers:**

Retrieved passages surface in the UI as citation chips, letting users verify exactly which source and section an answer came from.

**3. Multi-Step Agent Reasoning:**

A LangGraph agent decomposes questions through a Planner to Researcher to Answer flow, with tool access for steps that need more than a single retrieval pass.

**4. Streaming Chat Experience:**

Server-Sent Events stream tokens to the client as they are generated, alongside persistent conversation history and a dedicated search interface.

**5. Observability and Evaluation:**

Langfuse traces every run end to end, and an evaluation CLI scores answer faithfulness using RAGAS metrics so regressions are caught before they ship.

## Project Description

**1. Frontend Architecture (Next.js 16 / React / TypeScript):**

**Chat Interface:**

- ChatGPT-style conversational UI with token-by-token streaming over Server-Sent Events.

- Persistent conversation history so users can revisit and continue earlier threads.

- Citation chips rendered inline with answers, linking each response back to its source passages.

- Dedicated search UI for querying the document library directly, outside of a chat turn.

**Authentication:**

- Clerk handles sign-in, session management, and route protection.

- Per-user scoping of conversation history and search activity.

---

**2. Backend Architecture (FastAPI / Python):**

**API Layer:**

- FastAPI application exposing streaming chat, search, and ingestion endpoints.

- Server-Sent Events transport for incremental token delivery to the client.

- Pydantic models enforce structured, validated outputs across the request and response boundary.

- Guardrails applied to model output to keep responses within expected shape and scope.

**Memory:**

- Redis-backed conversation memory for fast retrieval of session state across turns.

---

**3. RAG Pipeline (PostgreSQL / pgvector):**

**Ingestion:**

- Command-line ingest tool for loading and indexing the document library.

- LangChain document loaders covering PDF, DOCX, TXT, and Markdown sources.

- Chunked embeddings written to PostgreSQL with the pgvector extension.

**Retrieval:**

- Cosine similarity search over the vector store to select the most relevant passages.

- Retrieved context passed to the agent and returned to the UI as verifiable citations.

---

**4. Agent Orchestration (LangGraph):**

**Planner to Researcher to Answer:**

- Planner node breaks an incoming question into the steps needed to answer it.

- Researcher node executes retrieval and tool calls to gather supporting evidence.

- Answer node synthesizes the gathered context into a final, cited response.

- Tool integration allows the graph to reach beyond plain retrieval where a question requires it.

---

**5. Observability and Evaluation:**

**Tracing:**

- Langfuse instrumentation captures full traces of agent runs, retrievals, and model calls.

- Per-step visibility makes it possible to diagnose where a weak answer originated.

**Evaluation:**

- Evaluation CLI scoring answer quality on faithfulness using RAGAS metrics.

- Repeatable runs support comparison across prompt and pipeline changes.

---

**6. Deployment and Tooling:**

**Infrastructure:**

- Docker Compose for reproducible local development across API, database, and Redis.

- Continuous integration pipeline for automated checks on each change.

- Deployment configuration targeting Vercel for the frontend and Render for the backend.

- Accompanying project documentation covering setup, ingestion, and operation.

## Technologies Used

**1. Frontend:**

- Next.js 16 for the React application framework and routing.

- TypeScript for static typing across the client codebase.

- Clerk for authentication, session handling, and protected routes.

- Server-Sent Events for streaming model output to the browser.

**2. Backend:**

- FastAPI for the asynchronous Python API layer.

- Pydantic for structured output validation and schema enforcement.

- Redis for conversation memory and session state.

**3. AI / GenAI Stack:**

- LangChain for document loading and RAG pipeline components.

- LangGraph for stateful, multi-step agent orchestration.

- Prompt engineering across the Planner, Researcher, and Answer stages.

- Guardrails for constraining and validating model responses.

**4. Data and Retrieval:**

- PostgreSQL as the primary datastore.

- pgvector extension for vector storage and similarity search.

- Cosine similarity retrieval for ranking candidate passages.

**5. Observability and Quality:**

- Langfuse for tracing, monitoring, and run inspection.

- RAGAS for faithfulness scoring of generated answers.

- Evaluation CLI for repeatable pipeline benchmarking.

**6. Infrastructure:**

- Docker Compose for local multi-service orchestration.

- CI pipeline for automated build and test runs.

- Vercel and Render deployment configurations.

## Libraries & Dependencies

**Frontend Libraries:**

1. **Next.js 16** - React framework providing routing, server rendering, and API routes.

2. **React** - Component library underpinning the chat and search interfaces.

3. **TypeScript** - Static type checking across the frontend codebase.

4. **Clerk** - Managed authentication, user sessions, and route protection.

**Backend Libraries:**

5. **FastAPI** - Asynchronous Python web framework serving chat, search, and ingest endpoints.

6. **Pydantic** - Data validation and structured output modelling.

7. **Redis** - In-memory store backing conversation memory.

**AI / RAG Libraries:**

8. **LangChain** - Document loaders for PDF, DOCX, TXT, and Markdown plus RAG pipeline utilities.

9. **LangGraph** - Graph-based agent framework driving the Planner, Researcher, and Answer nodes.

10. **Langfuse** - LLM observability, tracing, and run analytics.

11. **RAGAS** - Retrieval-augmented generation evaluation metrics, including faithfulness.

**Data Libraries:**

12. **PostgreSQL** - Relational datastore for documents, chunks, and history.

13. **pgvector** - PostgreSQL extension enabling vector similarity search.

**Infrastructure:**

14. **Docker Compose** - Local orchestration of API, database, and cache services.

15. **Vercel / Render** - Hosting targets for the frontend and backend respectively.
