import './App.css';
import './Custom.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './layout/header/Header';
import "./i18n.js";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './component/language-selector/LanguageSelector.jsx';


function App() {
  
  const {t} = useTranslation()
  return (
    <div className="App">
     <Header/>
     {/* <div className='container'>
      <h1>{t("greeting")}</h1>
     </div> */}
    </div>
  );
}

export default App;
