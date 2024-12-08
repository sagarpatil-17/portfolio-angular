import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isSticky: boolean = false;
  public showScrollUpBtn: boolean = false;
  public menuActive: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 20;
    this.showScrollUpBtn = window.scrollY > 500;
  }
  
  public toggleMenu(): void {
    this.menuActive = !this.menuActive;
    const menuElement = document.querySelector('.menu');
    if (menuElement) {
      menuElement.classList.toggle('active', this.menuActive);
    }
  }

  public closeMenu(): void {
    this.menuActive = false;
  }

  public scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
