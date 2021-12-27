import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGender from './components/sales-by-gender';

function App() {
  return (
    <>
      <Header />
      <Filter />
      <SalesByGender
        name=""
        labels={['Masculino', 'Feminino', 'Outro']}
        series={[30, 40, 30]}
      />
    </>
  );
}

export default App;
