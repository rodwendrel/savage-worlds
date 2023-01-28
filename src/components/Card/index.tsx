import * as S from './styles';

export type cardContent = {
    title: string,
    text: string,
}

export const Card = ({title, text}: cardContent) => {
    return <S.Card>
        <h1>{title}</h1>

        <p>{text}</p>
    </S.Card>
}

export const Card2 = ({title, text}: cardContent) => {
    return <S.Card>
        <h1>{title}</h1>

        <p>{text}</p>
        <br />
        <ul>
            <li>Crynte Southwood</li>
            <li>Daulo (vive dizendo ser filho de um tal Paulo)</li>
            <li>Cyrus Edmond</li>
            <li>Khristoff</li>
        </ul>
    </S.Card>
}