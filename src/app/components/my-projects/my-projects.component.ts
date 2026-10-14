import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  public isViewAll: boolean = false;
  @ViewChild('projectsSection') projectsSection!: ElementRef;

  public projectsDetails: Array<any> = [
    { image: '/assets/images/blog-web.png', title: 'Blogs web app', tools: 'Angular 16, Tailwind, NestJs, MongoDB, Prisma ORM, JWT Authentication, REST APIs', link: 'https://cblogs.vercel.app/blogs' },
    { image: '/assets/images/music-web.png', title: 'Music web app', tools: 'Angular 22, Tailwind, NestJs, Node.js, MongoDB, Supabase S3 Bucket, Prisma ORM, JWT Authentication, REST APIs', link: 'https://freshmusic.vercel.app/' },
    { image: '/assets/images/gallery-web.png', title: 'AI Resume Analyzer', tools: 'Angular 22, Tailwind, NestJS, Node.js, MongoDB, Prisma ORM, Google Gemini API, JWT Authentication, REST APIs', link: 'https://cvboost-ai-live.vercel.app/' },
  ];

  private allProjects: Array<any> = [
    { image: '/assets/images/gym-web.jpg', title: 'Gym web app', tools: 'Angular 19, Tailwind', link: 'https://fitnessclub-project.web.app/' },
    { image: '/assets/images/gallery-web.png', title: 'Image gallery web', tools: 'Angular 16, Bootstrap', link: 'https://snapify-live.vercel.app/' },
    { image: '/assets/images/responsive-web.png', title: 'Responsive nav & hero', tools: 'Angular 16, Tailwind', link: 'https://responsive-nav-hero.vercel.app/' },
  ];

  public viewAll() {
    this.isViewAll = !this.isViewAll;

    if (this.isViewAll) {
      this.projectsDetails.push(...this.allProjects);
    } else {
      this.projectsDetails.splice(3, this.allProjects.length);
      this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
