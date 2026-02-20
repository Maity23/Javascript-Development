// async function fetchEmployees() {
//     try {
//         const response = await fetch('data.json');  // Promise-based fetch
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const employees = await response.json(); // await resolves JSON Promise
//         console.log("✅ All Employees:", employees);

//         const developers = employees.filter(emp => emp.role.includes("Developer"));
//         console.log("👨‍💻 Developers Only:", developers);
//     } catch (error) {
//         console.error("❌ Error fetching employee data:", error);
//     }
// }

// fetchEmployees();

const fetchEmployees = () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(employees => {
            const listElement = document.getElementById("employeeList");

            employees.forEach(emp => {
                const li = document.createElement("li");
                li.textContent = `${emp.name} - ${emp.role}`;
                listElement.appendChild(li);
            });
        })
        .catch(error => {
            console.error("❌ Error fetching employee data:", error);
        });
};

fetchEmployees();
