import polka from 'polka'
import fs from 'fs'
import { resolve } from 'path'
import sirv from 'sirv'
import App from './App.svelte'

const { PORT = 3000 } = process.env

polka()
    .use(sirv(resolve(__dirname, 'client')))
    .use(sirv('static'))
    .get('/', (req, res) => {
        const template = fs.readFileSync(resolve(__dirname, `template.html`), 'utf-8');
        const { head, html, css } = App.render();
        const styles = css && css.code ? `<style>${css.code}</style>` : '';
        const body = template
            .replace('%app:head%', head)
            .replace('%app:html%', html)
            .replace('%app:styles%', styles);
        res.end(body);
    })
    .listen(PORT, err => {
        if (err) console.log('error', err);
    })

console.log(`Server running on port ${PORT}`);
