import * as S from './styles';
import { useState } from 'react';



const URL = "https://orbital.herokuapp.com/";
var audio = new Audio('/audio.mp3');
audio.volume = 0.8;


const Content = () => {

    const [login, setLogin] = useState({
        user: "",
        password: "",
    });

    function validate() {
        let user = login.user;
        let password = login.password;
        let userInput = document.getElementById('user') as HTMLInputElement;
        let passwordInput = document.getElementById('password') as HTMLInputElement;

        if (user == "s.hammer" && password == "123") {

            console.log("ae caralho")
            window.location.href = URL + "sledge";
        } else {
            audio.play();

            userInput.value = "";
            passwordInput.value = "";
            setLogin({ ...login, user: "", password: "" })
        }
    }
    return <S.Form>

        

        <h1> Relatório de Missões </h1>

        <form>
            <input
                className='user text'
                type="text"
                placeholder='usuário'
                id='user'
                onChange={(event: any) => {
                    const value = event.target.value;
                    setLogin({ ...login, user: value })
                }
                }
            />

            <input
                className='password text'
                type="password"
                placeholder='senha'
                id='password'
                onChange={(event: any) => {
                    const value = event.target.value;
                    setLogin({ ...login, password: value })
                }
                }
            />

            <input
                className='enter'
                value="entrar"
                disabled={!login.password || !login.user}
                onClick={validate}
            />


        </form>

    </S.Form>
}

export default Content;
