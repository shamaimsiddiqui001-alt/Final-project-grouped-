
// Load saved schedule when page loads
window.onload = function () {
  const savedSchedule = JSON.parse(localStorage.getItem("scheduleList")) || [];

  savedSchedule.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("scheduleList").appendChild(li);
  });
};

function addSchedule() {
  const subject = document.getElementById("subject").value;
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;

  if (subject === "" || time === "") {
    alert("Please fill all fields");
    return;
  }

  const itemText = `${day} | ${subject} | ${time}`;

  // Add to UI
  const li = document.createElement("li");
  li.textContent = itemText;
  document.getElementById("scheduleList").appendChild(li);

  // Save to LocalStorage
  let schedule = JSON.parse(localStorage.getItem("scheduleList")) || [];
  schedule.push(itemText);
  localStorage.setItem("scheduleList", JSON.stringify(schedule));

  // Clear inputs
  document.getElementById("subject").value = "";
  document.getElementById("time").value = "";
}

function clearSchedule() {
  document.getElementById("scheduleList").innerHTML = "";
  localStorage.removeItem("scheduleList");
}
