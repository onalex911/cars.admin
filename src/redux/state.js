//задаем идентификатор действия, чтобы избежать опечаток (WebStorm будет выдавать правильную подсказку)
const UPDATE_VIN = 'UPDATE-VIN';
const CHECK_VIN = 'CHECK-VIN'

let store = {
    _state: {
        adminPages: {

            pagesInfo: {
                pages:
                    [
                        {
                            id: 'main',
                            pagePath: '/',
                            pageHead: 'Главная страница',
                            externalAction: ''

                        },

                        {
                            id: 'uploading',
                            pagePath: '/uplоading',
                            pageHead: 'Загрузка изображений',
                            externalAction: 'https://cars.arkont-portal.ru/legacy/upload_image.html'

                        },

                        {
                            id: 'editGroups',
                            pagePath: '/editgroups',
                            pageHead: 'Редактирование групп изображений',
                            externalAction: 'https://cars.arkont-portal.ru/legacy/show_photos.html'

                        },

                        {
                            id: 'editIndividual',
                            pagePath: '/edit_ind',
                            pageHead: 'Редактирование индивидуальных изображений',
                            externalAction: 'https://cars.arkont-portal.ru/legacy/show_photos.html'

                        }
                    ]
            },

            activePage:
                {
                    pageHead: 'Главная (начальное значение)'
                },

            setActive(match, location) {
                //debugger
                if (match) {
                    console.log(`setActive got ${location.pathname}`)
                    /*console.log(`Now pageHead is: ${store._state.adminPages.activePage.pageHead}`)
                    let res = store.findPageByPath(location.pathname)
                    //debugger
                    if(res) {
                        console.log(`YES! res is nor NULL! ${res}`)
                        store._state.adminPages.activePage.pageHead = res
                        //const eventID = parseInt(match.params.eventID);
                        //return !isNaN(eventID) && eventID % 2 === 1;
                        //
                        store._callSubscriber(store._state)
                    }
                    else console.log(`res for ${location.pathname} is null`)

                    */
                }
                return false
            }
        },

        imageService: {
            currentVIN: '',
            rightVIN: ''
        }
    },

//заготовка функции, которая будет переопределена "наблюдателем"
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
//переопределение "наблюдателем"
    subscribe(observer) {
        this._callSubscriber = observer
    },

    updateTextarea(newText) {
        console.log('Textarea updated with:' + newText)
        this._callSubscriber(this._state) //вызываем функцию перерисовки
    },


    findPageByPath(path) {
        //alert(path)
        //let i = 0
        this._state.adminPages.pagesInfo.pages.forEach((item, i, arr) => {
                //debugger
                //console.log(item.pagePath)
                if (item.pagePath === path) {
                    return item.pageHead
                } else
                    console.log(`${item.pagePath} !== ${path}`)
                return false
            }
        )
        //console.log(`${i}`)
    },

    dispatch(action) {

        switch (action.type) {
            case UPDATE_VIN:
                this._state.imageService.currentVIN = action.newText
                this._callSubscriber(this._state) //вызываем функцию перерисовки
                break

            case CHECK_VIN:
                if (this._state.imageService.currentVIN.length !== 17) {
                    this._state.imageService.rightVIN = ''
                    alert("VIN должен состоятиь из 17-ти символов!")

                } else {
                    this._state.imageService.rightVIN = this._state.imageService.currentVIN
                }
                this._callSubscriber(this._state) //вызываем функцию перерисовки
                break
            default:
                console.log('No appropriate action for the dispatch')
        }
    }

}

//создаем Action Creator для корректного создания объекта именно для данного действия dispatcher-а
export const updateVinActionCreator = (text) => {
    return {type: UPDATE_VIN, newText: text}
}

export const checkVinActionCreator = () => {
    return {type: CHECK_VIN}
}

export default store