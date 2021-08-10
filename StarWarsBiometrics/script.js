let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', getBio);

// .catch(err => console.log(err))

function getBio() {

    document.getElementById("bioheadline").innerHTML = "Biometrics";
    document.getElementById("biocontent").value = "";

    let apiuri = "https://www.swapi.tech/api/people/?name=";
    let charactername = document.getElementById("charactername").value.toLowerCase();
    
    fetch(apiuri + charactername)
        .then(response => response.json())
        .then(data =>
        {   
            console.log(data);
            // console.log("Name from data: " + data.result[0].properties.name);
            console.log("length: " + data.result.length);

            if (data.result.length == 0) {
                document.getElementById("bioheadline").innerHTML = "Character " + charactername + " not found!";
                return false;
            }
            let character = data.result[0].properties;
            
            let output = "";
            output += "Birth year: " + character.birth_year + "\n";
            output += "Eye Color: " + character.eye_color + "\n";
            output += "Gender: " + character.gender + "\n";
            output += "Hair Color: " + character.hair_color + "\n";
            output += "Height: " + character.height + "\n";
            output += "Mass: " + character.mass + "\n";
            output += "Skin Color: " + character.skin_color + "\n";

            document.getElementById("bioheadline").innerHTML = "Biometrics for " + character.name;
            document.getElementById("biocontent").value = output;
        })
       

}                  