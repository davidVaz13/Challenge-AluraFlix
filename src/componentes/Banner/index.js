import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css'

function Banner({info, video}) {


    return (
        <div 
            className={styles.capa} 
            style={{ backgroundColor:"#000000"
            }}
        >
            <div className={styles.capaInfo}>
                <h2>Front End</h2>
                <h3>Seo com React</h3>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <iframe 
                    width="650px"
                    height="330px"
                    src={video}
                    title="Estou aqui"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture Full"
            ></iframe>

        </div>
    )
}

export default Banner

