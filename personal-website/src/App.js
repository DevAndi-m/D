import './App.css';
import Header from './Comp/Header';
import Section from './Comp/Section';
import SkillExpSection from './Comp/SkillExpSection';
import StrengthCapSection from './Comp/StrengthCapSection';
import CommentMain from './Comp/CommentMain'
function App() {
  return (
    <div className="App">
        <Header />
        <Section />
        <SkillExpSection />
        <CommentMain />
        <StrengthCapSection />
    </div>
  );
}

export default App;
