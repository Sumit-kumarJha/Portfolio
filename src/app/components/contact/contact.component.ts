import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly dataService = inject(PortfolioDataService);
  readonly personal = this.dataService.personalInfo;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  readonly copiedEmail = signal(false);
  readonly formSubmitted = signal(false);

  copyEmailToClipboard(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.personal.email).then(() => {
        this.copiedEmail.set(true);
        setTimeout(() => this.copiedEmail.set(false), 2500);
      });
    }
  }

  onSubmit(): void {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      return;
    }

    const subject = encodeURIComponent(
      this.contactForm.subject || `Portfolio Inquiry from ${this.contactForm.name}`
    );
    const body = encodeURIComponent(
      `From: ${this.contactForm.name} (${this.contactForm.email})\n\nMessage:\n${this.contactForm.message}`
    );

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${this.personal.email}?subject=${subject}&body=${body}`;
    }

    this.formSubmitted.set(true);
    setTimeout(() => {
      this.contactForm = { name: '', email: '', subject: '', message: '' };
      this.formSubmitted.set(false);
    }, 4000);
  }
}
