import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const gerarEstrela = () =>{
    let num = gerarNumeroAleatorio(1, 5);

    for (let i = 0; i < num; i++) {
        let star = "⭐"
    }
    return star;
}

const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: "Green",
            imagem:  green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: `${gerarEstrela}`,

        },
        {
            nome: "Salad",
            imagem:  salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: `${gerarEstrela}`,
        },
        {
            nome: "Jenny Jack Farm",
            imagem:  jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: `${gerarEstrela}`,
        },
        {
            nome: "Grow",
            imagem:  grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: `${gerarEstrela}`,
        },
        {
            nome: "Potager",
            imagem:  potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: `${gerarEstrela}`,
        },
    ]
}

export default produtores;