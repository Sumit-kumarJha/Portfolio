import {
  Component,
  ElementRef,
  ViewChild,
  inject,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent implements AfterViewChecked {
  readonly terminalService = inject(TerminalService);
  commandInput = '';
  private shouldScroll = false;

  @ViewChild('terminalBody') private terminalBodyRef!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdInputRef') private cmdInputRef!: ElementRef<HTMLInputElement>;

  readonly quickCommands = [
    'help',
    'whoami',
    'experience',
    'projects',
    'skills',
    'achievements',
    'curl api',
    'clear',
  ];

  ngAfterViewChecked(): void {
    if (this.shouldScroll && this.terminalBodyRef) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  submitCommand(): void {
    if (!this.commandInput.trim()) return;
    this.terminalService.execute(this.commandInput);
    this.commandInput = '';
    this.shouldScroll = true;
  }

  runQuickCommand(cmd: string): void {
    this.terminalService.execute(cmd);
    this.shouldScroll = true;
    if (this.cmdInputRef) {
      this.cmdInputRef.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = this.terminalService.getPreviousCommand();
      if (prev !== null) {
        this.commandInput = prev;
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = this.terminalService.getNextCommand();
      if (next !== null) {
        this.commandInput = next;
      }
    }
  }

  focusInput(): void {
    if (this.cmdInputRef) {
      this.cmdInputRef.nativeElement.focus();
    }
  }

  private scrollToBottom(): void {
    try {
      this.terminalBodyRef.nativeElement.scrollTop =
        this.terminalBodyRef.nativeElement.scrollHeight;
    } catch (_) {}
  }
}
