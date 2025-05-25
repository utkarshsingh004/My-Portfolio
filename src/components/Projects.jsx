import React from "react";
import ".././styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="container text-center">
      <h2 className="section-title">Projects:</h2>

      <div className="rowp">
        <div className="project-container">
          <img src="campus-connect.png" alt="weather-app" />
          <h2>Campus-Connect</h2>
          <p>
          Campus Connect is a MERN stack web application designed to bridge the gap between colleges and students by allowing colleges to publish company details, internships, and live projects. It enables students to explore real-world opportunities directly through their campus, fostering stronger industry-academia collaboration.
          </p>
          <div className="button-container">
            <a href="https://campus-connect-frontend-fufn.onrender.com/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/Campus-Connect.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-container">
          <img src="video-tube.png" alt="expense-tracker" />
          <h2>Video-Tube</h2>
          <p>
          A full-stack video-sharing platform developed using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to upload, view, and share videos—similar to YouTube. Users can create accounts, upload video content, like/dislike videos, comment, and subscribe to other channels.
          </p>
          <div className="button-container">
            <a href="https://videotube01.onrender.com/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/VideoTube.git">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>


      <div className="rowp">
        <div className="project-container">
          <img src="apna-ghar.png" alt="weather-app" />
          <h2>Apna Ghar</h2>
          <p>
          Build a real estate app using React + Vite (frontend) and Node.js (backend) with features like property listings, search filters, user authentication, and property management. 🚀
          </p>
          <div className="button-container">
            <a href="https://real-estate-1-37r5.onrender.com/">
              <button>VIEW</button>
            </a>
            <a href="https://github.com/utkarshsingh004/real-estate.git">
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
