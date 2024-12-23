import { Component, computed, inject, input } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  answerText = input.required<string>()
  answerIndex = input.required<number>()
  QuizService = inject(QuizService)
  letterMap = ["A", "B", "C", "D"];

  isCorrectedAnswer = computed(() => !!this.QuizService.currentAnswer() && this.answerText() === this.QuizService.currentQuestion().correctAnswer)

  isWrongAnswer = computed(() => this.answerText() === this.QuizService.currentAnswer() && this.QuizService.currentAnswer() !== this.QuizService.currentQuestion().correctAnswer)
}
