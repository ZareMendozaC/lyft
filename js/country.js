
 function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}

 $(document).ready(function() {
     $('#phone-selector').intlTelInput({
            autoPlaceholder: true,
            preferredCountries: ['us', 'pe'],
        });
    document.getElementById("phone-selector").value="United States";
    $("#phone-selector").on("countrychange", function(e, countryData) {
        document.getElementById("phone-selector").value=countryData.name;
        setObjectLocalStorage('country',countryData.name);
         window.location = "datos.html";

    });
});

