# Academic Assistant - Course Catalog Search

**Stack:** Django, Python, React, JavaScript, SQLite, sentence-transformers, scikit-learn, pandas, numpy, pdfplumber, Bootstrap

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Academic Assistant for Course Catalog Search** is an intelligent AI-powered system that revolutionizes how students and faculty explore university course catalogs using advanced natural language processing and semantic search capabilities.

**Project Overview:**

**1. Intelligent Course Discovery:**

Advanced semantic search engine that processes natural language queries to find relevant courses, instructors, and academic information from university course catalogs.

**2. Multi-Modal Query Processing:**

Handles diverse query types including ECTS credit lookups, instructor searches, course content exploration, learning outcomes analysis, and personalized course recommendations.

**3. Advanced NLP Pipeline:**

Implements sentence transformers with cosine similarity for intelligent course matching, supporting both German and English course descriptions with multilingual processing capabilities.

**4. Real-Time Chat Interface:**

Interactive web-based assistant with dynamic query processing, providing instant responses to academic inquiries with context-aware recommendations.

**5. Comprehensive Data Processing:**

Automated PDF extraction and parsing system that processes complex university course catalogs, extracting structured data for intelligent search and recommendation systems.

## Project Description

**1. Backend Architecture (Django/Python):**

**Web Framework:**

- Django 4.2.15 with Django REST Framework for robust API development.

- SQLite database with Django ORM for efficient data management.

- Modular app structure with separate modules for assistant, moderation, and story features.

- RESTful API endpoints with comprehensive error handling and validation.

**AI/ML Integration:**

- sentence-transformers 3.0.1 for semantic embedding generation using all-MiniLM-L6-v2 model.

- scikit-learn 1.5.1 for cosine similarity calculations and machine learning utilities.

- Dynamic query classification system with pattern recognition for intelligent routing.

- Vector search implementation for semantic course matching and recommendations.

---

**2. Data Processing Pipeline:**

**PDF Processing:**

- pdfplumber for extracting course information from complex PDF documents.

- Advanced table parsing and data structuring from university course catalogs.

- Multi-language support for German and English course descriptions.

- Automated CSV generation with structured course metadata.

**Embedding Generation:**

- Automated vector embedding creation for course content and descriptions.

- Cosine similarity calculations for intelligent course matching.

- Persistent storage of embeddings for fast query processing.

- Support for multiple query types including ECTS, instructors, and content-based searches.

---

**3. Intelligent Query Processing:**

**Dynamic Query Handling:**

- ECTS Credit Queries: "How many ECTS does [Course] have?"

- Instructor Lookup: "Who teaches [Course]?"

- Content-based Recommendations: "Courses related to machine learning"

- Learning Outcomes: "What are the learning outcomes of [Course]?"

- Prerequisites: "What are the recommended skills for [Course]?"

**Semantic Search Features:**

- Context-aware query processing with intent recognition.

- Multi-query support with intelligent classification and routing.

- Similarity-based course recommendations using vector embeddings.

- Real-time response generation with relevant course information.

---

**4. Frontend Interface (React/Bootstrap):**

**Chat Interface:**

- Real-time chat interface with typing indicators and message history.

- Responsive design optimized for desktop and mobile devices.

- Dynamic input handling with auto-resize textarea functionality.

- AJAX integration for seamless backend communication.

**User Experience:**

- Intuitive query input with placeholder guidance.

- Loading states and error handling for improved user experience.

- Message threading with user and assistant message differentiation.

- Keyboard shortcuts (Enter to send, Shift+Enter for new line).

---

**5. Monitoring & Documentation:**

**API Documentation:**

- Swagger/OpenAPI documentation with drf-yasg integration.

- Comprehensive API endpoint documentation with example requests/responses.

- Interactive API testing interface for development and testing.

**Performance Monitoring:**

- Prometheus metrics integration for system monitoring.

- Request latency and memory usage tracking.

- Method call counting and performance analytics.

## Technologies Used

**1. Backend Framework:**

- Django 4.2.15 for robust web application development with built-in admin interface.

- Django REST Framework for creating comprehensive RESTful APIs.

- SQLite database with Django ORM for efficient data management and querying.

**2. AI/ML Technologies:**

- sentence-transformers 3.0.1 for semantic embedding generation and similarity search.

- scikit-learn 1.5.1 for machine learning utilities and cosine similarity calculations.

- transformers 4.44.1 for advanced natural language processing capabilities.

- PyTorch 2.2.2 for deep learning model integration and processing.

**3. Data Processing:**

- pandas 2.2.2 for data manipulation and analysis of course information.

- numpy 2.0.1 for numerical computing and array operations.

- pdfplumber for extracting structured data from PDF course catalogs.

- beautifulsoup4 4.12.3 for HTML/XML parsing and data extraction.

**4. Frontend Technologies:**

- Bootstrap for responsive CSS framework and UI components.

- jQuery for DOM manipulation and AJAX requests.

- Font Awesome for icon integration and visual enhancements.

- Custom JavaScript for interactive chat interface and real-time communication.

**5. API & Documentation:**

- drf-yasg 1.21.7 for automatic Swagger/OpenAPI documentation generation.

- prometheus_client 0.20.0 for system metrics and performance monitoring.

- requests 2.32.3 for HTTP communication and external API integration.

## Libraries & Dependencies

**Core Framework Libraries:**

1. **Django 4.2.15** - Web framework for rapid development and clean design.

2. **Django REST Framework** - Toolkit for building Web APIs with Django.

3. **django-debug-toolbar** - Debug toolbar for Django applications.

4. **drf-yasg 1.21.7** - Yet another Swagger generator for Django REST framework.

**AI/ML Libraries:**

5. **sentence-transformers 3.0.1** - Framework for sentence, paragraph and image embeddings.

6. **transformers 4.44.1** - Hugging Face transformers library for NLP models.

7. **torch 2.2.2** - PyTorch deep learning framework.

8. **scikit-learn 1.5.1** - Machine learning library for Python.

9. **numpy 2.0.1** - Fundamental package for scientific computing.

10. **pandas 2.2.2** - Data manipulation and analysis library.

**Data Processing Libraries:**

11. **pdfplumber** - PDF text extraction and table parsing library.

12. **beautifulsoup4 4.12.3** - HTML/XML parsing library for web scraping.

13. **requests 2.32.3** - HTTP library for making API requests.

14. **python-dotenv 1.0.1** - Environment variable management.

**Frontend Libraries:**

15. **Bootstrap** - CSS framework for responsive web design.

16. **jQuery** - JavaScript library for DOM manipulation and AJAX.

17. **Font Awesome** - Icon library for web interfaces.

**Monitoring & Utilities:**

18. **prometheus_client 0.20.0** - Prometheus metrics client for Python.

19. **psutil 6.0.0** - System and process utilities for monitoring.

20. **gTTS 2.5.3** - Google Text-to-Speech library for audio generation.

21. **coverage 7.6.1** - Code coverage measurement tool.

22. **fastchat 0.1.0** - Chat application framework integration.

23. **huggingface-hub 0.24.6** - Hugging Face model hub integration.

24. **safetensors 0.4.4** - Safe tensor serialization format.

25. **tokenizers 0.19.1** - Fast tokenizers for natural language processing.
