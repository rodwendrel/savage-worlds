import * as S from './styles';
import Header from '../../components/Header/index'
import Stars from "../../components/Stars/index"
import Content from "../../components/Content/index"

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <S.Container>
            <Stars></Stars>
            <Header></Header>
            <Content></Content>
        </S.Container>
    );
};

export default Frontend;