import * as S from './styles'
import { Card } from '../../components/Card';
import { Card2 } from '../../components/Card';
import {useState} from 'react';


const Nav = () => {
    const [active, setActive] = useState("Card")



    return <S.Nav>
        <nav>
            <div className="list">
                <h3>Bem vindo, Senhor Arthur Holtz</h3>

                <ul>
                    <li><button onClick={() => setActive("Card")}>Card</button></li>
                    <li><button onClick={() => setActive("Card2")}>Card2</button></li>
                </ul>

                {active === "Card"  && <Card title='sd' text='dafsdfdf'/>}
                {active === "Card2" && <Card2 title='sdfsdfsf' text='dafsdfdf'/>}


            </div>
        </nav>
    </S.Nav>
}

export default Nav;