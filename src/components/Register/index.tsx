import * as S from './style'
import { useState } from 'react'
import { Card } from '../Card'
import { DayOne, DayThree, DayTwo } from '../../data/Days'
import styled from 'styled-components'


export const Register = () => {
    const [active, setActive] = useState("")
    const [color, setColor] = useState("color");

   /* const text = styled.span`
        color: ${color};
    ` */

    return <S.Register>
        <div className="left-content">
            <ul>
                <li><button onClick={() => setActive("Card")}>Dia 1</button></li>
                <li><button onClick={() => setActive("Card2")}>Dia 2</button></li>
                <li><button onClick={() => setActive("Card3")}>Dia 3</button></li>
            </ul>
        </div>

        <div className="right-content">
            {active === "Card"  && <DayOne />}
            {active === "Card2"  && <DayTwo/>}
            {active === "Card3"  && <DayThree/>}

        </div>
    </S.Register>
}