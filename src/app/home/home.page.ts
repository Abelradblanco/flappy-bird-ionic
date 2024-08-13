import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ComponentsModule],
})
export class HomePage implements OnInit{

  container_height!: number;
  container_width!: number;

  gameStarted: boolean = false;
  gameOver: boolean = false;

  constructor(
    private platform: Platform
  ) {}

  ngOnInit(): void {
   this.setContainerSize(); 
  }

  setContainerSize(){
    this.container_height = this.platform.height();
    this.container_width = this.platform.width() < 576 ? this.platform.width() : 576;
  }
}
