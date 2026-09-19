# Sumit Jha — Professional Developer Portfolio

> **High-Performance Developer Portfolio built with Angular 22, TypeScript, SCSS, and Standalone Components.**  
> Tailored for **Sumit Jha** — Java Backend Developer (Digital Specialist Engineer @ Infosys) & LeetCode Guardian (Top 1% Globally).

---

## 🚀 Key Highlights & Features

- **Angular 22 Architecture**: Modern Standalone Components, Angular Signals, and clean separation of concerns.
- **Developer-First High-Tech Theme**: Sleek cyber-slate Dark Mode by default, with an instant Light Mode toggle switch persisted via `localStorage`.
- **Interactive Backend DevCLI (`SumitOS / DevCLI`)**:
  - Interactive terminal simulation for backend engineers and recruiters.
  - Interactive commands: `whoami`, `experience`, `projects`, `skills`, `achievements`, `certs`, `contact`, `curl api`, and `clear`.
  - Command history navigation using <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys.
- **Accurate Career & Enterprise Milestones**:
  - **Infosys Limited (Nov 2024 – Present)**: Java Backend Developer (Official Designation: *Digital Specialist Engineer*) in a **Buy Now Pay Later (BNPL)** 8+ microservice ecosystem, PlanMatrix API (-30% response time), Kafka event decoupling, JUnit/Mockito, Docker, Kubernetes.
  - **Tata Consultancy Services (May 2024 – August 2024)**: Assistant System Engineer Trainee.
  - **iMocha (May 2022 – September 2023)**: Problem Setter Intern (30+ algorithmic problems authored, differential fuzzing, C++/Java stress testing).
- **Featured Systems & Interactive Architecture Flow**:
  - **DevDocs AI**: Backend-driven RAG documentation assistant (Spring Boot, Spring AI, pgvector, FAISS, hybrid dense + BM25 Reciprocal Rank Fusion boosting score from 0.48 to 0.72). Includes an interactive modal architecture inspector!
  - **PlanMatrix Dynamic Engine**: Low-latency financial tenure configuration API.
  - **Algorithmic Problem Packaging & Stress Engine**: Differential fuzzing verifier.
- **Competitive Programming Wall**:
  - LeetCode Guardian Badge (Top 1% Globally, 2,500+ problems solved).
  - LeetCode Biweekly Contest 179 (Global Rank 19).
  - TCS CodeVita Season 10 (Global Rank 165).
  - CodeChef 4-Star (Peak rating 1952).
  - Codeforces Pupil (Peak rating 1263).
- **Verified Certifications & Education**:
  - Microsoft Certified: Azure AI Fundamentals (AI-900).
  - Microsoft Certified: Azure Fundamentals (AZ-900).
  - SAP Certified: Generative AI Developer.
  - SAP Certified: Backend Developer.
  - B.Tech in IT (CGPA: 8.77 / 10.00), St. Thomas' College of Engineering & Technology, Kolkata.
- **Interactive Contact Suite**:
  - 1-click email copy with instant feedback.
  - Pre-filled email launcher to `sumitkjha.work@gmail.com`.
  - Direct links to GitHub, LinkedIn, LeetCode, CodeChef, and Codeforces.

---

## 🛠️ Local Development

To run the portfolio locally on your machine:

```bash
cd portfolio

# Start the Angular development server (with hot-reload)
npm start
```

Open your browser and navigate to:
```
http://localhost:4200/
```

---

## 📦 Production Build

To compile an optimized, minified production build with prerendered static assets:

```bash
npm run build
```

The production output is generated in:
```
portfolio/dist/portfolio/browser/
```

---

## 🌐 Free 1-Click Deployment Options

### 1. Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sumit Jha Angular portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel will auto-detect Angular:
   - **Framework Preset**: Angular
   - **Output Directory**: `dist/portfolio/browser`
4. Click **Deploy**. Your portfolio is live with free SSL and automated CI/CD deployments on every push!

### 2. GitHub Pages
Run:
```bash
npm install -g angular-cli-ghpages
ng build --base-href="https://<your-username>.github.io/<repo-name>/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### 3. Netlify
- Drag and drop the `dist/portfolio/browser` folder directly into [Netlify Drop](https://app.netlify.com/drop), or link your Git repository with build command `npm run build` and publish directory `dist/portfolio/browser`.

---

## ⚙️ Customizing Information

All your personal details, career timelines, project entries, skills, and certifications are centralized in a single typed service file:
- **`src/app/services/portfolio-data.service.ts`**

Simply update the entries in that file and Angular will automatically update the entire UI, SEO tags, and interactive CLI.
