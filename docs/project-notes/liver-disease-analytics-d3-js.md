# Liver Disease Analytics - D3.js

**Stack:** React, D3.js

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Liver Disease Analytics - D3.js Dashboard** is a web-based tool that allows users to upload datasets and visualize data using various chart types created with **D3.js**.

**Project Overview:**

**1. Dataset Upload:**

Users can upload datasets, which are displayed in a data table for easy viewing and management.

**2. Basic Visualizations:**

Users can create **scatter plots** and **radar plots** based on the uploaded data. The interface allows selecting specific variables, generating customized, interactive visualizations.

**3. Advanced Dashboard:**

A preloaded liver cirrhosis dataset from **Kaggle** enables more complex visualizations, including bar charts and density plots, revealing deeper insights and trends within the dataset.

**Interactive Features:**

Throughout the project, users can interact with charts, zoom in for detailed views, and explore the data dynamically.

**Technologies Used:**

Built with **React** and **D3.js**, the system provides a responsive and customizable interface for data analysis and visualization.

## Project Description

**1. Data Upload and Display:**

**Data Upload:**

- Users can upload datasets.

- The system parses and validates the uploaded data to ensure correct format for visualization.

**Data Display:**

- Uploaded data is displayed in a tabular format.

- Users can view the full dataset, including columns and rows.

- Optional: Implement sorting or filtering features on the table.

---

**2. Basic Visualization Section:**

**Scatter Plot:**

- Users can create scatter plots to visualize relationships between two numerical variables.

- Options to select x-axis and y-axis variables from the dataset.

- Customizable features: color by third variable, size, tooltips for points.

**Radar Plot:**

- Enables visualization of multi-dimensional data in a radar (spider) plot.

- Allows selection of multiple variables for axes.

- Interactive features like hovering to see values.

---

**3. Dashboard Section (Liver Cirrhosis Dataset):**

**Dataset Integration:**

- Preloaded liver cirrhosis dataset from Kaggle displayed in a tabular format for reference.

**Data Visualization with D3.js:**

- Multiple visualizations (scatter plot, bar chart, density plot) implemented with the liver cirrhosis dataset.

- Interactive exploration with D3.js features:

&bull; Zooming and panning for detailed views.

&bull; Tooltips showing additional info when hovering over elements.

**Insights and Analytics:**

- Visualize trends, distributions, and correlations in the data.

- Example: Distribution of variables like age, disease stages, treatment outcomes via bar or density plots.

---

**4. Additional Features:**

**Customization of Visualizations:**

- Options for customizing charts: axis labels, color schemes, legends.

- Ability to resize or rearrange charts in different layouts.

**Dynamic Interaction:**

- Ensures visualizations are responsive and interactive, adapting to various screen sizes and input methods.

## Technologies Used

**1. Frontend:**

- React is used for building the user interface and managing the interactive components of the system.

**2. Data Visualization:**

- D3.js is used for rendering the visualizations (scatter plot, radar plot, bar chart, density plot), enabling custom, interactive data charts.

**3. Dataset Integration:**

- The liver cirrhosis dataset from Kaggle is preloaded in the dashboard for advanced data analysis and visualization.

## Libraries Used

1. **React** - Used for building the user interface and managing interactive components.

2. **Reactstrap** - Provides pre-built Bootstrap-styled components for a responsive UI design.

3. **D3.js** - Renders custom, interactive data visualizations (scatter plot, radar plot, bar chart, density plot).

4. **React-D3-Library** - Bridges D3 visualizations with React components for seamless integration.

5. **PapaParse** - Parses and loads CSV data, enabling easy handling of the liver cirrhosis dataset from Kaggle for advanced analysis.
