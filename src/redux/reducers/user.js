let initialState = {
    userList : [
         {
            "id": 1,
            "fullname": "Dang Thanh Hang",
            "username": "thanghangdang",
            "email": "thanghangdang16@gmail.com",
            "phoneNumber": "12345",
            "type": "VIP"
        },
        {
            "id": 2,
            "fullname": "Quynh nhu",
            "username": "thanghangdang",
            "email": "thanghangdang16@gmail.com",
            "phoneNumber": "12345",
            "type": "VIP"
        }],
    keyword : "",
    userEdit: null,
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "DELETE": {
            let userList = [...state.userList];
            //Tìm vị trí
            const index = userList.findIndex(
                (user) => user.id === action.payload.id
            );
            if(index !== -1){
                userList.splice(index, 1);
            }
            state.userList = userList;
            return {...state};
        }
        
        case "GET_KEYWORD": {
            state.keyword = action.payload;
            return {...state}; 
        }

        case "EDIT": {
            state.userEdit = action.payload;
            return {...state};
        }

        case "SUBMIT": {
            let userList = [...state.userList];
            if(action.payload.id){
                //UPDATE
                const index = userList.findIndex((user) => 
                    user.id === action.payload.id
                );
                if (index !== -1){
                    userList[index] = action.payload;
                }
            }
            else{
                //ADD
                const userClone = {...action.payload, id: new Date().getTime()};
                userList = [...state.userList, userClone];
            }
            state.userList = userList;
            return {...state};
        }

        default:
            //Trả về state mới
            return {...state};
    }

}

export default userReducer;