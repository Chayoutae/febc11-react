import yong from '../yong.js';
import App from './src/pages/app.js';

/*
      ┌───────── App ──────────┐
      │           │            │
    Header       Todo        Footer
                  │
              ┌───┴────┐
        TodoInput   TodoList
                       │
                    TodoItem
*/

yong.createRoot(document.getElementById('root')).render(App);