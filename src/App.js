//import logo from './logo.svg';
//import './App.css';

function App(props) {
  return (
    <div>
      <Wrapper state={props.state}/>
      <ArrowUp/>
      <LogoutModal/>
    </div>
  );
}

export default App;
