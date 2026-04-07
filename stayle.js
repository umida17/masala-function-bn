
let container = document.getElementById("container");

let cards = [
    { id: 1, title: "Azizbek", text: "Lorem ipsum dolor sit amet." }
];

const renderCards = (data) => {
    const result = data.map((el) => `
        <div class = "card" key ={el.id} >
            <h1>${el.title}</h1>
            <img src="https://picsum.photos/id/${el.id}/200/200" alt="">
            <p>${el.text}</p>
        </div>
    `).join("");

    container.innerHTML = result;
};

renderCards(cards);




