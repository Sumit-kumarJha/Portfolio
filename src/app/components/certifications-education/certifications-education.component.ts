import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-certifications-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-education.component.html',
  styleUrl: './certifications-education.component.scss',
})
export class CertificationsEducationComponent {
  readonly dataService = inject(PortfolioDataService);
  readonly certifications = this.dataService.certifications;
  readonly education = this.dataService.personalInfo.education;
}
