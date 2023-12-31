import './hero.css';

function Hero(){

    return(
      <div>
        <a id='hero'></a>
        <section className="hero-section">
            <div className="top-shadow"></div>
            <div className="hero_container1">
            <div className="hero_content">
            <h1>CAIQU3_WAV</h1>
            <h2>A ODÍSSEIA DE UM DESENVOLVEDOR FULL-STACK</h2>
            <img src="src\assets\caique_anime\Caique-character9(trapper).png" alt="Caique" />
            <div className="hero-1-content">
            <p>Seja bem vindo ao portfolio.</p>
            <p>Sou um programador web também com um pouco de arte e design no sangue. <br />
                em outras palavras, fui pra aula de artes e saí de lá um <br /> programador.
            </p>
            <p>Oops.</p></div></div>
            </div>
        </section>
      </div>
    )
}

export default Hero;