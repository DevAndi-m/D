import './App.css';
import Header from './Comp/Header';
import Section from './Comp/Section';
import SkillExpSection from './Comp/SkillExpSection';
import StrengthCapSection from './Comp/StrengthCapSection';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
        <Header />
        <Section />
        <SkillExpSection />
        <StrengthCapSection />
    </div>
  );
}

export default App;
