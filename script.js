
/* 1. Contact button */
const contactButton = document.getElementById("contactButton");
const message = document.getElementById("message");

function showContactMessage() {
    message.textContent =
        "Thank you for your interest! I will be in touch soon.";

    console.log("Contact button clicked!");
}

contactButton.addEventListener("click", showContactMessage);


/* 2. Contact form */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;

    if (name === "" || service === "") {
        formMessage.textContent =
            "Please complete all required fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your enquiry form works successfully.";

    contactForm.reset();
});


/* 3. Variables */
const businessName = "My Freelance Business";
let monthlyLeads = 25;
const serviceAvailable = true;

console.log(businessName);
console.log(monthlyLeads);
console.log(serviceAvailable);


/* 4. Conditions */
const customerBudget = 30000;

if (customerBudget >= 50000) {
    console.log("You qualify for our premium service.");
} else {
    console.log("Let us explore a service within your budget.");
}


/* 5. Reusable function */
function greetCustomer(name) {
    console.log("Welcome, " + name + "!");
}

greetCustomer("Rahul");
greetCustomer("Priya");
greetCustomer("Dee");

/* Day 4 - Step 1: Arrays */

const services = [
    "Website Development",
    "Generative AI",
    "Digital Marketing",
    "SEO Optimization",
    "Social Media Marketing"
];

console.log(services);
console.log(services[0]);
console.log(services[1]);
console.log(services[2]);
console.log(services[3]);

/* Day 4 - Step 2: Loops */

console.log("Available service: " + service);

for (let i = 0; i < services.length; i++) {
    console.log(services[i]);
}

/* Day 4 - Step 3: for...of loop */

console.log("Services using for...of:");

for (const service of services) {
    console.log(service);
}

/* Day 4 - Step 4: Add and remove array items */

services.push("Email Marketing");

console.log("After adding a service:", services);
console.log("Total services:", services.length);

services.pop();

console.log("After removing the last service:", services);
console.log("Total services now:", services.length);
services.push("Google Ads Management");
console.log(services[services.length - 1]);
/* Day 4 - Step 5: Create a service list */

let serviceList = "";

for (const service of services) {
    serviceList = serviceList + service + "\n";
}

console.log("My Freelance Services:");
console.log(serviceList);
/* Day 5 - Step 1: JavaScript Objects */

const customer = {
    name: "Rahul",
    service: "Website Development",
    budget: 30000,
    city: "Ahmedabad"
};

console.log(customer);
console.log(customer.name);
console.log(customer.service);
console.log(customer.budget);
console.log(customer.city);
/* Day 5 - Step 2: Updating Objects */

// Update the customer's budget
customer.budget = 45000;

// Update the customer's city
customer.city = "Gandhinagar";

// Add a new property
customer.email = "rahul@example.com";

// Display the updated object
console.log("Updated customer details:");
console.log(customer);

console.log("New budget:", customer.budget);
console.log("New city:", customer.city);
console.log("Customer email:", customer.email);
/* Day 5 - Step 3: Multiple Customers */

const customers = [
    {
        name: "Rahul",
        service: "Website Development",
        budget: 45000
    },
    {
        name: "Priya",
        service: "Digital Marketing",
        budget: 25000
    },
    {
        name: "Amit",
        service: "Generative AI",
        budget: 35000
    }
];

console.log("All customer enquiries:");

for (const customer of customers) {
    console.log(
        customer.name + " | " +
        customer.service + " | ₹" +
        customer.budget
    );
}
/* Day 5 - Step 4: Filter Customers by Budget */

console.log("Customers with a budget of ₹30000 or less:");

for (const customer of customers) {
    if (customer.budget <= 30000) {
        console.log(
            customer.name + " - ₹" + customer.budget
        );
    }
}
/* Day 5 - Step 5: Calculate Total Budget */

let totalBudget = 0;

for (const customer of customers) {
    totalBudget = totalBudget + customer.budget;
}

console.log("Total customer budget: ₹" + totalBudget);
/* Day 6 - Step 2: Display Services on Website */

const serviceListElement = document.getElementById("serviceList");

for (const service of services) {
    const listItem = document.createElement("li");

    listItem.textContent = service;

    serviceListElement.appendChild(listItem);
}

/* Day 6 - Step 4: Show or Hide Services */

const toggleServicesButton =
    document.getElementById("toggleServicesButton");

const serviceListToggle =
    document.getElementById("serviceList");

toggleServicesButton.addEventListener("click", function () {
    if (serviceListToggle.style.display === "none") {
        serviceListToggle.style.display = "block";
        toggleServicesButton.textContent = "Hide Services";
    } else {
        serviceListToggle.style.display = "none";
        toggleServicesButton.textContent = "Show Services";
    }
});
/* Day 6 - Step 5: Service Counter */

const serviceCountElement =
    document.getElementById("serviceCount");

serviceCountElement.textContent =
    "We currently offer " + services.length + " services.";
    /* Day 7 - Step 2: Customer Enquiry Counter */

const customerCountElement =
    document.getElementById("customerCount");

customerCountElement.textContent =
    "I currently have " + customers.length +
    " sample customer enquiries in my system.";
    /* Day 7 - Step 3: Display Featured Customer */

const featuredCustomerElement =
    document.getElementById("featuredCustomer");

const featuredCustomer = customers[0];

featuredCustomerElement.textContent =
    "Sample customer: " + featuredCustomer.name +
    " | Service: " + featuredCustomer.service +
    " | Budget: ₹" + featuredCustomer.budget;
    /* Day 7 - Step 4: Show Next Customer */

let currentCustomerIndex = 0;

const nextCustomerButton =
    document.getElementById("nextCustomerButton");

nextCustomerButton.addEventListener("click", function () {
    currentCustomerIndex =
        (currentCustomerIndex + 1) % customers.length;

    const selectedCustomer = customers[currentCustomerIndex];
    let budgetCategory;

if (selectedCustomer.budget >= 40000) {
    budgetCategory = "Premium";
} else if (selectedCustomer.budget >= 30000) {
    budgetCategory = "Standard";
} else {
    budgetCategory = "Starter";
}

console.log(
    selectedCustomer.name + " belongs to the " +
    budgetCategory + " budget category."
);

    featuredCustomerElement.textContent =
        "Sample customer: " + selectedCustomer.name +
        " | Service: " + selectedCustomer.service +
        " | Budget: ₹" + selectedCustomer.budget;
});

