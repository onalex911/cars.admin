//задаем идентификатор действия, чтобы избежать опечаток (WebStorm будет выдавать правильную подсказку)
const UPDATE_VIN = 'UPDATE-VIN';    //функция обновления значения вводимого VIN
const CHECK_VIN = 'CHECK-VIN';      //влидация VIN

const inputVinReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_VIN:
            state.imageService.currentVIN = action.newText
            return state

        case CHECK_VIN:
            if (state.imageService.currentVIN.length !== 17) {
                state.imageService.rightVIN = ''
                alert("VIN должен состоятиь из 17-ти символов!")

            } else {
                state.imageService.rightVIN = state.imageService.currentVIN
            }

            return state

        default:
            return this.state

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