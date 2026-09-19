import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly dataService = inject(PortfolioDataService);
  readonly personal = this.dataService.personalInfo;

  readonly roles = [
    'Spring Boot & Microservices Specialist',
    'Apache Kafka & Event-Driven Systems',
    'LeetCode Guardian (Top 1% Global)',
    'Generative AI & Hybrid RAG Architect',
    'Digital Specialist Engineer @ Infosys',
  ];

  readonly currentRoleText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any = null;

  ngOnInit(): void {
    this.typewriterLoop();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private typewriterLoop(): void {
    const currentFull = this.roles[this.roleIndex];
    let delay = 90;

    if (this.isDeleting) {
      this.charIndex--;
      delay = 40;
    } else {
      this.charIndex++;
    }

    this.currentRoleText.set(currentFull.substring(0, this.charIndex));

    if (!this.isDeleting && this.charIndex === currentFull.length) {
      delay = 2000; // Pause at full text
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 500;
    }

    this.timer = setTimeout(() => this.typewriterLoop(), delay);
  }
}
