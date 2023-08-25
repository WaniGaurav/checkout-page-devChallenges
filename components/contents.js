
let reqFields1 = ["E-mail","Phone"];
let reqFields1type = ["email", "tel"];
let placeholders1 = ["Enter your email...", "Enter your phone..."];
let symbols1 = ["email", "call"];


let reqFields2 = ["Full name", "Address" ,"City", "Country", "Postal code"];
let reqFields2type = ["name", "text", "text", "text", "number"];
let placeholders2 = ["Rodney Cotton", "Your address..", "Your city..", "Your country..", "Your postal code.."];
let symbols2 = ["account_circle", "home", "location_city", "public", "markunread_mailbox"];


let userInfoCreate = (reqFields, placeholders, symbols, inputType) => {

    let divId = document.getElementById("userInfo");
    for (let index = 0; index < reqFields.length; index++) {
       
        let labelTag = document.createElement("label");
        labelTag.className = "label-txt";
        labelTag.innerHTML = reqFields[index];

        divId.appendChild(labelTag);

        // inner div tag - info-wrapper
        let divTag = document.createElement("div")
        divTag.className = "info-wrapper";

            // span tag start
            let spanTag = document.createElement("span");
            spanTag.className = "material-symbols-outlined";
            spanTag.innerHTML = symbols[index];
            spanTag.classList.add("symbol-design");
            divTag.appendChild(spanTag)
            // span tag end

            // input tag start
            let inputTag = document.createElement("input");
            inputTag.type = inputType[index];
            inputTag.className = "input-details-info";
            inputTag.placeholder = placeholders[index];
            divTag.appendChild(inputTag);
            // input tag end
        
        divId.appendChild(divTag);

    }
}

userInfoCreate(reqFields1 ,reqFields1type, placeholders1, symbols1);
userInfoCreate(reqFields2 ,reqFields2type, placeholders2, symbols2);
