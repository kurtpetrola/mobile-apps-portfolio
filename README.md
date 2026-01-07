# Kurt's Mobile Portfolio

A single-page portfolio website designed to showcase my mobile application development work. Built with **SvelteKit** and **Tailwind CSS**, featuring a neo-minimalist dark theme and smooth, native-app-like interactions.

## 🚀 Features

- **Single Page Architecture**: Smooth scrolling navigation between specific sections (Work, About, Contact).
- **Interactive Gallery**: 3D-style device mockups that showcase mobile apps in their element.
- **Project Details**: Dedicated pages for each project with "Download/Demo" calls to action.
- **Responsive Design**: Optimized for everything from ultrawide monitors to mobile screens.
- **Dark Mode**: Focused "Obsidian" theme with electric green accents.

## 🛠️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - The Application Framework
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first styling
- [Shadcn-Svelte](https://next.shadcn-svelte.com/) - Accessible UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful vector icons

## 📂 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── layout/     # Site-wide components (BottomNav, ScrollToTop)
│   │   └── projects/   # Portfolio components (Cards, Gallery, Mockups)
│   ├── data/           # Static data (projects.ts)
│   └── types.ts        # TypeScript interfaces
├── routes/             # App routing (+page.svelte, projects/[slug])
└── app.css             # Global styles and Tailwind configuration
```

## ⚡ Development

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Start Dev Server**:

    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🎨 Customization

- **Projects**: Edit `src/lib/data/projects.ts` to add or modify your portfolio items.
- **Images**: Place screenshots in `static/images/` and reference them in the project data.
- **Theme**: Adjust colors and styles in `src/app.css`.

---

Developed by **Kurt Petrola**
