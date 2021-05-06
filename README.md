# Portafolio

Este es el sitio web de https://burongtz.com

## ¿Cómo instalar en local?

* Clonar este repositorio.
* `nvm use`.
* `npm install`.
* `npm run dev` para compilar.
* `npm run serve` para iniciar un servidor local.
* Abrir la url http://127.0.0.1:8081 en tu navegador preferido.

## ¿Cómo publicar el contenido?

* Clonar y ejecutar localmente con los pasos anteriores.
* Asegurar que no exista la carpeta `dist`, si existe eliminar `rm -rfv ./dist`.
* `git fetch origin gh-pages`.
* `git worktree add ./dist gh-pages`.

Los pasos anteriores se hacen sólo una ves. Para publicar seguir los pasos:

* `npm run prod`
* `cd dist`
* `git add . && git commit -m "Release $(date)"`
* `git push`
* `cd ..` para regresar al código fuente
