const http = require('http');

// Create a simple HTML page that sets localStorage and redirects
const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Pricing Access</title>
</head>
<body>
    <script>
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'pricing-viewer@singularsity.com');
        window.location.href = '/pricing';
    </script>
    <p>Setting authentication and redirecting to pricing...</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/auth') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    res.writeHead(302, { 'Location': 'http://localhost:3000/auth' });
    res.end();
  }
});

server.listen(3001, () => {
  console.log('Auth helper server running on port 3001');
  console.log('Access: http://localhost:3001/auth');
});
