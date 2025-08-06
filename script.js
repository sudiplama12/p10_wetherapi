const clickbtn = document.getElementById('btn');
clickbtn.addEventListener('click', getweather);

async function getweather() {
  const search = document.getElementById("inputt");
  const city = search.value.trim(); // Get user input
  const apikey = "YS5DA7ANMFHR9A75MUT3KEK6X";

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apikey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const today = data.days[0]; 

    document.getElementById("result").innerHTML = `
      🌆 Location: ${data.resolvedAddress}<br>
      📅 Date: ${today.datetime}<br>
      🌡️ Temp: ${today.temp}°C<br>
      🌥️ Condition: ${today.conditions}
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `❌ ${error.message}`;
  }
}
