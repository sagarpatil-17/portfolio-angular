import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../../services/contact.service';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {

  public isLoading: boolean = false;
  constructor(private _contactService: ContactService) { }

  contactForm = new FormGroup({
    user_name: new FormControl('', Validators.required),
    user_email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  public sendEmail() {
    if (this.contactForm.valid) {
      const contactForm = this.contactForm.value;
      const emailInfo = {
        user_name: contactForm.user_name,
        user_email: contactForm.user_email,
        subject: contactForm.subject,
        message: contactForm.message
      }

      this.isLoading = true;
      this._contactService.sendEmail(emailInfo).subscribe((res: any) => {
        // console.log(res)
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully!'
        });
      }, () => {
        this.isLoading = false;
      })

    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill in all the fields!'
      })
    }
  }

}
