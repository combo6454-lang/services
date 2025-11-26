document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("addServiceForm");
  const serviceList = document.getElementById("serviceList");

  const services = JSON.parse(localStorage.getItem("services")) || [];

  if (serviceList) displayServices();


  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const newService = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        location: document.getElementById("location").value,
        phone: document.getElementById("phone").value,
        description: document.getElementById("description").value,
      };

      services.push(newService);
      localStorage.setItem("services", JSON.stringify(services));

      document.getElementById("formMsg").textContent =
        "✅ تم إضافة خدمتك بنجاح!";
      form.reset();
    });
  }

 
  function displayServices() {
    serviceList.innerHTML = "";
    services.forEach(service => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${service.type}</td>
        <td>${service.name}</td>
        <td>${service.location}</td>
        <td>${service.phone}</td>
      `;
      serviceList.appendChild(row);
    });
  }
});
