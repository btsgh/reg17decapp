export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// Simulated Database
		const database = {
			users: [],
		};

		// Utility Functions
		const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		// User Class
		class User {
			constructor(name, email, password) {
				if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
					throw new Error("Invalid input types for User constructor.");
				}
				this.name = String(name);
				this.email = String(email);
				this.password = String(password); // In real apps, passwords must be hashed.
			}
		}

		// Simulated API Calls
		const api = {
			registerUser: async (user) => {
				if (!(user instanceof User)) {
					throw new Error("Invalid user object.");
				}
				// Simulate server-side delay
				await delay(1000);
				if (database.users.some((dbUser) => dbUser.email === user.email)) {
					throw new Error("Email already registered.");
				}
				database.users.push(user);
				return `User ${user.name} registered successfully.`;
			},

			loginUser: async (email, password) => {
				// Simulate server-side delay
				await delay(1000);
				const user = database.users.find((dbUser) => dbUser.email === email && dbUser.password === password);
				if (!user) {
					throw new Error("Invalid email or password.");
				}
				return `Welcome back, ${user.name}!`;
			},

			listUsers: async () => {
				// Simulate server-side delay
				await delay(500);
				return database.users;
			},
		};

		// Registration and Login Flow
		async function main() {
			console.log("Starting the application...\n");

			try {
				// User Registration
				const name = "John Doe";
				const email = "johndoe@example.com";
				const password = "password123";

				console.log("Registering user...");
				const newUser = new User(name, email, password);
				const registerMessage = await api.registerUser(newUser);
				console.log(registerMessage);

				// Attempt to Register with Same Email (Typecasting Example)
				console.log("\nAttempting to register with the same email...");
				const duplicateUser = new User("Duplicate", email, "password456");
				await api.registerUser(duplicateUser);
			} catch (error) {
				console.error("Error during registration:", String(error)); // Typecasting error to string
			}

			try {
				// User Login
				console.log("\nLogging in...");
				const loginMessage = await api.loginUser("johndoe@example.com", "password123");
				console.log(loginMessage);

				// Invalid Login Attempt
				console.log("\nAttempting login with invalid credentials...");
				await api.loginUser("johndoe@example.com", "wrongpassword");
			} catch (error) {
				console.error("Error during login:", String(error)); // Typecasting error to string
			}

			// List Users
			console.log("\nListing all registered users...");
			const users = await api.listUsers();
			console.log(users.map((user) => ({ name: user.name, email: user.email })));
		}

		// Start the app
		main().catch((error) => console.error("Unhandled Error:", error));

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}