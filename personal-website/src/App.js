import './App.css';
import Header from './Comp/Header';
import Section from './Comp/Section';
import SkillExpSection from './Comp/SkillExpSection';
import CommentMain from './Comp/CommentMain'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SkillExpSection />
      <CommentMain />
    </div>
  );
}

export default App;
