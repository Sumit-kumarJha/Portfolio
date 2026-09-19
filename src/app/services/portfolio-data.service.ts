import { Injectable } from '@angular/core';
import {
  ExperienceItem,
  ProjectItem,
  SkillGroup,
  AchievementItem,
  CertificationItem,
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  readonly personalInfo = {
    name: 'Sumit Jha',
    tagline: 'Java Backend Developer | High-Performance Systems Specialist',
    officialDesignation: 'Digital Specialist Engineer',
    workingTitle: 'Java Backend Developer',
    email: 'sumitkjha.work@gmail.com',
    phone: '+91 8578025785',
    location: 'India',
    education: {
      degree: 'B.Tech in Information Technology',
      institution: "St. Thomas' College of Engineering & Technology",
      location: 'Kolkata, West Bengal',
      period: 'Jul 2019 – Jun 2023',
      cgpa: '8.77 / 10.00',
    },
    socialLinks: {
      github: 'https://github.com/Sumit-kumarJha',
      linkedin: 'https://linkedin.com/in/sumitkjha',
      leetcode: 'https://leetcode.com/u/sumitkjha',
      codechef: 'https://www.codechef.com/users/sumitkjha',
      codeforces: 'https://codeforces.com/profile/Online_Engineer',
    },
    heroStats: [
      { label: 'DSA Problems Solved', value: '2,500+', subtext: 'Guardian (Top 1%)' },
      { label: 'Microservices in Prod', value: '8+', subtext: 'BNPL Banking Ecosystem' },
      { label: 'API Latency Reduction', value: '30%', subtext: 'PlanMatrix Dynamic API' },
      { label: 'Industry Certifications', value: '4', subtext: 'Microsoft & SAP' },
    ],
  };

  readonly experiences: ExperienceItem[] = [
    {
      company: 'Infosys Limited',
      role: 'Java Backend Developer',
      designation: 'Digital Specialist Engineer',
      period: 'Nov 2024 – Present',
      location: 'India',
      badge: 'Current Role',
      isCurrent: true,
      highlights: [
        'Contributed to feature enhancements across Angular frontend and Spring Boot backend modules in an 8+ microservice BNPL ecosystem.',
        'Engineered the PlanMatrix API for dynamic tenure selection, reducing response time by 30% and improving customer plan discovery.',
        'Integrated Kafka-based asynchronous communication to decouple payment workflows and improve scalability and fault tolerance.',
        'Developed comprehensive unit tests using JUnit and Mockito and refactored legacy backend modules to improve reliability and maintainability.',
        'Resolved production defects through root-cause analysis, distributed tracing, and backend log investigation.',
        'Implemented robust exception handling, cursor-based pagination, and Swagger/OpenAPI documentation; supported containerized deployments on Docker & Kubernetes.',
      ],
      techStack: [
        'Java',
        'Spring Boot',
        'Microservices',
        'Kafka',
        'Angular',
        'REST APIs',
        'Docker',
        'Kubernetes',
        'JUnit',
        'Mockito',
        'Swagger/OpenAPI',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Assistant System Engineer Trainee',
      period: 'May 2024 – Aug 2024',
      location: 'India',
      badge: 'Enterprise Engineering',
      highlights: [
        'Completed intensive enterprise software development training covering Core Java, J2EE architectural patterns, and relational database modeling.',
        'Developed backend microservice prototypes utilizing Spring framework fundamentals, RESTful standards, and Hibernate ORM.',
        'Collaborated on agile development simulations, participating in code reviews, CI/CD pipeline automation, and enterprise quality assurance benchmarks.',
      ],
      techStack: ['Java', 'Spring Boot', 'SQL', 'Hibernate', 'Git', 'Agile/Scrum', 'CI/CD'],
    },
    {
      company: 'iMocha',
      role: 'Problem Setter Intern',
      period: 'May 2022 – Sep 2023',
      location: 'Remote',
      badge: 'Algorithmic Problem Setter',
      highlights: [
        'Created and validated 30+ original algorithmic coding problems for technical hiring assessments deployed across top global enterprises.',
        'Engineered end-to-end problem packages including formal problem statements, asymptotic constraints, optimal reference solutions, edge test cases, and stress-testing scripts in C++ and Java.',
        'Conducted rigorous differential fuzzing to benchmark time and memory bounds, guaranteeing sub-second verification against edge cases.',
      ],
      techStack: ['Java', 'C++', 'Algorithms & Data Structures', 'Problem Design', 'Stress Testing'],
    },
  ];

  readonly projects: ProjectItem[] = [
    {
      id: 'devdocs-ai',
      title: 'DevDocs AI',
      subtitle: 'Backend-Driven RAG Technical Documentation Assistant',
      category: 'rag-ai',
      description:
        'A high-performance backend RAG system that ingests complex technical documentation and exposes an enterprise-grade REST retrieval pipeline for source-grounded technical Q&A.',
      metrics: [
        { label: 'Retrieval Score (RRF)', value: '0.48 ➔ 0.72 (+50%)' },
        { label: 'Search Strategy', value: 'Hybrid Dense + BM25' },
        { label: 'Orchestration', value: 'Spring AI / LangChain4j' },
      ],
      architecture: [
        'Client / UI queries the Spring Boot REST Gateway',
        'Query decomposition & semantic embedding generation via Azure OpenAI / Groq',
        'Parallel retrieval: Dense Vector Search (pgvector/FAISS) + Sparse Lexical Search (BM25)',
        'Reciprocal Rank Fusion (RRF) reranking algorithm computes optimal candidate consensus',
        'LLM context assembly with hallucination guardrails and strict source citations',
      ],
      highlights: [
        'Built a backend-driven RAG documentation assistant using Java and Spring Boot, exposing the retrieval pipeline through REST APIs for source-cited technical Q&A.',
        'Integrated Spring AI and LangChain4j with Azure OpenAI and Groq alongside pgvector/FAISS to execute sub-100ms semantic similarity queries.',
        'Architected hybrid retrieval combining dense vector search with sparse BM25 and Reciprocal Rank Fusion, dramatically elevating retrieval quality from 0.48 to 0.72.',
      ],
      techStack: [
        'Java',
        'Spring Boot',
        'Spring AI',
        'LangChain4j',
        'Azure OpenAI',
        'Groq',
        'pgvector',
        'FAISS',
        'BM25',
        'REST APIs',
      ],
      githubUrl: 'https://github.com/Sumit-kumarJha/DevDocs-AI',
      hasArchitectureDiagram: true,
    },
    {
      id: 'plan-matrix-engine',
      title: 'PlanMatrix Dynamic Tenure Engine',
      subtitle: 'Low-Latency Financial Product Discovery Module',
      category: 'backend',
      description:
        'A mission-critical financial tenure configuration API engineered for a high-concurrency Buy Now Pay Later (BNPL) microservices ecosystem.',
      metrics: [
        { label: 'Latency Improvement', value: '30% Faster' },
        { label: 'Architecture', value: 'Event-Driven Microservices' },
        { label: 'Testing Coverage', value: 'JUnit + Mockito' },
      ],
      highlights: [
        'Refactored legacy calculation logic into a vectorized dynamic matrix calculation model.',
        'Decoupled synchronous checkout calls with Apache Kafka events, safeguarding user journeys from external downstream gateway delays.',
        'Structured with OpenAPI 3.0 specs and deployed to containerized Kubernetes clusters with strict SLA monitoring.',
      ],
      techStack: [
        'Spring Boot',
        'Java 17/21',
        'Kafka',
        'Docker',
        'Kubernetes',
        'Microservices',
        'OpenAPI',
      ],
    },
    {
      id: 'dsa-stress-engine',
      title: 'Algorithmic Problem Packaging & Stress Engine',
      subtitle: 'Differential Fuzzing & Time-Limit Verifier',
      category: 'systems',
      description:
        'Internal benchmarking suite built to validate technical hiring problems against time limit and memory constraints.',
      metrics: [
        { label: 'Problems Validated', value: '30+ Production Tasks' },
        { label: 'Correctness', value: '100% Edge Coverage' },
        { label: 'Execution', value: 'C++ / Java Multi-thread' },
      ],
      highlights: [
        'Automated test case generator producing adversarial test inputs (worst-case DAGs, sparse trees, large primes).',
        'Differential testing comparing naive $O(N^2)$ brute forces against optimized $O(N \\log N)$ solutions to guarantee correctness across all edge cases.',
      ],
      techStack: ['C++', 'Java', 'Python', 'Algorithms', 'Benchmarking'],
    },
  ];

  readonly achievements: AchievementItem[] = [
    {
      title: 'LeetCode Guardian Badge',
      metric: 'Top 1% Globally',
      subtitle: '2,500+ Algorithmic Problems Solved',
      description:
        'Awarded to elite competitive coders maintaining peak contest performances and extensive mastery across graphs, dynamic programming, and data structures.',
      badge: 'Guardian (Top 1%)',
      platform: 'LeetCode',
      icon: 'shield-check',
    },
    {
      title: 'LeetCode Biweekly Contest 179',
      metric: 'Global Rank 19',
      subtitle: 'International Biweekly Contest',
      description:
        'Achieved rank 19 globally among over 25,000+ international participants, solving all algorithmic challenges under strict time constraints.',
      badge: 'Rank #19 World',
      platform: 'Contest',
      icon: 'trophy',
    },
    {
      title: 'TCS CodeVita Season 10',
      metric: 'Global Rank 165',
      subtitle: 'Flagship Global Coding Olympiad',
      description:
        'Finished within the top 0.1% of hundreds of thousands of competitive programmers worldwide in the prestigious TCS CodeVita contest.',
      badge: 'Rank #165 Global',
      platform: 'Contest',
      icon: 'award',
    },
    {
      title: 'CodeChef 4-Star Coder',
      metric: 'Peak Rating: 1952',
      subtitle: '4-Star Competitive Programmer',
      description:
        'Consistently delivered optimal sub-second Java & C++ solutions across Div 1 & Div 2 rated rounds.',
      badge: '1952 (4-Star)',
      platform: 'CodeChef',
      icon: 'star',
    },
    {
      title: 'Codeforces Pupil',
      metric: 'Peak Rating: 1263',
      subtitle: 'Competitive Problem Solver',
      description:
        'Active competitor tackling rounds involving combinatorial mathematics, number theory, and performance-tuned Java algorithms.',
      badge: 'Pupil (1263)',
      platform: 'Codeforces',
      icon: 'code',
    },
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Backend & Microservices',
      icon: 'server',
      skills: [
        { name: 'Java (Core / Modern)', featured: true },
        { name: 'Spring Boot', featured: true },
        { name: 'Microservices Architecture', featured: true },
        { name: 'Apache Kafka', featured: true },
        { name: 'RESTful APIs', featured: true },
        { name: 'JPA / Hibernate', featured: true },
        { name: 'JUnit & Mockito', featured: true },
        { name: 'Swagger / OpenAPI', featured: true },
        { name: 'JWT & OAuth2', featured: false },
        { name: 'Gradle & Maven', featured: false },
      ],
    },
    {
      category: 'AI & Information Retrieval',
      icon: 'brain',
      skills: [
        { name: 'Spring AI', featured: true },
        { name: 'LangChain4j', featured: true },
        { name: 'RAG (Retrieval-Augmented Gen)', featured: true },
        { name: 'pgvector & FAISS', featured: true },
        { name: 'BM25 + Dense Hybrid Search', featured: true },
        { name: 'Reciprocal Rank Fusion (RRF)', featured: true },
        { name: 'Azure OpenAI & Groq', featured: false },
      ],
    },
    {
      category: 'Languages & Core Systems',
      icon: 'code',
      skills: [
        { name: 'Java', featured: true },
        { name: 'C++', featured: true },
        { name: 'SQL', featured: true },
        { name: 'Python', featured: false },
        { name: 'TypeScript', featured: false },
        { name: 'JavaScript', featured: false },
        { name: 'Data Structures & Algorithms', featured: true },
      ],
    },
    {
      category: 'Cloud, DevOps & Databases',
      icon: 'cloud',
      skills: [
        { name: 'Docker', featured: true },
        { name: 'Kubernetes', featured: true },
        { name: 'AWS', featured: false },
        { name: 'CI/CD Pipelines', featured: true },
        { name: 'Azure DevOps', featured: false },
        { name: 'Cloud Foundry', featured: false },
        { name: 'PostgreSQL & pgvector', featured: true },
        { name: 'MySQL', featured: false },
        { name: 'MongoDB (Basics)', featured: false },
      ],
    },
    {
      category: 'Frontend & Web',
      icon: 'layout',
      skills: [
        { name: 'Angular', featured: true },
        { name: 'ReactJS', featured: false },
        { name: 'HTML5 & CSS3 / SCSS', featured: false },
        { name: 'Responsive Web Design', featured: false },
      ],
    },
    {
      category: 'Tools & Workflows',
      icon: 'wrench',
      skills: [
        { name: 'Git & GitHub', featured: true },
        { name: 'IntelliJ IDEA', featured: true },
        { name: 'Postman', featured: true },
        { name: 'GitHub Copilot', featured: false },
        { name: 'Linux / Shell Scripting', featured: false },
      ],
    },
  ];

  readonly certifications: CertificationItem[] = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      code: 'AI-900',
      issuer: 'Microsoft',
      category: 'AI & Cloud',
      badgeColor: '#0078D4',
      icon: 'microsoft',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      category: 'AI & Cloud',
      badgeColor: '#0078D4',
      icon: 'microsoft',
    },
    {
      title: 'SAP Certified: Generative AI Developer',
      code: 'SAP-GENAI',
      issuer: 'SAP',
      category: 'AI & Cloud',
      badgeColor: '#0FAAFF',
      icon: 'sap',
    },
    {
      title: 'SAP Certified: Backend Developer',
      code: 'SAP-BACKEND',
      issuer: 'SAP',
      category: 'Backend Development',
      badgeColor: '#008FD3',
      icon: 'sap',
    },
  ];
}
