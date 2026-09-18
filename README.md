# Preetam — Portfolio

Personal site (Vite / React) plus LaTeX resume in one repo. Preetam — AI engineer & systems builder in Hyderabad.

## What

- **Site** — marketing / portfolio UI: home, about, work detail, contact
- **Resume** — [`resume/`](./resume/) with `resume.tex` and PDF exports; site download at [`public/resume.pdf`](./public/resume.pdf)

## Stack

Vite 8 · React 19 · TypeScript · TanStack Router · Tailwind CSS v4 · Vercel (`vercel.json`)

## Getting started

```bash
git clone https://github.com/pritamexe2k4-cmyk/portfolio.git
cd portfolio
npm install
npm run dev
```

```bash
npm run build    # production build
npm run preview  # preview build
npm run typecheck
```

## Project layout

```
src/
  routes/           # index, about, contact, work.$slug
  components/site/  # navbar, cards, shell, …
  data/site.ts      # copy, projects, links
public/             # media, resume.pdf, favicon
resume/             # resume.tex + PDFs
```

## Resume folder

Present under `resume/`: `resume.tex`, `Preetam_Resume.pdf`, `resume.pdf`.  
[`resume/README.md`](./resume/README.md) documents role-variant PDF names (ML Engineer / GenAI Engineer / Intern); those variant files are not all in the tree yet.

## Status

Active personal site + resume source. Live deploy follows Vercel project settings.

## License

None yet — personal portfolio.
