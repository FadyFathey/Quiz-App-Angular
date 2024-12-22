import { Component, input } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  answerText = input.required<string>()
  answerIndex = input.required<number>()
}
