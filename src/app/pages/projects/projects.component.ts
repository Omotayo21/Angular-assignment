import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define portfolio items in the component
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  portfolioItems = [
    {
      image: 'assets/feedback.png', // Update with correct image paths
      title: 'Product feedback app',
      link: 'https://product-feedback-app-ap8f-j61bn8v45-omotayo21s-projects.vercel.app/home',
    },
    {
      image: 'assets/quiz.png',
      title: 'Quiz app',
      link: 'https://quiz-app-fc4v.vercel.app/',
    },
    {
      image: 'assets/expensehub-bg.png',
      title: 'Expense tracker app',
      link: 'https://expense-hub-2.onrender.com',
    },
    {
      image: 'assets/shopping.png',
      title: 'E-commerce app',
      link: 'https://vue-shopping-qpuw32o2p-omotayo21s-projects.vercel.app/',
    },
  ];
}
