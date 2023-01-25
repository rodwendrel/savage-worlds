import * as S from './styles';
import Stars from '../../components/Stars';
import Nav from '../../components/Nav';
import { Cards } from '../Cards';

const Hammer = () => {

    return <S.Hammer>
        <Stars />
        <Nav />
        <Cards />

    </S.Hammer>
}

export default Hammer;