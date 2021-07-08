const createTypeAddPost =  'ADD-POST';
const createTypeChengeTextPost =  'CHANGE-TEXT-POST';

export const createActionAddPost = () => ({ type: createTypeAddPost });
export const createActionChengeTextPost = (text) => ({ type: createTypeChengeTextPost, newText: text });

let initialState = {
    posts: [
        { id: 1, name: 'Alexey', message: 'Это я', like: 12 },
        { id: 2, name: 'Andrey', message: 'Привет, это второй пост', like: 122 },
        { id: 3, name: 'Dima', message: 'Еще один пост', like: 1 }
     ],
     descripcion: [
        { id: 0, name: 'Rustam Kurbonov', data: '25.03.1996', sity: 'Nizhniy Novgorod ' }
     ],
     valueTextInput: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case createTypeAddPost:
            let newPost = {
                id: state.posts <= 0 ? 0 : state.posts.length,
                name: 'User',
                message: state.valueTextInput,
                like: 0
            };

            if (newPost.message !== '') {
                state.posts.push(newPost);
                state.valueTextInput = '';
            }

            return state;
        case createTypeChengeTextPost:
            state.valueTextInput = action.newText;

            return state;
        default:
            return state;
    }
}

export default profileReducer;