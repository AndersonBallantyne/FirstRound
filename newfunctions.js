import { myData } from './myJsonTest.js';


const newData = myData;

//const release_date = newData.map((newData) => `${newData.release_name}- [${newData.artist_name}]`);
const artist_name = newData.filter((newData) => `${newData.release_date}</br> - ${newData.release_name} </br>`);






document.getElementById("leftCol").innerHTML = `

    ${artist_name.map((myNewArray) => {
       

      myNewArray.image = "";

            return` 
                <div id="leftCol">
                
                    <div>
                        <img  id="cover_filler"  src="${"./images/album-cover.png"}">
                    </div>
                        <h4> #${myNewArray.position}</h4>
                        <h2> ${myNewArray.release_name} [${myNewArray.artist_name}] </h2>
                        <h5> > ${myNewArray.primary_genres} <</h5>
                        <p id="rating">*${myNewArray.avg_rating}</p>
                        
                </div>
                `                
    }).join(' ')}
    
`
console.log(artist_name);


//const release_name = newData.map((newData) => newData.release_name);
//const artist_name = newData.map((newData) => newData.artist_name);
    

//console.log([artist_name], [release_name]);

//const anotherArray = newData.filter((newData) => newData.avg_rating <= 3);    
//const anotherArray = newData.filter((newData) => `${newData.release_name}`);
//const anotherArray = newData.filter((newData) => newData.release_name);


//console.log(anotherArray);

//const anotherArray = newData.filter((newData) => newData.avg_rating <= 3);

//console.log(anotherArray);

//avg_rating.forEach((newData) => console.log(`${newData} made the list`));

//console.log(avg_rating, artist_name);





    








