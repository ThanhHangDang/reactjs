import React, { Component } from 'react';
import {connect} from "react-redux";

class ThongTinTroChoi extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-3 text-right">
                    <span className="thongtintaikhoan">Tiền Cược</span>
                    <hr/>
                    <input 
                        type="number"
                        min="1"
                        onChange={(event) => {this.props.tienCuoc1(event.target.value)}}
                    />   
                    
                </div>
                <div className="col-6">
                    <div className="display-4">TIỀN CƯỢC: 
                        <span className="text-danger"> {this.props.tienCuoc}</span>
                    </div>
                    <div className="display-4">BẠN CHỌN: 
                        <span className="text-danger"> {this.props.taiXiu ? "TÀI" : "XỈU"}</span>
                    </div>

                    <div className="display-4">VÁN THẮNG:
                        <span className="text-success"> {this.props.soVanThang}</span>
                    </div>

                    <div className="display-4">TỔNG SỐ VÁN CHƠI:
                        <span className="text-primary"> {this.props.tongSoVanChoi}</span>
                    </div>
                </div>
                <div className="col-3 text-left">
                    <span className="thongtintaikhoan">Tài khoản hiện có:</span>
                    <hr/>
                    <p className="thongtintaikhoan">{this.props.taiKhoan}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soVanThang : state.gameTaiXiuReducer.soVanThang,
        tongSoVanChoi : state.gameTaiXiuReducer.tongSoVanChoi,
        taiXiu : state.gameTaiXiuReducer.taiXiu,
        taiKhoan : state.gameTaiXiuReducer.taiKhoan,
        tienCuoc : state.gameTaiXiuReducer.tienCuoc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tienCuoc1: (tiencuoc) => {
            const action = {
                type: "TIEN_CUOC",
                payload: tiencuoc,
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ThongTinTroChoi);