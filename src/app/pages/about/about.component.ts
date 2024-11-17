import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skills = [
    'HTML',
    'JavaScript',
    'Typescript',
    'React',
    'Vue.js',
    'Next.js',
    'Express.js',
    'Node.js',
    'Tailwind CSS',
    'MongoDB',
    'Mongoose',
  ];
}
