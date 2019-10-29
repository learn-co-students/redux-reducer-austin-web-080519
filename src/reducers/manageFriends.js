export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex((friend) => { 
                return friend.id === action.id 
            })
            let newFriends = [...state.friends]
            newFriends.splice(index, 1)
            return {friends: newFriends}
        default:
            return state;
    }
}
