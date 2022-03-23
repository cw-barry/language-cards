import './App.scss';
import reactImg from './assets/react.svg';
import Card from './components/Card';
import { categories as data } from './backend/data';

function App() {
  console.log(data);
  return (
    <div className="App">
      <div>
        <img src={reactImg} alt="react logo" className="top-img" />
        <section className="menu-container">
          <div className="bars"></div>
          <section className="top"></section>
          <section className="bottom">
            {/* <Card {...data[0]} />
            <Card {...data[1]} />
            <Card {...data[2]} /> */}
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
