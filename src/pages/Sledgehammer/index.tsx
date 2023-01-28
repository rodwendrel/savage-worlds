import * as S from './styles';
import Stars from '../../components/Stars';
import Nav from '../../components/Nav';
import { Register } from '../../components/Register';


const Hammer = () => {

    return <S.Hammer>
        <Stars />
        <Nav />
        <Register />
        
    </S.Hammer>
}

export default Hammer;