let Content = document.getElementById("contant")

let button = document.getElementById("btn")

button.addEventListener("click", () => {
        async function jok() {
        let a = await fetch('https://official-joke-api.appspot.com/random_joke')
        let b = await a.json()
        // console.log(b)
    
        Content.innerText = `${b.setup} - ${b.punchline}`;
    }
    jok()
    })
