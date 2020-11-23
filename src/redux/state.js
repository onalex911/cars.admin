//задаем идентификатор действия, чтобы избежать опечаток (WebStorm будет выдавать правильную подсказку)
const UPDATE_VIN = 'UPDATE-VIN';
const CHECK_VIN = 'CHECK-VIN';
const FIND_PAGE_INFO = 'FIND-PAGE-INFO'
const FIND_PAGE_HEADER = 'FIND-PAGE-HEADER'

let store = {
    _state: {
        adminPages: {

            pagesInfo: {
                pages:
                    [
                        {
                            id: 'main',
                            pagePath: '/',
                            pageHeader: 'Главная страница',
                            pageMenuTitle: 'Главная',
                            setExact: true,
                            externalAction: ''

                        },

                        {
                            id: 'uploading',
                            pagePath: '/uploading',
                            pageHeader: 'Загрузка изображений',
                            pageMenuTitle: 'Загр. изобр.',
                            setExact: false,
                            externalAction: 'https://cars.arkont-portal.ru/legacy/upload_image.html'

                        },

                        {
                            id: 'editGroups',
                            pagePath: '/editgroups',
                            pageHeader: 'Редактирование групп изображений',
                            pageMenuTitle: 'Ред. групп изобр.',
                            setExact: false,
                            externalAction: 'https://cars.arkont-portal.ru/legacy/show_photos.html'

                        },

                        {
                            id: 'editIndividual',
                            pagePath: '/edit_ind',
                            pageHeader: 'Редактирование индивидуальных изображений',
                            pageMenuTitle: 'Ред. инд. изобр.',
                            setExact: false,
                            externalAction: 'https://cars.arkont-portal.ru/legacy/show_photos.html'

                        }
                    ]
            },

            activePage:
                {
                    pageHeader: 'Главная (начальное значение)'
                },

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

            case FIND_PAGE_HEADER:
                //debugger
                const curPage = this._state.adminPages.pagesInfo.pages.filter((item) =>
                    {
                        return item.pagePath === action.curPath
                    }
                );
                this._state.adminPages.activePage.pageHeader = curPage[0].pageHeader
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

export const findPageHeaderActionCreator = (path) => {
    return {type: FIND_PAGE_HEADER,curPath: path}
}

export default store