// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
const nav3 = document.getElementById("nav3")
const togglemenu = document.getElementById("togglemenu")
const closebtn = document.getElementById("closemenu")
function openmenu(){
    nav3.style.display="flex"
    togglemenu.style.display="none"
    closebtn.style.display="block"
}
function closemenu(){
    nav3.style.display="none"
    togglemenu.style.display="block"
    closebtn.style.display="none"
}
const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=10&categories=men_all&concepts=H%26M%20MAN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b67b11dcdfmsh2ab8373a9d2ca18p1d97b9jsn7a27bce41353',
		'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
	}
}

// Function to fetch clothes data from the API
const Getclothes = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result);
        result.results.forEach((result) => {
            console.log(result.name);
            const div = document.createElement("div")
            div.classList.add("card4")
            // div.style.backgroundImage = "url(${result.baseUrl})";
            div.innerHTML=` <div>
            <img src="/src/product-w-jeans4-600x600.jpg" alt="" class="apiimage">
            <h2>${result.name}!</h2>
            <button>Shop Now</button>
        </div>`
        features.appendChild(div)
            // You can render the clothes data here
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call the function to fetch clothes data
Getclothes(url, options);



    

