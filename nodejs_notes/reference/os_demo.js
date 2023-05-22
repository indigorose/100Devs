// How node interacts with the os.
const os = require('os')

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Memory info
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());

