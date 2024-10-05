import Button from './components/Button';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Card title="Welcome to Group 6" content="Welcome" />
        <Card title="Metropolia University" content="Happy Dusshera" />
        <Card title="Card Title 3" content="This is the content of the third card." />  {/* New card */}
        <Button label="Click Me" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}


export default App;