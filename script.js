function predictPrice() {
  const area = parseFloat(document.getElementById("area").value);
  const bedrooms = parseInt(document.getElementById("bedrooms").value);
  const location = document.getElementById("location").value;

  if (isNaN(area) || isNaN(bedrooms)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  // Sample coefficients
  const basePrice = 50000;
  const ratePerSqft = 100;
  const bedroomFactor = 10000;

  let locationBonus = 0;
  if (location === "urban") locationBonus = 50000;
  else if (location === "suburban") locationBonus = 20000;
  else if (location === "rural") locationBonus = 0;

  const price = basePrice + (area * ratePerSqft) + (bedrooms * bedroomFactor) + locationBonus;

  document.getElementById("result").innerText = `Estimated Price: $${price.toLocaleString()}`;
}

