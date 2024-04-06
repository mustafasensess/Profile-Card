import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div className="card">
            <Avatar/>


            <div className="data">
                <Intro/>
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList/>
            </div>
        </div>
    );
}

function Skill(props) {
    return(
        <div className="skill" style={{backgroundColor:props.color}}>
          <span>{props.skill}</span>
        </div>
    );
}

function SkillList() {
    return(
        <div className="skill-list">
            <Skill skill= "React" color="#123456" />
            <Skill skill= "css" color="orangered" />
            <Skill skill= "html" color="yellow" />
        </div>
    );
}

function Intro() {
    return(
        <div>
            <h1>Mustafa Şenses</h1>
            <p>Trabzondu doğdu bla bla yazılım okuyor. react çalışıyor.</p>
        </div>
    );
}

function Avatar() {
    return(
        <img className = "avatar" src = "avatar2.png" alt = "avatar.png"/>
    );
}

export default App;
