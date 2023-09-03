
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
                                        // span tag start
                                            let spanTag = document.createElement("span");
                                            spanTag.className = "material-symbols-outlined";
                                            spanTag.innerHTML = "keyboard_arrow_down";
                                            spanTag.classList.add("symbol-design","symbol-design-kybrd-down-arrow");
                                            divTag.appendChild(spanTag)
                                        // span tag end

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
                                        inputTag.classList.add(`input-details-info-half-width`);
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


let shoppingCart = (productName, actualPrice, oldPrice, quantityArray, chargesDesc, actualCharges) => {
    let mainDiv = document.getElementById("cart")

    let innerDiv = document.createElement("div");
    innerDiv.className="cart-grid";

    for (let index = 0; index < productName.length; index++) {
        

        // img tag start
        let imgTag = document.createElement("img")
        imgTag.className="cartImage";
        imgTag.alt=`Product ${index+1}`
        imgTag.src=`./images/photo${index+1}.png`
        innerDiv.appendChild(imgTag)
        // img tag end

        let priceDiv = document.createElement("div")
        priceDiv.className="price"

                let  productNameDiv = document.createElement("div")
                productNameDiv.className="product-name-div"

                let spanTag1 = document.createElement("span")
                spanTag1.className = "product-name"
                spanTag1.innerHTML = productName[index];
                productNameDiv.appendChild(spanTag1)
            priceDiv.appendChild(productNameDiv)

                let priceAmountDiv = document.createElement("div")
                priceAmountDiv.className = "price-amount-div"

                let priceSpanTag1 = document.createElement("span");
                priceSpanTag1.className = "price-actual"
                priceSpanTag1.innerHTML = actualPrice[index]
                priceAmountDiv.appendChild(priceSpanTag1)
                
                let priceSpanTag2 = document.createElement("span");
                priceSpanTag2.className = "price-strikethrough"
                priceSpanTag2.innerHTML = oldPrice[index]
                priceAmountDiv.appendChild(priceSpanTag2)
            priceDiv.appendChild(priceAmountDiv)    

                let quantityDiv = document.createElement("div")
                quantityDiv.className = "qantity"

                    // let quantitySpanTag;
                    for (let index = 0; index < 3; index++) {
                    
                        let quantitySpanTag = document.createElement("span");
                        
                        if (index == 1) {
                            quantitySpanTag.classList.add( "qantity-number", "symbol-design");
                        }else{
                            quantitySpanTag.classList.add( "material-symbols-outlined", "flexClass", "symbol-design", "symbol-background");
                        }
                        quantitySpanTag.innerHTML = quantityArray[index]
                        
                        quantityDiv.appendChild(quantitySpanTag)
                    
                    }
            priceDiv.appendChild(quantityDiv)
        innerDiv.appendChild(priceDiv)

    }
    mainDiv.appendChild(innerDiv)

    let innerDiv2 = document.createElement("div")
    innerDiv2.className = "charges"

    for (let index = 0; index < 2; index++) {

            let hrTag = document.createElement("hr")
            hrTag.className = "hr-line"
            innerDiv2.appendChild(hrTag)

        let chargesContentDiv = document.createElement("div")
        chargesContentDiv.className = "charges-content"

            let spanTag = document.createElement("span")
            spanTag.className = "charges-desc"
            spanTag.innerHTML = chargesDesc[index]
            chargesContentDiv.appendChild(spanTag)
            
            let spanTag1 = document.createElement("span")
            spanTag1.className = "actual-charges"
            spanTag1.innerHTML = actualCharges[index]
            chargesContentDiv.appendChild(spanTag1)
        innerDiv2.appendChild(chargesContentDiv)
    }
    innerDiv.appendChild(innerDiv2)
}


let productNamevalues = ["Vintage Backbag", "Levi Shoes"];
let actualPricevalues = ["$54.99","$74.99"];
let oldPricevalues = ["$94.99", "$124.99"];
let quantityArrayvalues = ["remove", "1", "add"];
let chargesDesc = ["Shipping", "Total"];
let actualCharges = ["$19", "$148.98"];


shoppingCart(productNamevalues, actualPricevalues, oldPricevalues, quantityArrayvalues, chargesDesc, actualCharges)