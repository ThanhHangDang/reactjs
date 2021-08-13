let initialState = {
    listProduct : [
        {
          "maSP": 1,
          "tenSP": "VinSmart Live",
          "manHinh": "AMOLED, 6.2\", Full HD+",
          "heDieuHanh": "Android 9.0 (Pie)",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 5700000,
          "hinhAnh": "./img/vsphone.jpg"
        },
      
        {
          "maSP": 2,
          "tenSP": "Meizu 16Xs",
          "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
          "heDieuHanh": "Android 9.0 (Pie); Flyme",
          "cameraTruoc": "20 MP",
          "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 7600000,
          "hinhAnh": "./img/meizuphone.jpg"
        },
      
        {
          "maSP": 3,
          "tenSP": "Iphone XS Max",
          "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
          "heDieuHanh": "iOS 12",
          "cameraSau": "Chính 12 MP & Phụ 12 MP",
          "cameraTruoc": "7 MP",
          "ram": "4 GB",
          "rom": "64 GB",
          "giaBan": 27000000,
          "hinhAnh": "./img/applephone.jpg"
        }
    ],

    detailProduct : {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },
    

    listCart : [],
}

const shoppingCartReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_PRODUCT": {
            let listCart = [...state.listCart];
            const index = listCart.findIndex(
                (product) => product.maSP === action.payload.maSP
            );
            if(index !== -1){
               listCart[index].soLuong += 1;
            }
            else{
                const productCart = {
                    maSP: action.payload.maSP,
                    tenSP: action.payload.tenSP,
                    hinhAnh: action.payload.hinhAnh,
                    soLuong: 1,
                    donGia: action.payload.giaBan,
                }
                listCart = [...state.listCart, productCart];
            }
            state.listCart = listCart;
            return {...state}
        }
       
        case "DETAIL_PRODUCT": {
            state.detailProduct = action.payload;
            return {...state}
        }

        case "DELETE_PRODUCT": {
            let listCart = [...state.listCart];
            const index = listCart.findIndex(
                (product) => product.maSP === action.payload.maSP
            );
            if(index !== -1){
                listCart.splice(index, 1)
            }
            state.listCart = listCart;
            return {...state}
        }

        case "UPDATE_SL":{
            let listCart = [...state.listCart];
            const index = listCart.findIndex(
                (item) => item.maSP === action.payload.maSP
            );
            if(index !== -1){
                if(action.status){
                    //tăng SL
                    listCart[index].soLuong += 1;
                }
                else{
                    //giảm SL
                    if(listCart[index].soLuong > 1){
                        listCart[index].soLuong -= 1;
                    }
                }
            }
            state.listCart = listCart;
            return {...state}
        }

        default:
           return {...state}
    }
}

export default shoppingCartReducer;