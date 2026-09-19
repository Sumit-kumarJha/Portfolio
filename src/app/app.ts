import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { CertificationsEducationComponent } from './components/certifications-education/certifications-education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    TerminalComponent,
    SkillsComponent,
    AchievementsComponent,
    CertificationsEducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
