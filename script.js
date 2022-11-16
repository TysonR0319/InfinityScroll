// Unsplash API
const count = 10;
const apiKey = "D5I0j-cqMXSwrZEI0dWydNHcARWxcBS6kSZDY_6eQus"
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Api Request Get photos
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
        // Catch Error here
    }
}

// On Load
getPhotos()