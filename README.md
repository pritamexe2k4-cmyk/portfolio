# Preetam — Portfolio

Personal site (Vite / React) plus LaTeX resume in one repo. AI / ML engineer & systems builder in Hyderabad.

## What

- **Site** — home, about, work detail, contact
- **Resume** — [`resume/`](./resume/) (`resume.tex` + PDF); download at [`public/resume.pdf`](./public/resume.pdf)

## Stack

Vite 8 · React 19 · TypeScript · TanStack Router · Tailwind CSS v4 · Vercel

## Run

```bash
git clone https://github.com/pritamexe2k4-cmyk/portfolio.git
cd portfolio
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run typecheck
```

## Layout

```
src/routes/           # index, about, contact, work.$slug
src/components/site/  # navbar, cards, shell
src/data/site.ts      # copy, projects, links
public/               # media, resume.pdf
resume/               # resume.tex + PDFs
```

## Status

Active personal site + resume source. Deploy via Vercel project settings.

## License

None yet — personal portfolio.
