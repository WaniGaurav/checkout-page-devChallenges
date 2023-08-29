
let reqFields1 = ["E-mail","Phone"];
let reqFields1type = ["email", "tel"];
let placeholders1 = ["Enter your email...", "Enter your phone..."];
let symbols1 = ["email", "call"];


let reqFields2 = ["Full name", "Address" ,"City"];
let reqFields2type = ["text", "text", "text"];
let placeholders2 = ["Rodney Cotton", "Your address..", "Your city.."];
let symbols2 = ["account_circle", "home", "location_city"];


let reqFields3 = [ "Country", "Postal code"];
let reqFields3type = [ "text", "number"];
let placeholders3 = [ "Your postal code.."];
let symbols3 = [ "public", "markunread_mailbox"];
let option3 = ["Your country..","India", "USA", "UK", "Australia", "Russia"];


let ids1 = "userInfo";
let ids2 = "shippingAddrs";


    
    userInfoCreate = (ids,reqFields, inputType, placeholders, symbols) => {
            
            let divId = document.getElementById(`${ids}`);
    
        for (let index = 0; index < reqFields.length; index++) {
    
                let outerDivtag = document.createElement("div");
                outerDivtag.className = "user-info";
    
                let labelTag = document.createElement("label");
                labelTag.className = "label-txt";
                labelTag.innerHTML = reqFields[index];
    
                outerDivtag.appendChild(labelTag);
    
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
    
                        if (symbols[index] === "account_circle") {
                            console.log(symbols[index])
                            inputTag.classList.add("name-highlight")
                        }
                        
                        divTag.appendChild(inputTag);
                        // input tag end
                        
                        outerDivtag.appendChild(divTag);
                        
                        outerDivtag.classList.add(`user-info${index+1}`)
                
                divId.appendChild(outerDivtag);
            
            
            // divId.appendChild(outerDivtag);
    
        }
    }

    userInfoPostalAddrs = (ids,reqFields, inputType, placeholders, symbols, options)=> {
    
    
        let divId = document.getElementById(`${ids}`);    
    
                let twoDivContainer = document.createElement("div")
                twoDivContainer.className= "divContainer";
    

                    for (let index = 0; index < reqFields.length; index++) {
                        
                        
                            let outerDivtag = document.createElement("div");
                            outerDivtag.className = "user-info";
        
                            let labelTag = document.createElement("label");
                            labelTag.className = "label-txt";
                            labelTag.innerHTML = reqFields[index];
        
                            outerDivtag.appendChild(labelTag);
        
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
        
                                    if (reqFields[index] === "Country") {
                                        console.log(reqFields[index])
                                        let countrySpan = document.createElement("select")
                                        countrySpan.name = "countries";
                                        countrySpan.id = "select-country";
                                        // countrySpan.className = `input-details-info-half-width${index}`;
                                        countrySpan.className = "countryClass";

                                        for (let index = 0; index < options.length; index++) {
                                            let optionTag = document.createElement("option");
                                            optionTag.innerHTML= options[index];
                                            countrySpan.appendChild(optionTag);
                                        }
                                        divTag.appendChild(countrySpan)

                                    }else{

                                        // input tag start
                                        let inputTag = document.createElement("input");
                                        inputTag.type = inputType[index];
                                        if (inputTag.type == "number") {
                                            inputTag.inputMode = "numeric";
                                        }
                                        
                                        inputTag.className = "input-details-info";
                                        inputTag.placeholder = placeholders[index-1];

                                        divTag.appendChild(inputTag);
                                        // input tag end
                                        inputTag.classList.add(`input-details-info-half-width$`);
                                    }
                                    
                                    // divTag.classList.add("info-wrapper-half-width")
                                    divTag.classList.add(`info-wrapper-half-width`)
                                    // inputTag.classList.add("input-details-info-half-width");
                    
                                outerDivtag.appendChild(divTag);
                            
                            outerDivtag.classList.add(`divContainer-user-info${index+1}`)
                            
                        twoDivContainer.appendChild(outerDivtag)
                    }
    
    
                // divId.appendChild(outerDivtag);
        divId.appendChild(twoDivContainer);
            
            
    }



userInfoCreate(ids1, reqFields1 ,reqFields1type, placeholders1, symbols1);
userInfoCreate(ids2, reqFields2 ,reqFields2type, placeholders2, symbols2);
userInfoPostalAddrs(ids2, reqFields3 ,reqFields3type, placeholders3, symbols3, option3);




