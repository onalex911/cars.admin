//задаем идентификатор действия, чтобы избежать опечаток (WebStorm будет выдавать правильную подсказку)
const UPDATE_VIN = 'UPDATE-VIN';    //функция обновления значения вводимого VIN
const CHECK_VIN = 'CHECK-VIN';      //влидация VIN

const inputVinReducer = (state, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case UPDATE_VIN:
            stateCopy.imageService.currentVIN = action.newText
            return stateCopy

        case CHECK_VIN:
            if (stateCopy.imageService.currentVIN.length !== 17) {
                stateCopy.imageService.rightVIN = ''
                alert("VIN должен состоятиь из 17-ти символов!")

            } else {
                stateCopy.imageService.rightVIN = state.imageService.currentVIN
            }

            return stateCopy

        default:
            return stateCopy

    }

}

//создаем Action Creator для корректного создания объекта именно для данного действия dispatcher-а
export const updateVinActionCreator = (text) => {
    return {type: UPDATE_VIN, newText: text}
}

export const checkVinActionCreator = () => {
    return {type: CHECK_VIN}
}

export default inputVinReducer