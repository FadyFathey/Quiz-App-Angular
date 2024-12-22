import { QuizComponent } from './quiz/quiz.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
