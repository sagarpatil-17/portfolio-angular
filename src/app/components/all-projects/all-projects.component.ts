import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  imports: [CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {
  public projectsDetails = [
    { image: '/assets/images/blog-web.png', title: 'Blogs web app', tools: 'Angular 16, Tailwind, NestJs, MongoDB', link: 'https://coding-blogs-seven.vercel.app/blogs' },
    { image: '/assets/images/gym-web.jpg', title: 'Gym web app', tools: 'Angular 19, Tailwind', link: 'https://fitnessclub-project.web.app/' },
    { image: '/assets/images/gallery-web.png', title: 'Image gallery web', tools: 'Angular 16, Bootstrap', link: 'https://snapify-cyan.vercel.app/' },
    { image: '', title: 'Music web app', tools: 'Angular 14, Bootstrap', link: 'https://sagarpatil-17.github.io/freshmusic/' },
    { image: '', title: 'Responsive nav & hero', tools: 'Angular 16, Tailwind', link: 'https://responsive-nav-hero.vercel.app/' },
  ]

}
