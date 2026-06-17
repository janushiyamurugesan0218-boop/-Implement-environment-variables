// ========================================================
// 1. ENVIRONMENT VARIABLES CONFIGURATION MATRIX
// ========================================================
const ENV_CONFIG = {
    development: {
        API_URL: "https://sandbox-api.example.com/v1",
        ENABLE_DEBUG_LOGS: true,
        ENVIRONMENT_NAME: "development"
    },
    production: {
        API_URL: "https://api.example.com/v1",
        ENABLE_DEBUG_LOGS: false,
        ENVIRONMENT_NAME: "production"
    }
};

// SIMULATION SWITCH: Change this string to either "development" or "production"
const CURRENT_ENV = "development";

// Select the configuration matching our current environment setting
const processEnv = ENV_CONFIG[CURRENT_ENV];

// ========================================================
// 2. UI APPLICATION CONTROLLER
// ========================================================

// DOM Targets
const envBadge = document.getElementById('envBadge');
const apiEndpoint = document.getElementById('apiEndpoint');
const debugStatus = document.getElementById('debugStatus');
const testApiBtn = document.getElementById('testApiBtn');

// Initialize Dashboard values using our configuration variables
function initializeDashboard() {
    apiEndpoint.textContent = processEnv.API_URL;
    debugStatus.textContent = processEnv.ENABLE_DEBUG_LOGS ? "ACTIVE (VERBOSE)" : "DISABLED (MUTE)";
    
    // Adjust visual presentation badge
    envBadge.textContent = `${processEnv.ENVIRONMENT_NAME} mode`;
    if (processEnv.ENVIRONMENT_NAME === "production") {
        envBadge.className = "env-badge prod-mode";
    } else {
        envBadge.className = "env-badge dev-mode";
    }
}

// Action button logic
testApiBtn.addEventListener('click', () => {
    // If debug logging is enabled in our variables, write to browser logs
    if (processEnv.ENABLE_DEBUG_LOGS) {
        console.log(`[DEBUG LOG] Initializing network handshake to target system...`);
        console.log(`[DEBUG LOG] Routing packet destination via: ${processEnv.API_URL}`);
    }
    
    alert(`Request simulated! Sent to target endpoint: ${processEnv.API_URL}`);
});

// Run config initialization when script mounts
initializeDashboard();