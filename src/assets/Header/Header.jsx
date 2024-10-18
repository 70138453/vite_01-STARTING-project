import imgMain from '../../assets/react-core-concepts.png'
// import imgMain2 from '../../assets/Component.png'


    const reactDes=['Fundamental','Crucial','Core']
    function getRandomInt(max){
        return Math.floor(Math.random() * (max+1))
    }
    function Header(){
    return(
        <div>
            <header>
                <img src={imgMain} alt="stylized atom"/>
                <h1>React Essentials </h1>
                <p>
                    {reactDes[getRandomInt(2)]} React concepts you will need for almost my app you are you are going to build!
                </p>
            </header>
        </div>
    )
}
export default Header;