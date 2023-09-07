export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQDR70lOYjDtPpCvT6IrU2l3V9I6sT333-hIpafKQWLruMmC4cGippYGeuEOIQePvmW4We4oS_z7aXLcydQiZAG2M299mVXl_6WhUyog_l6zbs_W244Rh13svQvKjuaMbM6GIm9X9DtUDcop9XT54m_kr4BQKKy3UZ46lNCo6VfalnIjdvRcy8IcXajh-eM'
}

const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default: return state
    }
}

export default reducer