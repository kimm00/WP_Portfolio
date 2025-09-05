# 🌐 JavaScript Interactivity & Dynamic Content

Welcome to my enhanced portfolio! This project is part of the **assignment** for the Web Programming course, and it builds upon the static portfolio from Assignment 1 by adding **JavaScript-powered interactivity** and **responsive design**.

---

## ✨ Features Implemented

### 🎨 Theme Switcher (🌞 Light / 🌙 Dark / 🧁 Pastel)
- Three fully functional visual themes
- Smooth transitions using CSS `transition`
- Toggle button implemented via JavaScript
- Theme state saved using `localStorage` for persistent user preference
- Modular `theme.js` script with clear structure and comments

### 📁 Project Filtering
- Interactive filter buttons (All, Web, Data, Tool)
- Projects dynamically shown/hidden based on `data-category` attributes
- Implemented in `filter.js`
- Fully responsive layout

### 🐙 GitHub Profile & Repositories Page
- Created `github.html` to showcase GitHub public profile and repositories
- Uses GitHub REST API to fetch profile info and repo list
- Each repository card displays:
  - Name, description
  - Primary language
  - Stars ⭐, Forks 🍴
  - Last updated date ⏰
- Designed to match rest of portfolio style
- Code modularized in `github.js` with full error handling & comments

### 📱 Responsive Design
- Mobile-first media queries applied
- Navigation menu stacks vertically on smaller screens
- Profile layout adapts: image above, text below
- Project cards and skill bars resize gracefully

---

## 📂 File Structure
```
├── index.html           # Home/About page
├── projects.html        # Filterable project list
├── skills.html          # Skill bars with responsive layout
├── contact.html         # Contact form with styled inputs
├── github.html          # GitHub API integration
├── styles/
│   └── style.css        # CSS styles for themes, layout, responsiveness
├── scripts/
│   ├── theme.js         # Theme switcher logic
│   ├── filter.js        # Project filtering script
│   └── github.js        # GitHub API logic
```

---

## 🚀 Deployment
This project is live at:
🔗 [https://kimm00.github.io/hoa02-kimm00](https://kimm00.github.io/hoa02-kimm00)

(Deployed using GitHub Pages)

---

## 🛠️ Technologies Used
- HTML5 / CSS3
- JavaScript (DOM manipulation, fetch API, localStorage)
- GitHub REST API
- Git + GitHub Pages

---

## 🙋‍♀️ About Me
**Doyi Kim**  
3rd year ITM major at SeoulTech  
Dual degree at Northumbria University  
Frontend enthusiast 👩‍💻  
Loves clean UI, responsive layout, and cats 🐱

---

Thanks for visiting my project 💙
