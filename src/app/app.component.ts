import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Answer } from './models/answer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-http';

  public pregunta: string = '';
  public respuesta?: Answer;

  onSubmit() {
    this.AppService.obtenerRespuesta().subscribe(res => this.respuesta = res);
  }

  constructor(private AppService: AppService){

  }
}
