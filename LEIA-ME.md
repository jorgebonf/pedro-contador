# Pedro · O Contador — pacote para publicar (PWA)

## O que tem aqui
| Arquivo | Para que serve |
|---|---|
| index.html | O Pedro (sua versão v2), com o modo aplicativo ativado |
| manifest.webmanifest | Nome, cores e ícones usados na instalação |
| sw.js | Faz o Pedro abrir mesmo sem internet (guarda só o aplicativo, nunca as despesas) |
| icons/ | Ícones do app (celular, computador e iPhone) |
| 404.html e .nojekyll | Ajudas para o GitHub Pages funcionar sem erro |

## Publicar no GitHub Pages
1. Extraia o ZIP.
2. No repositório pedro-contador: Add file > Upload files.
3. Arraste TODO o conteúdo da pasta (inclusive a pasta icons). O index.html deve ficar na raiz.
4. Commit changes.
5. Settings > Pages > Deploy from a branch > main > /(root) > Save.
6. Aguarde alguns minutos e abra o link que aparecer.

Obs.: o arquivo .nojekyll fica oculto no Windows; se não for enviado, o site funciona mesmo assim.

## Instalar
- Computador (Chrome/Edge): botão "Instalar Pedro" no topo, ou ícone de instalar na barra de endereço.
- Android (Chrome): botão "Instalar Pedro" ou menu ⋮ > Instalar app.
- iPhone/iPad (Safari): Compartilhar > Adicionar à Tela de Início.

## Atualizar o Pedro no futuro
1. Substitua o index.html no GitHub pela nova versão.
2. Abra o sw.js e aumente VERSION (ex.: v2.0.0 > v2.0.1).
3. Os usuários recebem a nova versão ao reabrir o app com internet. Os dados não são apagados.

## Dados
- Cada pessoa tem sua própria base, salva no próprio navegador/dispositivo. Ninguém vê as despesas de outra pessoa.
- Celular e computador NÃO sincronizam entre si.
- Para levar seus dados da versão em arquivo HTML para o link publicado: no HTML antigo, Categorias e dados > Backup JSON; no link publicado, Importar backup.
- Nunca suba backups JSON/CSV para o GitHub: o repositório é público.
