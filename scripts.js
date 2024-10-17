const { exec } = require("child_process");

let clientProcess;
let serverProcess;

const arg = process.argv[2];

function runCommand(command, callback) {
  const process = exec(command);

  process.stdout.on("data", (data) => console.log(data.toString()));
  process.stderr.on("data", (data) => console.error(data.toString()));

  if (callback) {
    process.on("close", callback);
  }

  return process; // Return the process reference
}

function cleanup() {
  console.log("Stopping servers...");

  if (clientProcess) {
    clientProcess.kill(); // Kill the client process
  }
  if (serverProcess) {
    serverProcess.kill(); // Kill the server process
  }

  process.exit(); // Exit the parent process
}

process.on("SIGINT", cleanup); // Listen for Ctrl+C (SIGINT)

// Start the client and server processes
switch (arg) {
  case "dev":
    console.log("Starting Client in Dev Mode...");
    clientProcess = runCommand("npm run dev --prefix client", (code) => {
      console.log(`Client exited with code ${code}`);
    });

    console.log("Starting Server in Dev Mode...");
    serverProcess = runCommand("nodemon server/index.js", (code) => {
      console.log(`Server exited with code ${code}`);
    });
    break;

  default:
    console.log(`Unknown command: ${arg}`);
    process.exit(1); // Exit with error code for unknown command
}
