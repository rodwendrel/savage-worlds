import * as S from './style'
import { useState } from 'react'
import { DayOne, DayTwo, 
        DayThree, DayFour,
        DayFive, DaySix, 
        DaySeven, Unamed, NoData} from '../Card'
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
                <li><button onClick={() => setActive("Card4")}>Dia 4</button></li>
                <li><button onClick={() => setActive("Card5")}>Dia 5</button></li>
                <li><button onClick={() => setActive("Card6")}>Dia 6</button></li>
                <li><button onClick={() => setActive("Card7")}>Dia 7</button></li>
                <li><button onClick={() => setActive("Card8")}>Arquivo sem nome</button></li>
                <li><button onClick={() => setActive("Card9")}>_____</button></li>



            </ul>
        </div>

        <div className="right-content">
            {active === "Card"  && <DayOne />}
            {active === "Card2"  && <DayTwo/>}
            {active === "Card3"  && <DayThree/>}
            {active === "Card4"  && <DayFour/>}
            {active === "Card5"  && <DayFive/>}
            {active === "Card6"  && <DaySix/>}
            {active === "Card7"  && <DaySeven/>}
            {active === "Card8"  && <Unamed/>}
            {active === "Card9"  && <NoData/>}


        </div>
    </S.Register>
}