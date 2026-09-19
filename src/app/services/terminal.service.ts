import { Injectable, signal } from '@angular/core';
import { TerminalOutputLine } from '../models/portfolio.models';
import { PortfolioDataService } from './portfolio-data.service';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  readonly lines = signal<TerminalOutputLine[]>([
    {
      text: 'SumitOS Kernel v2.4.0-prod (x86_64-java21-spring-boot)',
      type: 'system',
    },
    {
      text: 'Type "help" to inspect system endpoints or run "skills", "experience", "contact".',
      type: 'system',
    },
  ]);

  readonly history = signal<string[]>([]);
  private historyIndex = -1;

  constructor(private readonly dataService: PortfolioDataService) {}

  execute(commandInput: string): void {
    const trimmed = commandInput.trim();
    if (!trimmed) return;

    // Add command to history
    this.history.update((h) => [...h, trimmed]);
    this.historyIndex = this.history().length;

    // Echo input
    this.lines.update((l) => [
      ...l,
      { text: `visitor@sumit-jha:~$ ${trimmed}`, type: 'input' },
    ]);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    switch (cmd) {
      case 'help':
        this.addOutput([
          'AVAILABLE SYSTEM COMMANDS:',
          '  whoami          Display identity and active role profile',
          '  experience      List enterprise engineering positions (Infosys, TCS, iMocha)',
          '  projects        Inspect featured systems & DevDocs AI RAG architecture',
          '  skills          Show technical competencies across backend, AI, and cloud',
          '  achievements    Display LeetCode Guardian and competitive contest ranks',
          '  certs           List Microsoft & SAP enterprise certifications',
          '  contact         Print verified contact endpoints and social handles',
          '  curl api        Query mock /api/v1/engineer/status microservice payload',
          '  clear           Flush the terminal screen output buffer',
        ]);
        break;

      case 'whoami':
        const p = this.dataService.personalInfo;
        this.addOutput([
          `NAME:        ${p.name}`,
          `POSITION:    ${p.workingTitle} (${p.officialDesignation})`,
          `DOMAIN:      Buy Now Pay Later (8+ Microservice Ecosystem)`,
          `SPECIALTY:   High-Throughput Spring Boot, Kafka, RAG, LeetCode Guardian`,
          `EDUCATION:   ${p.education.degree} (CGPA: ${p.education.cgpa})`,
        ]);
        break;

      case 'experience':
      case 'exp':
        const exps = this.dataService.experiences;
        const expLines: string[] = ['CAREER TIMELINE:'];
        exps.forEach((e) => {
          expLines.push(
            `\n[${e.period}] ${e.company} — ${e.role}${e.designation ? ' (' + e.designation + ')' : ''}`
          );
          if (e.client) expLines.push(`  Client: ${e.client}`);
          e.highlights.slice(0, 2).forEach((h) => expLines.push(`  • ${h}`));
        });
        this.addOutput(expLines);
        break;

      case 'projects':
        const projs = this.dataService.projects;
        const pLines = ['FEATURED SYSTEMS:'];
        projs.forEach((pr) => {
          pLines.push(`\n* ${pr.title} [${pr.techStack.slice(0, 4).join(', ')}]`);
          pLines.push(`  ${pr.subtitle}`);
          if (pr.metrics) {
            pr.metrics.forEach((m) => pLines.push(`  - ${m.label}: ${m.value}`));
          }
        });
        this.addOutput(pLines);
        break;

      case 'skills':
        const sLines = ['TECHNICAL CAPABILITIES MATRIX:'];
        this.dataService.skillGroups.forEach((g) => {
          const featured = g.skills.map((s) => s.name).join(', ');
          sLines.push(`[${g.category}]:\n  ${featured}`);
        });
        this.addOutput(sLines);
        break;

      case 'achievements':
        const achLines = [
          'COMPETITIVE PROGRAMMING & GLOBAL CONTEST METRICS:',
          '  • LeetCode: Guardian Badge (Top 1% Globally) - 2,500+ Solved',
          '  • LeetCode Biweekly Contest 179: Global Rank 19',
          '  • TCS CodeVita Season 10: Global Rank 165',
          '  • CodeChef: 4-Star (Peak 1952 Rating)',
          '  • Codeforces: Pupil (Peak 1263 Rating)',
        ];
        this.addOutput(achLines);
        break;

      case 'certs':
      case 'certifications':
        const cLines = ['VERIFIED INDUSTRY CERTIFICATIONS:'];
        this.dataService.certifications.forEach((c) => {
          cLines.push(`  • [${c.issuer}] ${c.title} (${c.code})`);
        });
        this.addOutput(cLines);
        break;

      case 'contact':
        const pi = this.dataService.personalInfo;
        this.addOutput([
          'CONNECT WITH SUMIT JHA:',
          `  Email:       ${pi.email}`,
          `  Phone:       ${pi.phone}`,
          `  LinkedIn:    ${pi.socialLinks.linkedin}`,
          `  GitHub:      ${pi.socialLinks.github}`,
          `  LeetCode:    ${pi.socialLinks.leetcode}`,
          `  CodeChef:    ${pi.socialLinks.codechef}`,
          `  Codeforces:  ${pi.socialLinks.codeforces}`,
        ]);
        break;

      case 'curl':
        if (arg === 'api' || arg === 'status' || arg.includes('status')) {
          const jsonPayload = JSON.stringify(
            {
              status: '200 OK',
              engineer: 'Sumit Jha',
              designation: 'Digital Specialist Engineer',
              role: 'Java Backend Developer',
              ecosystem: 'Banking BNPL Microservices',
              uptime: '99.99%',
              kafka_topics_monitored: 12,
              retrieval_model: 'Reciprocal Rank Fusion (0.72 score)',
              guardian_tier: 'Top 1% Global',
            },
            null,
            2
          );
          this.addOutput([`HTTP/1.1 200 OK`, `Content-Type: application/json`, '', jsonPayload]);
        } else {
          this.addOutput([`curl: try "curl api" to inspect the JSON health endpoint.`]);
        }
        break;

      case 'clear':
        this.lines.set([]);
        break;

      default:
        this.addOutput(
          [`Command not found: "${trimmed}". Type "help" for a list of available commands.`],
          'error'
        );
        break;
    }
  }

  private addOutput(lines: string[], type: TerminalOutputLine['type'] = 'output'): void {
    const newLines = lines.map((text) => ({ text, type }));
    this.lines.update((l) => [...l, ...newLines]);
  }

  getPreviousCommand(): string | null {
    if (this.history().length === 0) return null;
    if (this.historyIndex > 0) {
      this.historyIndex--;
      return this.history()[this.historyIndex];
    }
    return this.history()[0] || null;
  }

  getNextCommand(): string | null {
    if (this.history().length === 0) return null;
    if (this.historyIndex < this.history().length - 1) {
      this.historyIndex++;
      return this.history()[this.historyIndex];
    }
    this.historyIndex = this.history().length;
    return '';
  }
}
