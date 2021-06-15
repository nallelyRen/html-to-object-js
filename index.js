var html = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Staatliches&family=Work+Sans:wght@300;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    
    <title>Magazine Cover</title>
    
</head>
<body>
    <div class="container">
        <div class="wrapper">
            <header class="header">
                <p>NAOMI WALDER TALKS LIFE AFTER MARCH FOR OUR LIVES</p>
                <h1>PORTRAIT</h1>
                <span class="date">JUNE 2021</span>
            </header>
            <div class="content-box">
                <aside class="left-aside">
                    <article class="article-1">
                        <span>IN FOCUS</span>
                        <h3>TALES OF THE CITY</h3>
                        <p>Behind the scenes look at the long history of the Metro</p>
                    </article>
                    <article class="article-2">
                        <h3>FUGITIVE BANKER TELLS ALL</h3>
                    </article>
                    <article class="article-3">
                        <h3>HIGHER RAINBOWS</h3>
                        <p>D.C. couple starts a LGBT-history Instagram</p>
                    </article>
                </aside>
                <main>
                    <img class= "model-img" src="css/img/model.png" alt="" height="820px">
                </main>
                <aside class="right-aside">
                    <article class="article-1">
                        <h6>EXCLUSIVE</h6>
                        <h2>DANN GHUNDI</h2>
                    </article>
                </aside>
            </div>
            <footer>
                <img class="barcode-img" src="css/img/qr-code.png" height="50px" alt="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quidem iusto, atque.</p>
            </footer>
        </div>

    </div>
</body>
</html>
`;

function MagazineData(string) {
    var temp = document.createElement("div");
    temp.innerHTML = string;

    var header = [];
    let head = temp.getElementsByTagName("header");
    for (var i = 0, max = head.length; i < max; i++) {
        var element = head[i].innerText;
        header.push(element);
    }
   

    var articles = [];
    head = temp.getElementsByTagName("article");
    for (var i = 0, max = head.length; i < max; i++) {
        var element = head[i].innerText;
        articles.push(element);
    }
    
    return ({
        heading: header.toString(),       
        articles: articles.toString(), 
    })
}

MagazineData(html);