
// ===============================
// STEP 2: ARRAY DESTRUCTURING
// ===============================

const numbers = [10, 20, 30, 40, 50];

// basic destructuring
const [a, b, c] = numbers;

console.log("A:", a); // 10
console.log("B:", b); // 20
console.log("C:", c); // 30

// skipping elements
const [first, , third] = numbers;
console.log("First:", first);
console.log("Third:", third);

// rest operator
const [x, ...rest] = numbers;
console.log("First element:", x);
console.log("Rest:", rest);


// ===============================
// STEP 3: OBJECT DESTRUCTURING
// ===============================

const student = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);


// ===============================
// STEP 4: ADVANCED DESTRUCTURING
// ===============================

const user = {
    username: "john123",
    profile: {
        email: "john@example.com",
        address: {
            country: "India",
            state: "Delhi"
        }
    }
};

// nested destructuring
const {
    username,
    profile: {
        email,
        address: { country }
    }
} = user;

console.log("Username:", username);
console.log("Email:", email);
console.log("Country:", country);


// default values + renaming
const person = {
    fullName: "Amit"
};

const { fullName, age: userAge = 25 } = person;

console.log("Name:", fullName);
console.log("Age (default):", userAge);


// ===============================
// STEP 5: DESTRUCTURING IN FUNCTIONS
// ===============================

// object destructuring in parameters
function showUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const userInfo = {
    name: "Sita",
    age: 20
};

showUser(userInfo);


// array destructuring in function
function sum([num1, num2]) {
    return num1 + num2;
}

console.log("Sum:", sum([5, 10]));