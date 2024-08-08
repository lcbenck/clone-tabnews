function Home() {
  return <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página em Construção</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .image-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .image-container a {
            margin: 10px;
        }
        .image-container img {
            max-width: 200px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Página em Construção</h1>
    <p>Estamos trabalhando para melhorar a sua experiência. Em breve, novidades!</p>
    
    <div class="image-container">
        <a href="https://unsplash.com/" target="_blank">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200" alt="Unsplash">
        </a>
        <a href="https://pixabay.com/" target="_blank">
            <img src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_960_720.jpg" alt="Pixabay">
        </a>
        <a href="https://www.pexels.com/" target="_blank">
            <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Pexels">
        </a>
    </div>
</body>
</html>;
}

export default Home;
