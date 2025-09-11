

# Blog & Image Gallery App

A fully functional **Blog & Image Gallery** application built with **React** and **Mantine UI**, featuring dynamic routing, sorting, filtering, and integration with a backend API to fetch real-time data.

---
## Live-Demo
https://blog-page-beryl.vercel.app

---

## Features

* **Dynamic Routes with Slugs:**

  * View full blog/image details via slug-based URLs.
  * Example: `/blogs/my-first-blog`, `/gallery/sunset-view`.
  * Slugs are generated dynamically from titles.

* **Mantine UI Components:**

  * Responsive **Card** layout for individual blogs/images.
  * **Grid** layout for clean and organized display.
  * Buttons for actions like “Load More” and filtering.

* **Custom Hooks for Reusability:**

  * `useBlogs` → Fetch blogs/images from backend API.
  * `useSorting` → Sort blogs/images by date (newest/oldest).
  * `useFiltering` → Filter blogs/images by category.

* **Sorting & Filtering:**

  * Real-time client-side sorting and filtering.
  * Categories include **Tech**, **Lifestyle**, **Travel**, etc.

* **Backend API Integration:**

  * Fetches data dynamically from a backend API.
  * Displays blogs/images, categories, and dates in real-time.

* **Dark/Light mode toggle Button:**
* **pagination**
* **Search bar to find blogs/images by title**





---

## Getting Started

### Prerequisites

* Node.js >= 18
* npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/blog-gallery-app.git
cd blog-gallery-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---


## Usage

* **Home Page:** Grid display of blogs/images with title, short description, and category.
* **Detail Page:** Accessed via slug; shows full content of selected blog/image.
* **Sorting:** Sort items by newest or oldest.
* **Filtering:** Filter by categories in real-time.
* **Load More/Search:** Optional pagination and search functionality for easier navigation.

---

## Technologies Used

* **Frontend:** React, Mantine UI, React Router
* **State Management:** React hooks, custom hooks
* **Backend:** REST API for fetching blog/image data
* **Utilities:** Dynamic slug generation, date formatting
* **Styling:** Mantine components, responsive layouts

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Make your changes
4. Commit (`git commit -m 'Add some feature'`)
5. Push (`git push origin feature/feature-name`)
6. Open a pull request

---

## License

This project is licensed under the **MIT License**.

---

