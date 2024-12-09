import { Component, HostListener } from '@angular/core';
import Typed from 'typed.js';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { MyServicesComponent } from '../my-services/my-services.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-content-layout',
  imports: [CommonModule, AboutMeComponent, MyServicesComponent, MySkillsComponent, MyProjectsComponent, ContactMeComponent],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
    // Typing text animation initialization
    new Typed('.typing', {
      strings: ['Designer', 'Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    this.testApi();
  }

  private testApi() {
    this._testService.testApi().subscribe(() => { })
  }

}
