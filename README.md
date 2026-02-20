# 📚 HSK Vocabulary — 汉语水平考试词汇

A modern, interactive web application for learning **Chinese (Mandarin) vocabulary** from the HSK (Hanyu Shuiping Kaoshi) standardized test, with meanings in both **English** and **Bangla (Bengali)** — বাংলা অর্থ সহ.

---

## 🌟 Features

- **1,630+ HSK Words** covering levels 1 through 4
- **Bilingual Meanings** — switch between English and বাংলা (Bangla) at any time
- **Level Filtering** — browse vocabulary by HSK 1, 2, 3, or 4
- **Live Search** — instantly search by Chinese character, pinyin, or meaning
- **🔊 Text-to-Speech** — listen to the correct Mandarin pronunciation of every word
- **❤️ Favourites** — bookmark words you want to review later (persisted in-session)
- **Responsive Design** — works on desktop, tablet, and mobile

---

## 📊 Vocabulary Coverage

| HSK Level | Words | Description |
|-----------|-------|-------------|
| HSK 1 | 300 | Beginner — everyday basics |
| HSK 2 | 200 | Elementary — simple conversations |
| HSK 3 | 1,120 | Intermediate — broader topics |
| HSK 4 | 10+ | Upper-intermediate (growing) |
| **Total** | **1,630+** | |

---

## 🚀 Getting Started

No build step or installation required. The app runs entirely in the browser.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tanvir-yzu/HSK-Vocabulary.git
   cd HSK-Vocabulary
   ```

2. **Open `index.html`** in any modern web browser:
   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```

   Or simply drag-and-drop `index.html` into your browser.

> **Tip:** For the Text-to-Speech feature to work correctly, open the file via a local web server (e.g. `npx serve .` or the VS Code Live Server extension) rather than as a plain `file://` URL.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Alpine.js](https://alpinejs.dev/) | Reactive UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) | Text-to-speech pronunciation |
| Vanilla JavaScript (ES6+) | Application logic & vocabulary data |

---

## 📁 Project Structure

```
HSK-Vocabulary/
├── index.html          # Main application & UI
├── vocab.js            # Vocabulary data + Alpine.js app logic
└── README.md           # This file
```

---

## 🖥️ Usage

| Action | How |
|--------|-----|
| Filter by level | Click **HSK 1 / 2 / 3 / 4** or **All Levels** |
| Search | Type in the search box (character, pinyin, or meaning) |
| Switch language | Toggle **English ↔ বাংলা** in the header |
| Listen to a word | Click the 🔊 speaker icon on any card |
| Mark as favourite | Click the ❤️ heart icon on any card |
| Return to top | Click the floating ↑ button |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add more vocabulary words, fix translations, or improve the UI:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-hsk5-words`)
3. Commit your changes (`git commit -m 'Add HSK 5 vocabulary'`)
4. Push the branch (`git push origin feature/add-hsk5-words`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">
  Made with ❤️ for Chinese language learners &nbsp;|&nbsp; বাংলাভাষী শিক্ষার্থীদের জন্য তৈরি
</p>
