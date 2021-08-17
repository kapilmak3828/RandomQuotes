const quotebox = document.querySelector("#getquote");
const button = document.getElementById("btn");
const author = document.getElementById("author");




async function getQuote(){
try{  
let file = "https://type.fit/api/quotes";
 const res =  await fetch(file)
 const data = await res.json();
{
      let i = Math.floor(Math.random()*500);
      quotebox.innerHTML = `" ${data[i].text} "`;
      author.innerHTML = data[i].author;
    }

}catch(err){
  console.log(err.message);
}

}
button.addEventListener('click' , getQuote)
getQuote();