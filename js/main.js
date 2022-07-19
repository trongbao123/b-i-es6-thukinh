


let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


let hienthibang = () => {

    let content = "";
    for (let index = 0; index <= dataGlasses.length - 1; index++) {
        content += `
        <div class="col-4"  >           
             <img class="img-fluid image-glass" style:"width:100%" style="cursor: pointer" src="${dataGlasses[index].src}">
         </div>
      `
    }

    let contentHTML = "";
    contentHTML = `
     <div class="row">
        ${content}
    </div>
    `
    //  console.log(dataGlasses, ".....");
    document.getElementById("vglassesList").innerHTML = contentHTML;
}
hienthibang();

var glassmodel = 
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " }
;

let hienmaunu = () => {
    var glassmodelHTML = `<div>
        <img class="img-fluid model-glass"   style:"width:100% " src="${glassmodel.virtualImg}">
        <div style="    position: relative;
        top: 450px;
        left: 0px;
        background-color: yellow;
        width: 100%;
        height: 149px;">
        <p>Tên:${glassmodel.name}</p>
        <p>Giá:${glassmodel.price}</p>
        <p>Mô tả:${glassmodel.description}</p>
        </div>
        </div>
    `
    document.getElementById("avatar").innerHTML = glassmodelHTML;
  
}
hienmaunu();



let buttonchangeglass = () => {
    const arrGlass = document.querySelectorAll('.image-glass');
    for (let i = 0; i < arrGlass.length; i++) {
        arrGlass[i].addEventListener('click', () => { 
            console.log('thong tin cua kinh: ',dataGlasses[i])
            console.log("mau ",  dataGlasses[i].virtualImg);
            console.log(123);
            glassmodel = {...dataGlasses[i]};
            hienmaunu();
         
        })  
       
    };
};
document.querySelectorAll('.image-glass').onclick = buttonchangeglass();


