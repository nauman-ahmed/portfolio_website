# AI-Powered Personalized Story Generation Platform

**Stack:** Django, Python, React, Bootstrap, SQLite, BERT, Transformers, PyTorch, gTTS, Mixtral-8x7B, Sentence-Transformers, Scikit-learn, Pandas, NumPy

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**AI-Powered Personalized Story Generation Platform** is a comprehensive full-stack web application that leverages advanced artificial intelligence to create personalized, child-friendly stories with multi-layered content moderation and adaptive learning capabilities.

**Project Overview:**

**1. AI-Driven Story Generation:**

Utilizes Mixtral-8x7B-Instruct large language model for intelligent story creation, incorporating user preferences, gender, friends' names, and story topics to generate personalized narratives.

**2. Multi-Layer Content Moderation:**

Implements BERT-based and LLM-based content filtering systems to ensure child-safe content, with stereotype detection and bad word filtering for comprehensive safety measures.

**3. Adaptive Learning System:**

System learns from user preferences and favorite stories to improve future story generation, creating increasingly personalized content based on user interaction history.

**4. Audio Story Generation:**

Converts generated stories to audio using Google Text-to-Speech (gTTS) for enhanced accessibility and user experience.

**5. User Profile Management:**

Comprehensive user management with gender preferences, story preferences, rating systems, and favorite story tracking for personalized recommendations.

## Project Description

**1. Frontend Architecture (Django Templates/Bootstrap):**

**User Interface:**

- Django template system with Bootstrap 5 for responsive design and modern UI components.

- Custom CSS styling with interactive elements and smooth transitions.

- Font Awesome icons and jQuery for enhanced user interactions.

- Mobile-responsive design optimized for all device types.

**Story Creation Interface:**

- Intuitive form-based story creation with real-time validation.

- Multi-step input collection (name, friends, topic, length preferences).

- Real-time content moderation feedback with error handling.

- Audio playback controls for generated story narration.

---

**2. Backend Architecture (Django/Python):**

**API Development:**

- Django REST Framework for robust API development with comprehensive error handling.

- Django's built-in authentication system with user session management.

- Modular app structure with separate apps for story generation, moderation, and assistant features.

- SQLite database with Django ORM for efficient data management.

**AI Integration:**

- Mixtral-8x7B-Instruct integration for advanced story generation.

- BERT model integration for content moderation and safety filtering.

- Sentence Transformers for semantic analysis and content similarity.

- Multi-stage content validation pipeline with fallback mechanisms.

---

**3. AI/ML Technologies:**

**Content Moderation:**

- BERT-based text classification for initial content screening.

- LLM-based content moderation for nuanced content detection.

- Stereotype detection and bias prevention algorithms.

- Bad word filtering with comprehensive profanity detection.

**Story Generation:**

- Large Language Model integration with Mixtral-8x7B-Instruct.

- Contextual story generation based on user preferences and history.

- Adaptive learning from user interactions and favorite stories.

- Multi-parameter story customization (length, style, characters).

---

**4. User Experience Features:**

**Personalization:**

- User profile management with gender and preference tracking.

- Story rating and favorite system for learning user preferences.

- Adaptive system preferences based on user interaction history.

- Contextual story generation using past user data.

**Accessibility:**

- Audio story generation using Google Text-to-Speech.

- Multi-format content delivery (text and audio).

- Responsive design for various device types and screen sizes.

---

**5. Safety & Quality Assurance:**

**Content Safety:**

- Multi-layer content validation with BERT and LLM models.

- Real-time content screening before story generation.

- Stereotype and bias detection with automatic content correction.

- Comprehensive bad word filtering and inappropriate content detection.

**Data Management:**

- Secure user data storage with Django's built-in security features.

- User preference tracking for personalized recommendations.

- Story history management with rating and favorite capabilities.

## Technologies Used

**1. Backend Framework:**

- Django 4.2.15 for robust web application development with built-in admin and ORM.

- Django REST Framework for comprehensive API development and documentation.

- SQLite database with Django ORM for efficient data management and relationships.

**2. AI/ML Technologies:**

- Mixtral-8x7B-Instruct for advanced large language model story generation.

- BERT models for content moderation and text classification.

- Sentence Transformers for semantic similarity and content analysis.

- PyTorch for deep learning model integration and processing.

- Scikit-learn for machine learning utilities and cosine similarity calculations.

**3. Frontend Technologies:**

- Bootstrap 5 for responsive UI framework and modern design components.

- HTML5/CSS3 for semantic markup and advanced styling capabilities.

- JavaScript and jQuery for interactive functionality and DOM manipulation.

- Font Awesome for comprehensive icon library and visual enhancements.

**4. Data Processing & Analysis:**

- Pandas for data manipulation and analysis of user preferences.

- NumPy for numerical computing and array operations.

- Transformers (Hugging Face) for pre-trained model integration.

- BeautifulSoup4 for web scraping and content processing capabilities.

**5. Audio & Communication:**

- Google Text-to-Speech (gTTS) for audio story generation.

- Requests library for HTTP client operations and API communication.

- Prometheus Client for application monitoring and metrics collection.

## Libraries & Dependencies

**Core Framework Libraries:**

1. **Django 4.2.15** - Full-stack web framework with built-in admin, ORM, and security features.

2. **Django REST Framework** - API development framework with serializers and viewsets.

3. **Django Debug Toolbar** - Development debugging and performance analysis tool.

4. **DRF-YASG** - Swagger/OpenAPI documentation generator for API endpoints.

**AI/ML Libraries:**

5. **Transformers 4.44.1** - Hugging Face transformers library for pre-trained model integration.

6. **Sentence-Transformers 3.0.1** - Semantic similarity and embedding generation.

7. **PyTorch 2.2.2** - Deep learning framework for model processing and inference.

8. **Scikit-learn 1.5.1** - Machine learning utilities and cosine similarity calculations.

9. **Huggingface-Hub 0.24.6** - Model hub integration for pre-trained models.

10. **Tokenizers 0.19.1** - Text tokenization for language model processing.

**Data Processing Libraries:**

11. **Pandas 2.2.2** - Data manipulation and analysis for user preference tracking.

12. **NumPy 2.0.1** - Numerical computing and array operations for ML processing.

13. **SciPy 1.13.1** - Scientific computing library for advanced mathematical operations.

14. **BeautifulSoup4 4.12.3** - Web scraping and HTML parsing capabilities.

**Audio & Communication Libraries:**

15. **gTTS 2.5.3** - Google Text-to-Speech for audio story generation.

16. **Requests 2.32.3** - HTTP client for API communication and external service integration.

17. **Prometheus Client 0.20.0** - Application monitoring and metrics collection.

**Utility Libraries:**

18. **Python-dotenv 1.0.1** - Environment variable management for secure configuration.

19. **Pillow 10.4.0** - Image processing library for media handling.

20. **Certifi 2024.7.4** - SSL certificate verification for secure connections.

21. **Urllib3 2.2.2** - HTTP client library for low-level network operations.

22. **Regex 2024.7.24** - Advanced regular expression processing for text analysis.

23. **Joblib 1.4.2** - Parallel processing and model persistence utilities.

24. **Threadpoolctl 3.5.0** - Thread pool control for optimized performance.

25. **SafeTensors 0.4.4** - Secure tensor serialization for model storage and transfer.
