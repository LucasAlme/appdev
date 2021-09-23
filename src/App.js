import React, { useState } from 'react'
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

export default function App() {

  const [user, setUser] = useState([
    { name: "Lucas Almeida", attach: "React Native, ReactJs, SpringBoot", description: "Trabalho atualmente com front-end. Estudando API's com spring-boot", 
    photo: "https://avatars.githubusercontent.com/u/69490077?v=4", port: "https://github.com/LucasAlme"},
    { name: "Stela Higa", attach: "React Native, ReactJs, SpringBoot", description: "20 anos, cursando Psicologia - 4° Semestre. Em busca de um primeiro emprego formal",
    photo: "https://media-exp1.licdn.com/dms/image/C4D35AQHwdeNks3s4ZA/profile-framedphoto-shrink_200_200/0/1600899229701?e=1632452400&v=beta&t=iW89Ybz0QpKIFaXckkg5UxZxaBCAdbrL-_zfdouWi7I", port: "https://www.linkedin.com/in/stela-higa/"},
    { name: "Joseph Victor", attach: "Photoshop, Illustrator", description: "Freelance Illustrator 20y 🇧🇷", 
    photo: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/140187667_3597283370352629_7369064388218710671_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEC74SntC4OQwwBK--ToVoay85xZ0w4-TLLznFnTDj5Mk9nFwmg0SBHO4xg8O0ITQx25XPltk6YVrLPzBVedpVr&_nc_ohc=AvfQzrK98HEAX_5aI3s&_nc_ht=scontent.fgru5-1.fna&oh=4e038db92c237ef1761e125c76e2dc16&oe=6172932B", port: "https://www.instagram.com/_josephvictor/"},
    { name: "Jean Costa", attach: "Java, Python, JavaScript", description: "Estudante de programação no Instituto PROA", 
    photo: "https://avatars.githubusercontent.com/u/89105381?v=4", port: "https://github.com/jeancostt" }
  ]);


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label html="github_username">Usuario</label>
            <input name={"github_username"} id="username_github" required />
          </div>
          <div class="input-block">
            <label html="techs">Profissão/Estudos</label>
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
          {user.map((user) => (
            <li className="dev-item">
              <header>
                <img src={user.photo} alt={user.name} />
                <div className="user-info">
                  <strong>{user.name}</strong>
                  <span>{user.attach}</span>
                  <p>{user.description}</p>
                  <a href={user.port}>Acessar perfil do Portfólio</a>
                </div>
              </header>
            </li>
          ))
          }
        </ul>
      </main>
    </div>
  );
}


