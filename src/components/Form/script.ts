const LOGIN = "s.hammer";
const PASSWORD = "123";
const URL = "https://orbital.herokuapp.com/";

var audio = new Audio('/audio.mp3');
audio.volume = 0.8;


export function login() {

    let user = document.getElementById('user') as HTMLInputElement;
    let password = document.getElementById('password') as HTMLInputElement;

    if (user.value == LOGIN && password.value == PASSWORD) {
        window.location.href = URL + "sledge";
    } else {
        audio.play();
        window.alert("Usuário Inválido")

       
        
    }

}

