const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Serve the standalone demo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'standalone-demo.html'));
});

// Fallback for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'standalone-demo.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 SEO Analysis App is running at:`);
    console.log(`   • http://localhost:${PORT}`);
    console.log(`   • http://127.0.0.1:${PORT}`);
    console.log(`\n🎯 Try these demo URLs:`);
    console.log(`   • blog.example.com (Score: 94/100)`);
    console.log(`   • shop.example.com (Score: 52/100)`);
    console.log(`   • app.example.com (Score: 28/100)`);
    console.log(`\n⭐ Features:`);
    console.log(`   • Real-time SEO analysis`);
    console.log(`   • Responsive design`);
    console.log(`   • Accessibility compliant`);
    console.log(`   • Offline capable`);
});
