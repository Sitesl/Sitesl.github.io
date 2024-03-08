<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeira Classe Leilões</title>
    <style>
        /* Estilos CSS podem ser adicionados aqui */
    </style>
</head>
<body>
    <header>
        <h1>Primeira Classe Leilões</h1>
        <nav>
            <ul>
                <li><a href="#">Leilões em Destaque</a></li>
                <li><a href="#">Próximos Leilões</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <?php
        // Verificar se o usuário está autenticado
        $autenticado = false; // Simular que o usuário não está autenticado
        
        if ($autenticado) {
            // Conteúdo da página inicial para usuários autenticados
            echo "<section>
                    <h2>Leilão em Destaque</h2>
                    <article>
                        <h3>Mamadeira Antiga</h3>
                        <p>Descrição da mamadeira e outras informações relevantes.</p>
                        <img src=\"caminho_para_a_imagem_da_mamadeira.jpg\" alt=\"Mamadeira Antiga\">
                        <p>Valor atual do lance: R$ X,XX</p>
                        <a href=\"#\">Faça seu lance!</a>
                    </article>
                </section>
                <section>
                    <h2>Próximos Leilões</h2>
                    <ul>
                        <li>
                            <h3>Nome do Produto</h3>
                            <p>Descrição do produto e outras informações relevantes.</p>
                            <img src=\"caminho_para_a_imagem_do_produto.jpg\" alt=\"Nome do Produto\">
                            <p>Data do leilão: DD/MM/YYYY</p>
                            <a href=\"#\">Saiba mais</a>
                        </li>
                        <!-- Adicione mais <li> conforme necessário para outros leilões -->
                    </ul>
                </section>";
        } else {
            // Formulário de login para usuários não autenticados
            echo "<div class=\"container\">
                    <h1>Login</h1>
                    <form action=\"login.php\" method=\"post\">
                        <label for=\"username\">Usuário:</label>
                        <input type=\"text\" id=\"username\" name=\"username\" required>
                        <label for=\"password\">Senha:</label>
                        <input type=\"password\" id=\"password\" name=\"password\" required>
                        <button type=\"submit\">Login</button>
                    </form>
                </div>";
        }
        ?>
    </main>
    <footer>
        <p>&copy; 2024 Primeira Classe Leilões. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
