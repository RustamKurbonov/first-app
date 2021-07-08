const createTypeAddMessage = 'ADD-MESSAGE';
const createTypeChengeTextMessage = 'CHANGE-TEXT-MESSAGE';

export const createActionAddMessage = () => ({ type: createTypeAddMessage });
export const createActionChengeTextMessage = (text) => ({ type: createTypeChengeTextMessage, message: text });

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case createTypeAddMessage:
            let newMessage = {
                id: state.messangs <= 0 ? 0 : state.messangs.length,
                name: 'Me',
                message: state.valueTextMessage
            }

            if (newMessage.message !== '') {
                state.messangs.push(newMessage);
                state.valueTextMessage = '';
            }

            return state;
        case createTypeChengeTextMessage:
            state.valueTextMessage = action.message;

            return state;
        default:
            return state;
    }
}

export default messageReducer;