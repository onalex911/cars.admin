let store = {
    _state : {
        greeting: 'It works!',

        pagesInfo: {
            main: {
                pagePath: '/',
                pageHead: 'Главная страница',
                externalAction: ''
            },

            uploading: {
                pagePath: '/uplading',
                pageHead: 'Загрузка изображений',
                externalAction: 'https://cars.arkont-portal.ru/legacy/upload_image.html'
            },

            editGroups: {
                pagePath: '/editgroups',
                pageHead: 'Редактирование групп изображений',
                externalAction: 'https://cars.arkont-portal.ru/legacy/show_photos.html'
            },
        }
    },
    getState(){
        return this._state
    },

    //заготовка функции, которая будет переопределена "наблюдателем"
    _callSubscriber(){
        console.log('State changed')
    },

    updateTextarea(newText){
        console.log('Textarea updated with:'+newText)
        this._callSubscriber(this._state) //вызываем функцию перерисовки
    },

    //переопределение "наблюдателем"
    subscribe(observer){
        this._callSubscriber = observer
    }


}

export default store