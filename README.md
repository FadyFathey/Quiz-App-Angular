
# Quiz App - Angular

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Application Logic](#application-logic)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

The **Quiz App** is a dynamic and interactive Angular-based application designed to test users' knowledge through a series of questions. It provides a seamless and responsive user interface with real-time feedback on answers and an intuitive scoring system.

---

## Features

- **Responsive Design**: Fully responsive, ensuring a smooth user experience across devices of all screen sizes.
- **Dynamic Question Loading**: Questions are dynamically fetched, allowing easy extensibility.
- **Real-Time Feedback**: Provides immediate visual feedback on the selected answers (correct, incorrect, or disabled).
- **Scoring System**: Displays the user's progress and final score at the end of the quiz.
- **Error Handling**: Displays error messages if there are issues fetching data or submitting answers.
- **Restart Quiz**: Allows users to restart the quiz and try again from the beginning.

---

## Technologies Used

- **Framework**: Angular
- **Styling**: CSS with Flexbox and Grid for responsiveness
- **TypeScript**: For scalable and type-safe logic implementation
- **HTML5**: Semantic markup for better accessibility

---

## Getting Started

### Prerequisites
- Node.js installed
- Angular CLI installed globally

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/FadyFathey/Quiz-App-Angular.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Quiz-App-Angular
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200`.

---

## Project Structure

```
src/
├── app/
│   ├── quiz/
│   │   ├── components/
│   │   │   ├── answer/
│   │   │   │   ├── answer.component.html
│   │   │   │   ├── answer.component.css
│   │   │   │   ├── answer.component.ts
│   │   │   ├── question/
│   │   │       ├── question.component.html
│   │   │       ├── question.component.css
│   │   │       ├── question.component.ts
│   │   ├── quiz.component.html
│   │   ├── quiz.component.css
│   │   ├── quiz.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.component.ts
├── assets/
│   ├── [Assets and Images]
├── styles.css
```

---

## Application Logic

### 1. **Data Flow**
- The `QuizService` handles all the application logic, including fetching questions, managing the current question state, and tracking the user's score.

### 2. **Component Structure**
- **`AppComponent`**: The root component initializing the app layout.
- **`QuizComponent`**: Manages the main quiz flow, including showing questions and handling results.
- **`QuestionComponent`**: Displays the current question and its possible answers.
- **`AnswerComponent`**: Displays individual answers and handles user interactions for answer selection.

### 3. **State Management**
- **Current Question**: The app tracks the user's progress with `currentQuestionIndex`.
- **Answer Feedback**: Visual cues (correct, incorrect, disabled) are dynamically applied based on user input.

### 4. **Error Handling**
- If the app encounters errors while loading questions or during operations, `QuizService.error()` displays appropriate messages to the user.

### 5. **Styling Logic**
- The app is styled using CSS Grid and Flexbox to ensure responsiveness and scalability across different screen sizes.

---

## Future Enhancements

- **Leaderboard**: Add a leaderboard to track top scores.
- **Timer**: Implement a timer for each question.
- **Question Categories**: Allow users to select categories for questions.
- **Localization**: Support multiple languages for the quiz.
- **Offline Mode**: Enable offline quizzes with cached questions.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

