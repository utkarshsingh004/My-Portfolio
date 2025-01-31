import styles from "./App.module.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import  Projects  from "./components/Projects"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <hr />
      <Hero />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Experience />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
