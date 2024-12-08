import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  public projectsDetails = [
    { image: '/assets/images/blog-web.png', title: 'Blogs web app', tools: 'Angular 16, Tailwind, NestJs, MongoDB', link: 'https://coding-blogs-seven.vercel.app/blogs' },
    { image: '/assets/images/gym-web.jpg', title: 'Gym web app', tools: 'Angular 19, Tailwind', link: 'https://fitnessclub-project.web.app/' },
    { image: '', title: 'Music web app', tools: 'Angular 14, Bootstrap', link: 'https://sagarpatil-17.github.io/freshmusic/' },
  ]

}
