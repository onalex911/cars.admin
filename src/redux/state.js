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
                    pageHead: 'Main pagge!'
                },

            setActive(match, location) {
                //debugger
                if (match) {
                    //console.log('Sidebar location value:'+location.pathname)
                    let res = store.findPageByPath(location.pathname)
                    if(res)
                        this.activePage.pageHead = res.pagePath
                    //const eventID = parseInt(match.params.eventID);
                    //return !isNaN(eventID) && eventID % 2 === 1;
                 //   store._callSubscriber(store._state)
                }
                return false
            }
        }
    },

//заготовка функции, которая будет переопределена "наблюдателем"
    _callSubscriber() {
        console.log('State changed')
    }
    ,

    getState() {
        return this._state
    }
    ,

    updateTextarea(newText) {
        console.log('Textarea updated with:' + newText)
        this._callSubscriber(this._state) //вызываем функцию перерисовки
    }
    ,

//переопределение "наблюдателем"
    subscribe(observer) {
        this._callSubscriber = observer
    }
    ,

    findPageByPath(path) {
        //alert(path)
        //let i = 0
        this._state.adminPages.pagesInfo.pages.filter((item) => {
                //debugger
                if(item.pagePath === path)
                    return item
            }
        )
        //console.log(`${i}`)
    }


}

export default store