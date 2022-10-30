import {addPostAC, profileReducer, setUserStatusAC} from "./profile-reducer"

const startState ={
    profile: null,
    photoUser: null,
    status: "",
    posts: [
        {id: 1, message: 'Do you like me', likesCount: 1},
        {id: 2, message: 'What it is?', likesCount: 5},
        {id: 3, message: 'oh, no men', likesCount: 2},
        {id: 4, message: 'Oooo ha ha ha lol', likesCount: 10},
        {id: 5, message: 'Oooo ha ha ha lol', likesCount: 10}
    ]
};

// ===== TESTS =====//
test('new post should be added', () => {


    const endState1 = profileReducer(startState, addPostAC('New TEST post'))
    const endState2 = profileReducer(startState, addPostAC('TEST 2 post'))

    expect(endState1.posts[0].message).toBe('New TEST post')
    expect(endState2.posts[0].message).toBe('TEST 2 post')
    expect(endState2.posts.length).toBe(6)
    expect(endState2.posts[0].likesCount).toBe(0)
})

test('status should be added', () => {


    const endState1 = profileReducer(startState, setUserStatusAC('Test status'))


    expect(endState1.status).toBe('Test status')
    expect(endState1.status.length).toBe(11)

})