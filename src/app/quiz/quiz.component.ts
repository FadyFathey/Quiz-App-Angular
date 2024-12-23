import { QuizService } from './services/quiz.service';
import { QuestionComponent } from './components/question/question.component';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  QuizService = inject(QuizService);

  ngOnInit(): void {
    this.QuizService.getQuestions().subscribe({
      next: questions => this.QuizService.questions.set(questions),
      error: err => console.log(err)
    });
  }
}
