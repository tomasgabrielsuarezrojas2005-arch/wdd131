const temperature = 8;
const windSpeed = 12;

const windChillElement = document.querySelector("#wind-chill")

function calculateWindChill(temperature,windSpeed){
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16  + 0.3965 * temperature * windSpeed ** 0.16;

}
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent= `${windChill.toFixed(1)} °C`;
}else{
    windChillElement.textContent="N/A"
}