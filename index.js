require('dotenv').config()
const http = require('http')

const personalInfo = {
    nombre: 'Yoel Fabricio',
    titulo: 'Desarrollador Web',
    email: 'tu@email.com',
    telefono: '+123 456 7890',
    ubicacion: 'Ciudad, País',
    descripcion: 'Apasionado por el desarrollo web y la creación de experiencias digitales impactantes.'
}

function requestController(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${personalInfo.nombre} - ${personalInfo.titulo}</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            
            body {
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                color: #2d3436;
            }
            
            .card {
                background: rgba(255, 255, 255, 0.9);
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                padding: 40px;
                max-width: 600px;
                width: 100%;
                animation: fadeIn 1s ease-in-out;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .header {
                text-align: center;
                margin-bottom: 30px;
                animation: slideDown 0.8s ease-out;
            }
            
            .name {
                font-size: 2.5rem;
                color: #2d3436;
                margin-bottom: 5px;
            }
            
            .title {
                color: #6c5ce7;
                font-weight: 400;
                margin-bottom: 20px;
            }
            
            .info {
                margin: 25px 0;
            }
            
            .info-item {
                display: flex;
                align-items: center;
                margin: 15px 0;
                color: #636e72;
                transition: transform 0.3s ease;
            }
            
            .info-item:hover {
                transform: translateX(10px);
            }
            
            .info-item i {
                margin-right: 15px;
                color: #6c5ce7;
                width: 20px;
                text-align: center;
            }
            
            .description {
                line-height: 1.6;
                color: #2d3436;
                margin: 25px 0;
                text-align: center;
                animation: fadeIn 1.5s ease-in-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideDown {
                from { 
                    opacity: 0; 
                    transform: translateY(-30px);
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0);
                }
            }
            
            .social-links {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 30px;
            }
            
            .social-link {
                color: #6c5ce7;
                font-size: 1.5rem;
                transition: transform 0.3s ease, color 0.3s ease;
            }
            
            .social-link:hover {
                transform: translateY(-5px) scale(1.1);
                color: #a29bfe;
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    </head>
    <body>
        <div class="card">
            <div class="header">
                <h1 class="name">${personalInfo.nombre}</h1>
                <h2 class="title">${personalInfo.titulo}</h2>
            </div>
            
            <div class="info">
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <span>${personalInfo.email}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>${personalInfo.telefono}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${personalInfo.ubicacion}</span>
                </div>
            </div>
            
            <p class="description">
                ${personalInfo.descripcion}
            </p>
            
            <div class="social-links">
                <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </body>
    </html>
    `
    
    res.end(html)
}

const server = http.createServer(requestController)
const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log(`Aplicación corriendo en: http://localhost:${PORT}`)
})