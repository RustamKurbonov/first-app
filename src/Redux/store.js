const createTypeAddPost = () => 'ADD-POST';
const createTypeChengeTextPost = () => 'CHANGE-TEXT-POST';
const createTypeAddMessage = () => 'ADD-MESSAGE';
const createTypeChengeTextMessage = () => 'CHANGE-TEXT-MESSAGE';

export let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, name: 'Alexey', message: 'Это я', like: 12 },
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
            { name: 'Alexey', message: 'Hi' },
            { name: 'Me', message: 'Hi!' },
            { name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' },
            { name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' },
            { name: 'Alexey', message: 'nkjn wenfjnlnf nvj nwoefnlnf' }
         ],
         valueTextMessage: ''
      },
      siteBarPage: {
         friends: [
            { name: 'Alexey' },
            { name: 'Andrey' },
            { name: 'Dima' }
         ]
      }
   },
   _callSubscriber() {
   },

   subscride(observer) {
      this._callSubscriber = observer;
   },
   getState(){
      return this._state;
   },

   dispatch(action) {
      if (action.type === createTypeAddPost()){
         let newPost = {
            id: 5,
            name: 'Alexey',
            message: this._state.profilePage.valueTextInput,
            like: 0
         };

         if (newPost.message !== ''){
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.valueTextInput = '';
            this._callSubscriber(this._state);
         }
      } else if (action.type === createTypeChengeTextPost()){
         this._state.profilePage.valueTextInput = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === createTypeAddMessage()){
         let newMessage = {
            name: 'Me',
            message: this._state.messagePage.valueTextMessage
         }

         if(newMessage.message !== ''){
            this._state.messagePage.messangs.push(newMessage);
            this._state.messagePage.valueTextMessage = '';
            this._callSubscriber(this._state);
         }
      } else if (action.type === createTypeChengeTextMessage()){
         this._state.messagePage.valueTextMessage = action.message;
         this._callSubscriber(this._state);
      }
   }
}
export const createActionAddPost = () => ({ type: createTypeAddPost() });
export const createActionChengeTextPost = (text) => ({ type: createTypeChengeTextPost(), newText: text });
export const createActionAddMessage = () => ({ type: createTypeAddMessage() });
export const createActionChengeTextMessage = (text) => ({ type: createTypeChengeTextMessage(), message: text });