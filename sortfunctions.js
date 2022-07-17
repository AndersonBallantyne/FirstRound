import { myData } from './myJsonTest.js';


const newData = myData;



//const release_name_var = newData.map((newData) => `${newData.release_name}`);

//const artist_name_var = newData.map((newData) => `${newData.artist_name}`).join("");


const withImage = newData.map((myArr) =>{

  myArr.image = "";
 
  

  //console.log(myArr);
  return myArr;

})


document.getElementById("app1").innerHTML = `

      ${withImage.map((testArr)=>{
        let x=[];
        let y=[];
        let z=[];
        let a=[];
        let b=[];

        x = `${testArr.artist_name}`;
        y = `>${testArr.release_name}`;
        z = `${testArr.primary_genres}`;
        a = `#[${testArr.position}]`;
        b = `${testArr.release_date}`;
  
        
       

        return`
        <div>
          <div class="container" >
            <div class="row">
              <div class="col"><p><mark>${a}</mark></p></div>  
          </div>          
          
          <div class="row">
              <div class="col col-sm-6"><h1><strong>${x}</h1></strong></div>
              <div class="col order-last"><p class="text-white bg-dark">${z}</br><mark>${b}</mark></p></div>  
          </div>
          <div class="row">
              <div class="col"></div>
              <div class="col-xs col-md-6"><h4><mark>${y}</mark></h4></div>
              <div class="col"></div>
          </div>
        </div>
      </div>    
        `
  })}` 






    

    
   
 


 
    
         
   

    
