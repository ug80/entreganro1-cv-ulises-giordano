
class RandomUser {
    constructor(){}
    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }

    static renderUserData(data){
        
        console.log(data);
        document.getElementById("nombre").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById("edad").innerHTML = data.results[0].dob.age;
        foto.src = data.results[0].picture.medium;
        document.getElementById("email").innerHTML = data.results[0].email;
        document.getElementById("tel").innerHTML = data.results[0].phone;

    }
}




RandomUser.fetchFromAPI();




