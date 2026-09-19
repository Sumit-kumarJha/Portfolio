import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ProjectItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly dataService = inject(PortfolioDataService);
  readonly allProjects = this.dataService.projects;

  readonly activeFilter = signal<'all' | 'rag-ai' | 'backend' | 'systems'>('all');
  readonly selectedProjectForModal = signal<ProjectItem | null>(null);

  get filteredProjects(): ProjectItem[] {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter((p) => p.category === filter);
  }

  setFilter(filter: 'all' | 'rag-ai' | 'backend' | 'systems'): void {
    this.activeFilter.set(filter);
  }

  openArchitectureModal(project: ProjectItem): void {
    this.selectedProjectForModal.set(project);
  }

  closeModal(): void {
    this.selectedProjectForModal.set(null);
  }
}
