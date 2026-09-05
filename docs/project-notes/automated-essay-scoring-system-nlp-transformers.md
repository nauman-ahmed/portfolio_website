# Automated Essay Scoring System (NLP, Transformers)

**Stack:** Python, Transformers, RoBERTa, DeBERTa, MiniLM, SpaCy, VADER, Optuna, TF-IDF, Word2Vec, NLP, Machine Learning

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Automated Essay Scoring System** is an end-to-end NLP pipeline that grades written essays, combining transformer language models with engineered linguistic features and classical text representations to reach close agreement with human graders.

**My Role:** AI Engineer - model development, feature engineering, hyperparameter optimization, and evaluation.

**Project Overview:**

**1. Transformer-Based Scoring:**

Built the scoring system on transformer models including RoBERTa, DeBERTa, and MiniLM, comparing their performance on the grading task.

**2. Classical Baselines:**

Implemented traditional representations - TF-IDF and Word2Vec - alongside the transformers, so modern architectures were measured against established baselines rather than adopted on assumption.

**3. Linguistic and Semantic Features:**

Engineered features using SpaCy for linguistic structure, VADER for sentiment analysis, and readability metrics, capturing qualities of writing that raw embeddings do not directly expose.

**4. Hyperparameter Optimization:**

Tuned model performance with Optuna, replacing manual search with systematic optimization over the hyperparameter space.

**5. Evaluation Result:**

Achieved a Cohen's Kappa score of 0.81, indicating high agreement with human grading - a substantial result for a task where even human graders disagree with one another.

## Project Description

**1. Transformer Models:**

**Architecture Comparison:**

- RoBERTa applied as a primary transformer encoder for essay representation.

- DeBERTa evaluated for its disentangled attention treatment of content and position.

- MiniLM included as a lighter-weight alternative, trading capacity for efficiency.

- Models compared directly on the scoring task to establish which architecture suited the data.

---

**2. Traditional NLP Methods:**

**Classical Representations:**

- TF-IDF vectorization capturing term importance across the essay corpus.

- Word2Vec embeddings providing distributional word semantics.

- Baselines used to quantify what the transformer models actually contributed over established methods.

---

**3. Feature Engineering:**

**Linguistic Features (SpaCy):**

- Linguistic structure extracted through SpaCy's NLP pipeline.

- Syntactic and morphological signals derived from parsed essay text.

**Sentiment Features (VADER):**

- VADER sentiment analysis applied to capture affective tone within submissions.

**Readability Metrics:**

- Readability scoring incorporated as an explicit measure of writing complexity and accessibility.

- Combined with semantic features to represent writing quality beyond surface content.

---

**4. Optimization:**

**Hyperparameter Tuning:**

- Optuna used to search the hyperparameter space systematically.

- Automated trials replacing manual tuning, improving final model performance.

---

**5. Evaluation:**

**Agreement with Human Graders:**

- Cohen's Kappa adopted as the evaluation metric, measuring agreement beyond what chance alone would produce.

- Achieved a score of 0.81, placing the system in high agreement with human grading.

- Metric chosen because raw accuracy overstates performance on ordinal grading tasks.

## Technologies Used

**1. Transformer Models:**

- RoBERTa for robust contextual essay representation.

- DeBERTa for disentangled attention over content and position.

- MiniLM as an efficient distilled alternative.

**2. Classical NLP:**

- TF-IDF for term-frequency based document representation.

- Word2Vec for distributional word embeddings.

**3. Feature Extraction:**

- SpaCy for linguistic parsing and structural feature extraction.

- VADER for rule-based sentiment scoring.

- Readability metrics quantifying writing complexity.

**4. Optimization and Evaluation:**

- Optuna for automated hyperparameter search.

- Cohen's Kappa as the inter-rater agreement metric against human scores.

**5. Implementation:**

- Python as the implementation language across the pipeline.

- End-to-end workflow spanning preprocessing, feature engineering, training, tuning, and evaluation.

## Libraries & Dependencies

**Transformer Libraries:**

1. **RoBERTa** - Robustly optimized BERT variant used as a primary scoring encoder.

2. **DeBERTa** - Decoding-enhanced BERT with disentangled attention.

3. **MiniLM** - Distilled transformer offering reduced inference cost.

**NLP Libraries:**

4. **SpaCy** - Industrial NLP pipeline for tokenization, parsing, and linguistic feature extraction.

5. **VADER** - Lexicon and rule-based sentiment analysis tool.

6. **Word2Vec** - Word embedding model providing distributional semantics.

7. **TF-IDF** - Term frequency-inverse document frequency vectorization.

**Optimization Libraries:**

8. **Optuna** - Hyperparameter optimization framework driving automated tuning trials.

**Core:**

9. **Python** - Implementation language for the full scoring pipeline.
