import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return (
                <img 
                    key={index} 
                    className="ml-2 mb-2" 
                    style={{width:50, height:50}} 
                    src={xucXac.hinhAnh}
                    alt={xucXac.ma}
                ></img>
            );
        })
    }

    render() {
        return (
            <div>
                {this.renderXucXac()}
                <hr/>
                <span className="thongbao text-center">Tổng điểm: {this.props.tongDiem}</span>
                <hr/>
                <span className="thongbao text-center">{this.props.thongBao}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac : state.gameTaiXiuReducer.mangXucXac,
        thongBao : state.gameTaiXiuReducer.thongBao,
        tongDiem : state.gameTaiXiuReducer.tongDiem,
    }
}

export default connect(mapStateToProps, null) (XucXac);