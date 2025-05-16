import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../core/shared/shared.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [SharedModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  role: string = 'user'; 
  imageUrl?: string ; // Replace with actual image URL
  cartCountItems: number = 0; // Replace with actual cart items count

  logout() {
    // Implement your logout logic here
    console.log('User logged out');
  }

}
