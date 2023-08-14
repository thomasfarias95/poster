
import styles from "../../componets/Card/style.module.css"
import Button from "../Button"


export default function Card({title, posterImg}) {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt={title}/>
            <div>
                <h2>{title}</h2>

                <p>Poster Cartaz Star Wars 
                    <br />
                    - O material é fabricado em adesivo vinil plástico com qualidade superior a papel fotográfico, em durabilidade, e ainda pode ser colado como adesivo direto na parede ou emoldurado; 
                    
                    <br />
                    - Acabamento da impressão fosco;
                    <br />
                    - Tamanho pode sofrer alterações para manter a proporção da imagem, prevalecendo a medida do lado maior.
                    </p>
                    <Button text="Comprar Agora"/>
            </div>
        </div>
    )
}