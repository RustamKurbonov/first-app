import {rerender} from './../rerender';

export let state = {
   profilePage: {
      posts: [
         { id: 1, name: 'Alexey', message: 'Это я', like: 12},
         { id: 2, name: 'Andrey', message: 'Привет, это второй пост', like: 122 },
         { id: 3, name: 'Dima', message: 'Еще один пост', like: 1 }
      ],
      descripcion: [
         { name: 'Rustam Kurbonov', data: '25.03.1996', sity: 'Nizhniy Novgorod ' }
      ],
      valueTextInput: ''
   },
   messagePage: {
      users: [
         { name: 'Alexey', id: 1 },
         { name: 'Dima', id: 2 },
         { name: 'Ric', id: 3 }
      ],
      messangs: [
         { name: 'Alexey', messange: 'Hi' },
         { name: 'Me', messange: 'Hi!' },
         { name: 'Alexey', messange: 'nkjn wenfjnlnf nvj nwoefnlnf' },
         { name: 'Alexey', messange: 'nkjn wenfjnlnf nvj nwoefnlnf' },
         { name: 'Alexey', messange: 'nkjn wenfjnlnf nvj nwoefnlnf' }
      ]
   },
   siteBarPage: {
      friends: [
         { name: 'Alexey' },
         { name: 'Andrey' },
         { name: 'Dima' }
      ]
   }
}

export let addPost = () => {
   let newPost = { 
      id: 5, 
      name: 'Alexey',
      message: state.profilePage.valueTextInput, 
      like: 0 };

      state.profilePage.posts.push(newPost);
      state.profilePage.valueTextInput = '';
      rerender(state);
   }

export let changeStateTextPost = (text) => {
   state.profilePage.valueTextInput = text;

   rerender(state);
}
