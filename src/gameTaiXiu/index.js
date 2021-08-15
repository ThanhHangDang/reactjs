import React, { Component } from 'react';
import "./game.css";
import XucXac from './xucxac';
import ThongTinTroChoi from './thongtintrochoi';
import {connect} from "react-redux";

class GameTaiXiu extends Component {
    render() {
        return (
            <div className="game">
                <div className="title-game text-center mt-5 mb-5 display-4">
                    Game Tài Xỉu
                </div>

                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button 
                            className="btnGame"
                            onClick={
                                () => {this.props.datCuoc(true)}
                            }
                        >
                            TÀI
                        </button>
                    </div>
                    <div className="col-2">
                        <XucXac />    
                    </div>
                    <div className="col-5">
                        <button 
                            className="btnGame"
                            onClick={
                                () => {this.props.datCuoc(false)}
                            }
                        >
                            XỈU
                        </button>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <ThongTinTroChoi /> 
                    <button 
                        className="btn btn-success p-5 display-4 mt-5"
                        onClick={() => {this.props.playGame()}}
                    >
                        PLAY GAME
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            const action = {
                type: "DAT_CUOC",
                taiXiu,
            }
            dispatch(action);
        },

        playGame: () => {
            const action ={
                type: "PLAY_GAME",
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps) (GameTaiXiu);