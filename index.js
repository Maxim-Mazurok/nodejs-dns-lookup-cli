const dns = require('dns');

if (process.argv.length < 3) {
    console.error('Please, provide a domain name');
    process.exit(1);
}

dns.lookup(process.argv[2], (err, address) => {
    if (err) {
        console.error('An error occurred!');
        process.exit(1);
    }
    console.log(address);
});
