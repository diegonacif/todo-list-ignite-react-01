import './App.scss';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}
