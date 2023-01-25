import * as S from './styles';
import * as script from './script';

const Content = () => {
    return <S.Form>

            <h1> Relatório de Missões </h1>

            <form>
                <input
                    className='user text'
                    type="text"
                    placeholder='usuário'
                    id='user'
                />

                <input
                    className='password text'
                    type="password"
                    placeholder='senha'
                    id='password'
                />

                <input
                    className='enter'
                    type="button"
                    value="entrar"
                    onClick={script.login}
                />

            </form>

    </S.Form>
}

export default Content;
