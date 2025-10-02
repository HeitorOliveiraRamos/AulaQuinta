import React from "react";
import { Image, View, StyleSheet } from "react-native";
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png'

// Produtores
import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const gerarEstrela = () => {
    const num = gerarNumeroAleatorio(1, 5);
    let estrelas = [];

    for (let i = 0; i < num; i++) {
        estrelas.push(
            <Image key={`estrela-${i}`} source={estrela} style={estiloEstrelas.estrela} />
        );
    }

    for (let i = num; i < 5; i++) {
        estrelas.push(
            <Image key={`estrela-cinza-${i}`} source={estrelaCinza} style={estiloEstrelas.estrela} />
        );
    }

    return <View style={estiloEstrelas.linhaEstrelas}>{estrelas}</View>;
};

const estiloEstrelas = StyleSheet.create({
    estrela: {
        width: 16,
        height: 16,
        marginRight: 2,
    },
    linhaEstrelas: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    }
});


const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarEstrela(),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarEstrela(),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarEstrela(),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarEstrela(),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarEstrela(),
        },
    ]
}

export default produtores;