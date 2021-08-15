let initialState = {
    taiXiu: true, //True: tài (3-10), False: xỉu (11-18)
    mangXucXac: [
        {ma:1, hinhAnh: "./img/gamexucxac/1.jpg"},
        {ma:1, hinhAnh: "./img/gamexucxac/1.jpg"},
        {ma:1, hinhAnh: "./img/gamexucxac/1.jpg"},
    ],
    soVanThang: 0,
    tongSoVanChoi: 0,
    thongBao: "",
    tongDiem: 3,
    taiKhoan: 0,
    tienCuoc: 0,
}

const gameTaiXiuReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case "DAT_CUOC": {
            state.taiXiu = action.taiXiu;
            return {...state}
        }

        case "TIEN_CUOC": {
            state.tienCuoc = action.payload;
            return {...state}
        }

        case "PLAY_GAME": {
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random()*6)+1;
                let xucXacNgauNhien = {ma:soNgauNhien, hinhAnh: `./img/gamexucxac/${soNgauNhien}.jpg`};
                
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNgauNhien;
            state.tongSoVanChoi += 1;
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma;
            }, 0);

            if((tongSoDiem > 10 && state.taiXiu === true) || (tongSoDiem <= 10 && state.taiXiu === false)){
                state.soVanThang += 1;
                let thongBao = "Chúc mừng!!! Bạn thắng rồi!!!";
                state.thongBao = thongBao;
                if(state.tienCuoc ===""){
                    let taikhoan = state.taiKhoan
                    state.taiKhoan = taikhoan;
                }
                else{
                    let taikhoan = state.taiKhoan + parseInt(state.tienCuoc);
                    state.taiKhoan = taikhoan; 
                }
            }
            else{
                let thongBao1 = "Thua rồi!!! Xui quá, thôi làm lại!!!";
                state.thongBao = thongBao1;

                if(state.tienCuoc ===""){
                    let taikhoan2 = state.taiKhoan
                    state.taiKhoan = taikhoan2;
                }
                else{
                    let taikhoan3 = state.taiKhoan - parseInt(state.tienCuoc);
                    state.taiKhoan = taikhoan3; 
                }
            }
            state.tongDiem = tongSoDiem;
            return {...state}
        }

        default:
            return {...state}
    }
}

export default gameTaiXiuReducer;