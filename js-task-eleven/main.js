let namee = document.getElementById("name");
let age = document.getElementById("age");
let counter =0 ;

document.querySelector("button").addEventListener("click", () => {
    counter++;
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let selectedColor = document.querySelector("select").value;
        console.log("Name: " + namee.value);
        console.log("Age: " + age.value);
        console.log("Gender: " + selectedGender.value);
        console.log("Color: " + selectedColor);

        document.cookie = `user=${namee.value};`;
        document.cookie = `age=${age.value};`;
        document.cookie = `gender=${selectedGender.value};`;
        document.cookie = `counter=${counter};`;
        document.cookie = `color=${selectedColor};`;


        let userCookie = document.cookie.split(";");
        userCookie.forEach((cookie) => {
            let parts = cookie.split("=");

            if (parts.length === 2) {
                let key = parts[0] ; 
                let value = parts[1] ; 
                console.log(`${key}: ${value}`);
            }
        });
        
        window.location.href = "page2.html";
   
});
