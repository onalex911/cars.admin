import React from 'react'
import '../../../css/sb-admin-2.css'
import s from './UploadImages.module.css'
import {checkVinActionCreator, updateVinActionCreator} from "../../../redux/store";

const UploadImages = (props) => {

    //let newVin = React.createRef()
    //let checkVin = React.createRef()

    let onVINChange = (e) => {
        //debugger
        //let text = newVin.current.value
        let text = e.target.value
        //вызываем Action Creator для корректного создания объекта именно для нужного действия dispatcher-а
        let action = updateVinActionCreator(text)
        props.dispatch(action)
    }

    let onCheckVINClick = () => {
        //вызываем Action Creator для корректного создания объекта именно для нужного действия dispatcher-а
        let action = checkVinActionCreator()
        props.dispatch(action)
    }

    return (
        <div className='row'>

            <h6>Uploading of Images</h6>
            <div className={s.content}>
                <input
                    type='text'
                    placeholder={`Введите VIN`}
                    onChange={onVINChange}
                    value={props.state.imageService.currentVIN}
                />

                <a className={`${s.margined} btn btn-primary btn-icon-split`}

                   onClick={onCheckVINClick}
                ><span className={`text text_white-50`}>Проверить</span></a>

                <div className={`${s.margined} bg_gradient_danger text_white-50 text_center`}>{props.state.imageService.rightVIN}</div>
            </div>

        </div>
    )
}

export default UploadImages