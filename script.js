const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

// const apiKey = "Use YOur Own Key";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


const getJoke = async () => {

    try{
        jokeEl.innerText = "updating...";
    btn.disabled = true,
    btn.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke;
    } catch(error) {
        jokeEl.innerText = "An Error Happened, try again later";
        btn.disabled = false;
        btn.innerText = "Tell me a Joke";
        console.log(error);
    }

}

btnEl.addEventListener("click", getJoke);