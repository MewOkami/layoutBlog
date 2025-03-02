import { Component } from '@angular/core';
import { LayoutBlogComponent } from '../../componentes/layout-blog/layout-blog.component';

@Component({
  selector: 'app-home',
  imports: [LayoutBlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
