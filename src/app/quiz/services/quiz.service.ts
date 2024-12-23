import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionInterface } from '../types/quiz.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiQuestionInterface } from '../types/apiQeustions.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  http = inject(HttpClient)
  questions = signal<QuestionInterface[]>([])
  currentQuestionIndex = signal<number>(0)
  currentAnswer = signal<string | null>(null)
  error = signal<string | null>(null)
  correctAnswerCount = signal<number>(0)
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()])
  showResult = computed(() => this.currentQuestionIndex() === this.questions().length - 1)
  goToNextQuestion(): void {
    const currentQuestionIndex = this.showResult() ? this.currentQuestionIndex() :
      this.currentQuestionIndex() + 1
    this.currentQuestionIndex.set(currentQuestionIndex)
    this.currentAnswer.set(null)

  }
  currentQuestionAnswers = computed(() => this.shuffleAnswers(this.currentQuestion()))

  shuffleAnswers(question: QuestionInterface): string[] {

    const allAnswers = [...question.incorrectAnswers, question.correctAnswer];


    const answersWithRandomNumbers = allAnswers.map(answer => {
      return {
        value: answer,
        randomNumber: Math.random()
      };
    });


    const shuffledAnswers = answersWithRandomNumbers.sort((a, b) => {
      return a.randomNumber - b.randomNumber;
    });


    return shuffledAnswers.map(item => item.value);
  }
  selectAnswer(answerText: string): void {
    this.currentAnswer.set(answerText)
    const correctAnswerCount = answerText === this.currentQuestion().correctAnswer ? this.correctAnswerCount() + 1 : this.correctAnswerCount()
    this.correctAnswerCount.set(correctAnswerCount)
  }
  getQuestions(): Observable<QuestionInterface[]> {
    const apiUrl = 'https://opentdb.com/api.php?amount=8&type=multiple'
    return this.http.get<{ results: ApiQuestionInterface[] }>(apiUrl).pipe(
      map(response => this.normalizeQuestions(response.results))
    )
  }


  normalizeQuestions(apiQuestion: ApiQuestionInterface[]): QuestionInterface[] {
    return apiQuestion.map(apiQuestion => {
      const incorrectAnswers = apiQuestion.incorrect_answers.map(incorrectAnswer => decodeURIComponent(incorrectAnswer))
      return {
        question: decodeURIComponent(apiQuestion.question),
        correctAnswer: decodeURIComponent(apiQuestion.correct_answer),
        incorrectAnswers: incorrectAnswers
      }
    })
  }
  restart(): void {
    this.currentQuestionIndex.set(0)
  }

  constructor() { }
  getMockQuestions(): QuestionInterface[] {
    return [
      {
        question: 'What does CSS stand for?',
        incorrectAnswers: [
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
      },

      {
        question:
          'Where in an HTML document is the correct place to refer to an external style sheet?',
        incorrectAnswers: [
          'In the <body> section',
          'At the end of the document',
          "You can't refer to an external style sheet",
        ],
        correctAnswer: 'In the <head> section',
      },
      {
        question: 'Which HTML tag is used to define an internal style sheet?',
        incorrectAnswers: ['<script>', '<headStyle>', '<css>'],
        correctAnswer: '<style>',
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
        incorrectAnswers: ['class', 'font', 'styles'],
        correctAnswer: 'style',
      },
      {
        question: 'Which is the correct CSS syntax?',
        incorrectAnswers: [
          '{body:color=black;}',
          '{body;color:black;}',
          'body:color=black;',
        ],
        correctAnswer: 'body {color: black;}',
      },
      {
        question: 'How do you insert a comment in a CSS file?',
        incorrectAnswers: [
          "' this is a comment",
          '// this is a comment',
          '// this is a comment //',
        ],
        correctAnswer: '/* this is a comment */',
      },
      {
        question: 'Which property is used to change the background color?',
        incorrectAnswers: ['color', 'bgcolor', 'bgColor'],
        correctAnswer: 'background-color',
      },
      {
        question: 'How do you add a background color for all <h1> elements?',
        incorrectAnswers: [
          'all.h1 {background-color:#FFFFFF;}',
          'h1.setAll {background-color:#FFFFFF;}',
          'h1.all {background-color:#FFFFFF;}',
        ],
        correctAnswer: 'h1 {background-color:#FFFFFF;}',
      },
    ];
  }
}
