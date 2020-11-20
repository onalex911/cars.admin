let store = {
    _state : {
        greeting: 'It works!'
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