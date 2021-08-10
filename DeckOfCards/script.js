let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', getCard);

// .catch(err => console.log(err))

function getCard() {

    document.getElementById("card").innerHTML = "";

    let apiuri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
        
    fetch(apiuri)
        .then(response => response.json())
        .then(data =>
        {   
            let imageurl = data.cards[0].image;
            let img = document.createElement('img');
            img.setAttribute("src", imageurl);
            document.getElementById('card').appendChild(img);
        })
       

}                  