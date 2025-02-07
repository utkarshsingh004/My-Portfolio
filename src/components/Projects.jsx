import React from "react";
import ".././styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="container text-center">
      <h2 className="section-title">Projects:</h2>
      <div className="rowp">
        <div className="project-container">
          <img src="weather-app.png" alt="weather-app" />
          <h2>Weather-App</h2>
          <p>
            Stay prepared with this user-friendly weather app! Get real-time
            updates on current conditions, hourly forecasts, and a 7-day
            outlook. Features include location-based weather, wind speed, and
            interactive maps, all designed to keep you informed at a glance.
          </p>
          <div className="button-container">
            <a href="https://utkarsh004-weather-app.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/weather-app.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-container">
          <img src="expenseTracker.png" alt="expense-tracker" />
          <h2>Expense-Tracker</h2>
          <p>
            A user-friendly application designed to track and manage personal
            finances efficiently. It helps users record expenses, categorize
            transactions, and monitor spending habits with insightful
            visualizations.
          </p>
          <div className="button-container">
            <a href="https://utkarsh004-expense-tracker.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/Expense-Tracker.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="rowp">
        <div className="project-container">
          <img src="tic-tac-toe.png" alt="tic-tac-toe" />
          <h2>Tic-Tac-Toe</h2>
          <p>
            Classic Tic Tac Toe Game: A simple, web-based implementation of the
            classic Tic Tac Toe game using HTML, CSS, and JavaScript. Play
            against a friend in the browser, take turns marking X or O on the
            3x3 grid, and aim for victory with three in a row. Easily deployable
            and customizable for learning or casual gaming.
          </p>
          <div className="button-container">
              <a href="https://utkarsh004-tic-tac-toc.netlify.app/">
                <button>VIEW</button>
              </a>
              <a href="https://github.com/utkarshsingh004/Tic-Tac-Toe">
                <button>Source Code</button>
              </a>
          </div>
        </div>

        <div className="project-container">
          <img src="translator.png" alt="translator" />
          <h2>Translator</h2>
          <p>
            This is a Translation App built with React and Vite, utilizing the
            Microsoft Translator API for real-time language translation. The app
            allows users to select input and output languages, enter text, and
            view translated results instantly.
          </p>
          <div className="button-container">
            <a href="https://utkarsh-translator-app.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/translator-app.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className="rowp">
        <div className="project-container">
          <img src="BMI.png" alt="BMI-calculator" />
          <h2>BMI-Calculator</h2>
          <p>
            A BMI Calculator using React is an interactive web application
            designed to calculate an individual's Body Mass Index (BMI) by
            taking their weight (in kilograms or pounds) and height (in
            centimeters, meters, or inches) as inputs.
          </p>
          <div className="button-container">
            <a href="https://utkarsh-bmi-calculator.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/BMI-CALCULATOR.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-container">
          <img src="pokedex.png" alt="Pokemon-Dex" />
          <h2>Pokemon-Dex</h2>
          <p>
            A Pokédex built with React + Vite that displays a list of Pokémon,
            allowing users to click on a Pokémon to view its details on a
            separate page. It uses React Router for navigation and state
            management for handling Pokémon data efficiently.
          </p>
          <div className="button-container">
            <a href="https://utkarsh004-pokedex.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/Pokemon-Dex">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className="rowp">
        <div className="project-container">
          <img src="todo.png" alt="todo" />
          <h2>To-Do App</h2>
          <p>
		  A To-Do App built using React and Vite allows users to add, display, and remove tasks efficiently.
          </p>
          <div className="button-container">
            <a href="https://utkarsh004-todo.netlify.app/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/To-Do.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
