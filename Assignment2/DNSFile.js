const dns = require("node:dns");

// Use this to resolve a domain name to an IP address.
// Use Case: When connecting to services or APIs by hostname.

dns.lookup("facebook.com", (err, address, family)=>{
    console.log('IP Address:', address);
    console.log('IP Version:', family === 4 ? "IPV" + family : "IPV6");
});


// Use these to get all IPv4 or IPv6 addresses for a domain.
//  Use Case: Load balancing, failover, or diagnostics.

dns.resolve4("facebook.com", (err, address)=>{
    console.log("IP Address: " , address);
})

dns.resolve6("facebook.com", (err, address)=>{
    console.log("IPV6 Address: ", address);
})


// Get Mail Exchange (MX) records for a domain.
// Use Case: If you're working with email servers or services.

dns.resolveMx("facebook.com", (err, address)=>{
    console.log("MX Records: ", address);
})


// Resolve TXT records, often used in email verification (SPF, DKIM) or domain ownership.
// Use Case: Email verification or domain configuration automation.

dns.resolveTxt("facebook.com", (err, record)=>{
    console.log("ResolveText Record : ", record);
})


// Resolve Name Servers for a domain. 
// Use Case: Useful in debugging DNS propagation or domain issues.

dns.resolveNs("facebook.com",(err, address)=>{
    console.log("ResolveNs use: ", address);
})



// Perform Reverse DNS Lookup (IP to hostname).
// Use Case: Logging, geolocation, identifying users/attackers.

dns.reverse('8.8.8.8', (err, hostname)=>{
    console.log("hostname: ", hostname)
})



