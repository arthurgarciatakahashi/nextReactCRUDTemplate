# Como usar

1. Abra uma nova aba no terminal
2. Execute o seguinte comando:

(caso tenha instalado o json-server como dependencia)
yarn run json-server -w -p 3333 ./mock/database.json

ou apenas

(caso tenha instalado o json-server como global)
json-server -w -p 3333 ./mock/database.json

3. Se quiaer utilizar a configuração do package pode usar o comando:

yarn mock