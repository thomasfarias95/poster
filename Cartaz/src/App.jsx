import Card from "../componets/Card"
import Button from "../componets/Button"
import swPosterImg from "../assets/swPoster.jpeg"
import rtPosterImg from "../assets/rtPoster.jpeg"
import emPosterImg from "../assets/emPoster.jpg"


function App() {
  return (
    <>
      <Button text= "Ir ao Blog"/>
      <Card title="Poster: Star Wars" posterImg ={swPosterImg}/>
      <Card title="Poster: Return of the Jedi" posterImg ={rtPosterImg}/>
      <Card title="Poster: Empire Stikes Back" posterImg ={emPosterImg} />
            
    </>
  )
}


export default App
