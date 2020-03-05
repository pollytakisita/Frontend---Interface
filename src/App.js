import React, { useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

function App() {

  const [github_username, setGithutUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();

    

  }

  return (
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input 
        name="github_username" 
        id="username_github" 
        required 
        value={github_username}
        onChange={e => setGithutUsername(e.target.value)}
        />
        </div>

        <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
        name="techs" 
        id="techs" 
        required 
        value={techs}
        onChange={e => setTechs(e.target.value)}
        />
        </div>

           <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type="number" 
            name="latitude" 
            id="latitude" 
            required value={latitude} 
            onChange={e => setLatitude(e.target.value)}
            />
          </div>
        
        
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required value={longitude} 
            onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
     
    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/51728558?s=460&v=4" alt="Poliana Takisita" />
              <div className="user-info"> 
              <strong>Polly Takisita</strong>
                <span> HTML, CSS, Git, ReactJS</span>
              </div>
          </header>
          <p>Engenheira de Automação e Automação e Desenvolvedora Front-End Júnior</p>
          <a href="https://github.com/pollytakisita">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/18430248?s=460&v=4" alt="Irailton Reis" />
              <div className="user-info"> 
              <strong>Irailton Reis</strong>
                <span>Node.js , PHP, LARAVEL, ReactJS, HTML, CSS, MySQL e JavaScript</span>
              </div>
          </header>
          <p>Desenvolvedor Full Stack Júnior</p>
          <a href="https://github.com/irailtonreis">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="Ciça" />
              <div className="user-info"> 
              <strong>Ciça</strong>
                <span> Html, PHP, CSS, JavaScript</span>
              </div>
          </header>
          <p>Desenvolvedora Web Júnior</p>
          <a href="https://github.com/cilolata">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48262427?s=460&v=4" alt="Vinicius Ribeiro" />
              <div className="user-info"> 
              <strong>Vinin</strong>
                <span>JavaScrip, PHP, ReactJS</span>
              </div>
          </header>
          <p>Desenvolvedor</p>
          <a href="https://github.com/vininribeiro23">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/4303840?s=460&v=4" alt="Kauê Morelli" />
              <div className="user-info"> 
              <strong>Kauê Morelli</strong>
                <span> Html, CSS, JavaScrip, Shell</span>
              </div>
          </header>
          <p>Desenvolvedor</p>
          <a href="https://github.com/kauemorelli">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/11967351?s=460&v=4" alt="Renato Almeida" />
              <div className="user-info"> 
              <strong>Renato Almeida</strong>
                <span>React, NodeJS, React Native</span>
              </div>
          </header>
          <p>Desenvolvedor</p>
          <a href="https://github.com/almeidarenato">Acessar perfil no Github</a>
        </li>

      </ul>
    </main>
  </div>
  );
}

export default App;
