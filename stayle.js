
let container = document.getElementById("container");

let cards = [
    {title: "Azizbek", text: "Lorem ipsum dolor sit amet."}
]
const renderCards = (data)=>{
    const cards = DataTransfer.map((el)=>`
     <div key = {el.id} >
     <h1>${el.title}</h1>
     <p></p>
     </div>
`)
}