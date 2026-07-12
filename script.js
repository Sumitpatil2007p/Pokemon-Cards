let main=document.getElementById("main");
let arr=["https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Transparent-File.png","https://pngimg.com/uploads/pokemon/pokemon_PNG111.png","https://www.freeiconspng.com/uploads/pokemon-png-27.png","https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-HD-Quality.png","https://i.pinimg.com/originals/5a/23/03/5a23032f0740f534299e91620be510d3.png","https://www.kindpng.com/picc/m/31-317675_pokemon-chimchar-hd-wallpapers-pokemon-chimchar-png-transparent.png","https://i.pinimg.com/originals/3b/1d/3e/3b1d3e04562ba3a995e3045357dde3b1.jpg","https://www.clipartkey.com/mpngs/m/230-2303338_pokemon-png-piplup-png.png","https://www.pngplay.com/wp-content/uploads/10/Espeon-Pokemon-Transparent-Image.png","https://pngimg.com/uploads/pokemon/pokemon_PNG66.png","https://www.pngmart.com/files/22/Pokemon-PNG-File.png","https://i.pinimg.com/originals/d3/b8/87/d3b8875d05c8517ae23db86ab09c4f5a.png"];
let s="";
for(let i=0; i<=64; i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card">
            <img src=${arr[r]}>
        </div>`;
};
main.innerHTML=s;