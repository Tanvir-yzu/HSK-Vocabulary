# HSK Vocabulary · 汉语水平考试词汇

<div align="center">

### Modern bilingual HSK vocabulary explorer (English + বাংলা)

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](index.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](vocab.js)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8BC0D0?style=for-the-badge&logo=alpinedotjs&logoColor=black)](https://alpinejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

## Overview

HSK Vocabulary is a responsive web app for learning Mandarin words used in the HSK exam.
It supports bilingual definitions (**English** and **বাংলা**) with fast filtering, instant search, and built-in pronunciation playback.

## Highlights

- 📚 **1,630+ words** across HSK levels 1–4
- 🌐 **Dual-language meanings** (English ↔ বাংলা)
- 🔎 **Live search** by character, pinyin, or meaning
- 🎯 **Level filters** for focused study sessions
- 🔊 **Text-to-Speech** using the Web Speech API
- ❤️ **Favorites** tracking for quick review
- 📱 **Mobile-friendly UI** with modern styling

## Quick Start

This is a static project — no build step required.

1. Clone the repo

   ```bash
   git clone https://github.com/Tanvir-yzu/HSK-Vocabulary.git
   cd HSK-Vocabulary
   ```

2. Open the app

   ```bash
   # Windows
   start index.html

   # Or run a local server (recommended for speech support)
   npx serve .
   ```

3. Browse to the served URL (usually `http://localhost:3000`)

## Vocabulary Snapshot

| Level | Words |
|------:|------:|
| HSK 1 | 300 |
| HSK 2 | 200 |
| HSK 3 | 1,120 |
| HSK 4 | 10+ |
| **Total** | **1,630+** |

## Tech Stack

- **UI:** Tailwind CSS + custom modern styling
- **Interactivity:** Alpine.js
- **Logic/Data:** Vanilla JavaScript (`vocab.js`)
- **Icons:** Font Awesome
- **Pronunciation:** Browser Web Speech API

## Project Structure

```text
hsk/
├─ index.html
├─ vocab.js
├─ README.md
├─ REFACTORING_SUMMARY.md
└─ LICENSE
```

## Usage

- Use level chips to filter by HSK level
- Search any Chinese character, pinyin, or translation
- Toggle language between English and বাংলা
- Click 🔊 to hear pronunciation
- Click ❤️ to save favorites

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (`feature/your-change`)
3. Commit changes with clear messages
4. Open a pull request

## License

Licensed under the MIT License. See [LICENSE](LICENSE).

---

<div align="center">
Made for Mandarin learners · বাংলাভাষী শিক্ষার্থীদের জন্য ❤️
</div>