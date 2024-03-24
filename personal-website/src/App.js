import './App.css';
import Header from './Comp/Header';
import Section from './Comp/Section';
import SkillExpSection from './Comp/SkillExpSection';
import CommentMain from './Comp/CommentMain'
import Footer from './Comp/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SkillExpSection />
      <CommentMain />
      <Footer />
    </div>
  );
}

export default App;
