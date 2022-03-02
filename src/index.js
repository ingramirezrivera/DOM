/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
};

const action = (event) => {
    if (event.target.nodeName === "H2"){
        window.alert("Que pasó?");
    }
    
};
appNode.addEventListener('click', action);
//intl acronimo de internacionalización

//web api
//Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
    //Procesar la respuesta y convertirla en Json
    .then(respuesta => respuesta.json())
    //JSON -> Data Renderizar info con el Browser
    .then(responseJson => {
        const todosLosItems = [];
        responseJson.data.forEach(item => {
            console.log(item.name);
            //crear imagen
            const image = document.createElement('img');
            image.src = `${baseUrl}${item.image}`;
            
            //crear titulo
            const title = document.createElement('h2');
            
            title.textContent = item.name;
            //title.style.fontSize = '2rem';
            title.className = 'text-2xl text-red-600';
            
            
            //crear precio
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            

            const container = document.createElement('div');
                container.append(image, title, price);
            
            todosLosItems.push(container);

            
        });
        
        appNode.append(...todosLosItems);
    });

