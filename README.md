
# 🌍 Country Tracker

A beautifully designed React app that lets you explore every country in the world, search by name or capital, and track the countries you've visited.

## 🔗 Live Demo

👉 [View Live Site](https://my-country-tracker.netlify.app/)



---



## ✨ Features

- 🗺️ Browse all countries fetched from a live API
- 🔍 Search countries by **name** or **capital city**
- ✅ Mark countries as **visited** and track your progress
- 📊 Live stats — total countries, visited count & completion percentage
- 🎨 Dark luxury UI with smooth animations
- 📱 Fully responsive on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| CSS3 | Styling & animations |
| Google Fonts | Typography (Playfair Display + DM Sans) |
| Font Awesome | Icons |
| sampleapis.com | Countries data API |
| Netlify | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shafikulnayem10/Country-Tracker.git

# 2. Navigate to the project folder
cd Country-Tracker

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Countries/
│   │   ├── Countries.jsx   # Main list, search & visited tracker
│   │   └── Countries.css
│   └── Country/
│       ├── Country.jsx     # Individual country card
│       └── Country.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## 🌐 API

This project uses the **SampleAPIs Countries API**:

```
GET https://api.sampleapis.com/countries/countries
```

Returns country data including name, capital, and flag image.

---



---

## 👤 Author

**Shafikul Nayem**
- GitHub: [@shafikulnayem10](https://github.com/shafikulnayem10)

---

⭐ If you found this project helpful, please give it a star!
````

