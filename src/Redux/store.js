import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

export let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, name: 'Alexey', message: 'Это я', like: 12 },
            { id: 2, name: 'Andrey', message: 'Привет, это второй пост', like: 122 },
            { id: 3, name: 'Dima', message: 'Еще один пост', like: 1 }
         ],
         descripcion: [
            { id: 0, name: 'Rustam Kurbonov', data: '25.03.1996', sity: 'Nizhniy Novgorod ' }
         ],
         valueTextInput: ''
      },
      messagePage: {
         users: [
            { id: 0, name: 'Alexey' },
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Ric' }
         ],
         messangs: [
            { id: 0, name: 'Alexey', message: 'Hi' },
            { id: 1, name: 'Me', message: 'Hi!' },
            { id: 2, name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' },
            { id: 3, name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' },
            { id: 4, name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' }
         ],
         valueTextMessage: ''
      },
      siteBarPage: {
         friends: [
            { id: 0, name: 'Alexey' },
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Dima' }
         ]
      }
   },
   _callSubscriber() {
   },

   subscride(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(action, this._state.profilePage);
      this._state.messagePage = messageReducer(action, this._state.messagePage);

      this._callSubscriber(this._state);
   }
}