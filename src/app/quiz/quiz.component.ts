import { QuestionComponent } from './components/question/question.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
