# Conversational Assistant for University Cafeteria & News

**Stack:** Django, Python, React, JavaScript, SQLite, BeautifulSoup, Transformers, PyTorch, Scikit-learn, Pandas, NumPy, Bootstrap, jQuery, Prometheus

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Conversational Assistant for University Cafeteria & News** is an intelligent AI-powered chatbot designed for University of Passau students, providing real-time access to cafeteria menus, university news, and academic course information through natural language conversations.

**Project Overview:**

**1. Multi-Domain Intelligence:**

Advanced conversational AI that understands and responds to queries across three distinct domains: cafeteria menus, university news, and academic course information, with intelligent query classification and routing.

**2. Real-Time Data Integration:**

Automated web scraping system that continuously updates cafeteria menus from mensaplan.de and university news from uni-passau.de, ensuring students always have access to current information.

**3. Advanced NLP & ML Pipeline:**

Sophisticated natural language processing using Sentence Transformers, BERT models, and Large Language Models (Mixtral-8x7B) for semantic understanding, query classification, and contextual response generation.

**4. Semantic Search & Embeddings:**

Vector-based similarity search using cosine similarity and embeddings to find relevant course information, enabling students to discover courses based on content rather than exact name matches.

**5. Conversation Memory & Context:**

Maintains conversation history across multiple interactions, enabling follow-up questions and context-aware responses that understand the flow of student inquiries.

## Project Description

**1. Backend Architecture (Django/Python):**

**Web Framework & API:**

- Django 4.2.15 with Django REST Framework for robust web application development.

- RESTful API endpoints with comprehensive error handling and response formatting.

- SQLite database for efficient data storage and retrieval.

- Prometheus integration for real-time monitoring and performance metrics.

**AI/ML Integration:**

- Sentence Transformers (all-MiniLM-L6-v2) for generating semantic embeddings.

- Hugging Face Transformers library for BERT-based content moderation.

- PyTorch framework for deep learning model operations.

- Scikit-learn for machine learning utilities and similarity calculations.

---

**2. Data Processing & Web Scraping:**

**Automated Data Collection:**

- BeautifulSoup for HTML parsing and content extraction from university websites.

- Pandas for data manipulation, cleaning, and structuring of scraped information.

- Automated scheduling for regular data updates and content refresh.

- Multi-language support with German-to-English translation capabilities.

**Data Sources Integration:**

- Real-time cafeteria menu scraping from mensaplan.de with category classification.

- University news extraction from uni-passau.de with content categorization.

- Academic course catalog processing with ECTS credits and learning outcomes.

---

**3. Intelligent Query Processing:**

**Query Classification System:**

- Multi-level classification pipeline that determines query domain (cafeteria, news, academic).

- Secondary classification within each domain for precise response generation.

- Fallback mechanisms for handling ambiguous or unknown queries.

**Semantic Search Engine:**

- Vector-based similarity search using cosine similarity for course discovery.

- Context-aware response generation based on query intent and user history.

- Dynamic content retrieval based on query classification results.

---

**4. Frontend Interface (React/JavaScript):**

**Interactive Chat Interface:**

- Real-time chat interface with typing indicators and message history.

- Responsive design optimized for mobile and desktop access.

- AJAX-based asynchronous communication with backend services.

- Bootstrap integration for modern, professional UI components.

**User Experience Features:**

- Auto-resizing text input with keyboard shortcuts for message sending.

- Loading states and error handling for smooth user interactions.

- Message history preservation across browser sessions.

---

**5. Advanced AI Features:**

**Conversation Management:**

- Multi-turn dialogue support with conversation history tracking.

- Context preservation across different query domains.

- Intelligent response generation using Mixtral-8x7B language model.

**Content Moderation:**

- BERT-based toxicity detection for user input validation.

- LLM-powered content analysis for inappropriate content filtering.

- Automated response generation with safety checks and validation.

## Technologies Used

**1. Backend Framework:**

- Django 4.2.15 for web application framework with built-in admin interface.

- Django REST Framework for API development and serialization.

- SQLite database for lightweight, efficient data storage and retrieval.

- Prometheus Client for application monitoring and metrics collection.

**2. AI/ML & NLP Libraries:**

- Transformers 4.44.1 for Hugging Face model integration and BERT implementations.

- Sentence Transformers 3.0.1 for semantic embeddings and similarity calculations.

- PyTorch 2.2.2 for deep learning model operations and tensor computations.

- Scikit-learn 1.5.1 for machine learning utilities and cosine similarity.

- NumPy 2.0.1 for numerical computing and array operations.

**3. Data Processing & Web Scraping:**

- BeautifulSoup 4.12.3 for HTML parsing and content extraction.

- Pandas 2.2.2 for data manipulation, analysis, and CSV processing.

- Requests 2.32.3 for HTTP requests and web scraping operations.

- Python-dotenv for environment variable management and configuration.

**4. Frontend Technologies:**

- Bootstrap for responsive UI framework and component styling.

- jQuery for DOM manipulation and AJAX communication.

- Custom CSS for chat interface styling and responsive design.

- JavaScript for interactive features and real-time communication.

**5. Development & Monitoring:**

- DRF-YASG for automatic API documentation generation.

- Coverage for code coverage testing and quality assurance.

- Prometheus for application performance monitoring and alerting.

## Libraries & Dependencies

**Core Framework Libraries:**

1. **Django 4.2.15** - High-level Python web framework for rapid development.

2. **Django REST Framework** - Toolkit for building Web APIs with Django.

3. **DRF-YASG** - Swagger documentation generator for Django REST Framework.

4. **SQLite** - Lightweight, serverless database engine for data persistence.

**AI/ML & NLP Libraries:**

5. **Transformers 4.44.1** - Hugging Face library for state-of-the-art NLP models.

6. **Sentence Transformers 3.0.1** - Framework for sentence embeddings and semantic search.

7. **PyTorch 2.2.2** - Open source machine learning framework for deep learning.

8. **Scikit-learn 1.5.1** - Machine learning library for classification and similarity.

9. **NumPy 2.0.1** - Fundamental package for scientific computing with Python.

10. **Pandas 2.2.2** - Data manipulation and analysis library for structured data.

**Web Scraping & Data Processing:**

11. **BeautifulSoup 4.12.3** - Python library for pulling data out of HTML and XML files.

12. **Requests 2.32.3** - HTTP library for making web requests and API calls.

13. **Python-dotenv** - Library for loading environment variables from .env files.

14. **Regex** - Regular expression operations for text processing and pattern matching.

**Frontend & UI Libraries:**

15. **Bootstrap** - CSS framework for responsive web design and UI components.

16. **jQuery** - JavaScript library for DOM manipulation and AJAX requests.

17. **Font Awesome** - Icon library for scalable vector icons and social logos.

18. **Select2** - jQuery plugin for enhanced select boxes with search functionality.

**Monitoring & Development:**

19. **Prometheus Client** - Python client for Prometheus monitoring system.

20. **Coverage** - Code coverage measurement tool for Python applications.

21. **Django Debug Toolbar** - Configurable set of panels for debugging Django applications.

22. **Psutil** - Cross-platform library for retrieving system information and processes.

**Additional Utilities:**

23. **GTTs (Google Text-to-Speech)** - Python library for text-to-speech conversion.

24. **Pillow** - Python Imaging Library for image processing and manipulation.

25. **PyYAML** - YAML parser and emitter for Python configuration files.

26. **Certifi** - Python package for providing Mozilla's CA Bundle for SSL verification.
