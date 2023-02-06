import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import Header from './components/Header';
import LinkInput from './components/LinkInput';
import Statistics from './components/Statistics';
import './App.scss';

function App() {
  return (
    <main>
        <Navigation/>
        <Header/>
        <LinkInput/>
        <Statistics/>
    </main>
  );
}

export default App;
