document.addEventListener('DOMContentLoaded', function () {

    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    function updateNavbarContent(elementId, label, value) {
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = `${label}: ${value}`;
        }
    }


    var destination = getUrlParameter('destination');
    var date = getUrlParameter('date');
    var budget = getUrlParameter('budget');
    var activities = getUrlParameter('activities');


    updateNavbarContent('navbarDestination', 'DESTINATION', destination);
    updateNavbarContent('navbarDate', 'DATE', date);
    updateNavbarContent('navbarBudget', 'BUDGET', budget);
    updateNavbarContent('navbarActivities', 'ACTIVITIES', activities);
});

const displayHotels = (hotels) => {
    const hotelList = document.getElementById("hotelList");

    hotelList.innerHTML = "";

    hotels.forEach((hotel) => {
        const hotelElement = document.createElement("div");
        hotelElement.classList.add("hotel");

        const hotelName = document.createElement("h2");
        hotelName.textContent = `hotel: +${ hotel.name }`;

        const hotelLocation = document.createElement("p");
        hotelLocation.textContent = `${ hotel.label }`;
        const hotelLocation1 = document.createElement("p");
        hotelLocation1.textContent = `Location:${ hotel.city_name }, ${ hotel.country }`;

        const hotelImage = document.createElement("img");
        hotelImage.src = hotel.image_url;
        hotelImage.alt = hotel.name;

        hotelElement.appendChild(hotelName);
        hotelElement.appendChild(hotelLocation);
        hotelElement.appendChild(hotelLocation1);
        hotelElement.appendChild(hotelImage);

        hotelList.appendChild(hotelElement);
    });
};

const apical = async () => {
    const url =
        "https://booking-com.p.rapidapi.com/v1/hotels/locations?name=mumbai&locale=en-gb";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "e7d0b588bbmsh6c4bc37116d55c3p1aa48ejsn36b0635317f0",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayHotels(result);
    } catch (error) {
        console.error(error);
    }
};

apical();

const attra = async () => {
    const url =
        "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3Dmumbai&page=1&currency_code=INR&languagecode=en-us";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "e7d0b588bbmsh6c4bc37116d55c3p1aa48ejsn36b0635317f0",
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result1 = await response.text();
        console.log(result1);
        console.log(result1.text);
        attractionData(result1);
    } catch (error) {
        console.error(error);
    }
};
attra();