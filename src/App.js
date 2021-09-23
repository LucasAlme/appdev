import React from 'react'
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

export default function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label html="github_username">Usuario do Github</label>
            <input name={"github_username"} id="username_github" required />
          </div>
          <div class="input-block">
            <label html="techs">Tecnologias</label>
            <input name={"techs"} id="techs" required />
          </div>
          <div className="input-group">
            <div class="input-block">
              <label html="latitude">Latitude</label>
              <input name={"latitude"} id="latitude" required />
            </div>
            <div class="input-block">
              <label html="longitude">Longitude</label>
              <input name={"longitude"} id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/69490077?v=4" alt="Lucas Almeida" />
              <div className="user-info">
                <strong>Lucas Almeida</strong>
                <span>React Native, ReactJs, SpringBoot</span>
                <p>Trabalho atualmente com front-end. Estudando API's com spring-boot</p>
                <a href="https://github.com/LucasAlme">Acessar perfil no GitHub</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/69490077?v=4" alt="Lucas Almeida" />
              <div className="user-info">
                <strong>Lucas Almeida</strong>
                <span>React Native, ReactJs, SpringBoot</span>
                <p>Trabalho atualmente com front-end. Estudando API's com spring-boot</p>
                <a href="https://github.com/LucasAlme">Acessar perfil no GitHub</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/69490077?v=4" alt="Lucas Almeida" />
              <div className="user-info">
                <strong>Lucas Almeida</strong>
                <span>React Native, ReactJs, SpringBoot</span>
                <p>Trabalho atualmente com front-end. Estudando API's com spring-boot</p>
                <a href="https://github.com/LucasAlme">Acessar perfil no GitHub</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}


