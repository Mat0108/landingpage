import './App.css';
import Firstlayout from './components/firstlayout';
import Lastlayout from './components/lastlayout';
import Visage1 from './components/visage1';
import Visage2 from './components/visage2';
import Visage3 from './components/visage3';
import Produit from './components/produit';
import Conseil from './components/conseil';
import Expertise from './components/expertise';
import Newsletter from './components/newsletter';
function App() {
  // const text1 = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste.";

  return (
    <div className="App w-full h-full relative bg-[#DEE4E4]">
      <Firstlayout />
      <Visage1 />
      <Visage2 />
      <Visage3 />
      <Produit />
      <Conseil />
      <Expertise />
      <Newsletter />
      <Lastlayout />
    </div>
  );
}

export default App;
