import * as S from './styles'
import { Card } from '../../components/Card';
import { Card2 } from '../../components/Card';

export const Cards = () => {
    return <S.Cards>

        <Card
            title='Dia 1'
            text='
            Fui designado como piloto de um grupo de mercenários.
            Admito que não me sinto confortável com isso mas é por um bom motivo.
            Eles foram contratados pelo senhor McGrath para encontrar uma antiga
            base S.A.G.A que foi evacuada a muito tempo. Mas aparentemente ainda
            tem registros importantes que foram deixados para trás.
        ' />

        <Card
            title='Dia 2'
            text='
            Iremos em um transporte clandestino. Fui informado  que não podemos ter o nome 
            do senhor McGrath atrelado a essa operação por tanto, não nos fornecerão nenhum 
            equipamento que possa ter sua origem rastreada. Não estou preocupado pois estou 
            sendo pago apenas para pilotar. Não pretendo entrar conflitos diretos.
            É a última vez que irei usar meu nome de guerra.
    ' />

        <Card2
            title='Dia 3'

            text='Os tais mercenários chegaram. Estão em quatro:
        ' />
        
    </S.Cards>
}