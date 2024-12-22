import { QuizService } from './services/quiz.service';
import { QuestionComponent } from './components/question/question.component';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  QuizService = inject(QuizService);
}
