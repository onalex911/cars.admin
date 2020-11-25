//задаем идентификатор действия, чтобы избежать опечаток (WebStorm будет выдавать правильную подсказку)
const FIND_PAGE_HEADER = 'FIND-PAGE-HEADER'

const pageFunctionReducer = (state, action) => {

    let stateCopy = { ...state }
    switch (action.type) {

        case FIND_PAGE_HEADER:
            //debugger
            const curPage = stateCopy.adminPages.pagesInfo.pages.filter((item) => {
                    return item.pagePath === action.curPath
                }
            );
            stateCopy.adminPages.activePage.pageHeader = curPage[0].pageHeader
            return stateCopy

        default:
            return stateCopy
    }

}

//создаем Action Creator для корректного создания объекта именно для данного действия dispatcher-а
export const findPageHeaderActionCreator = (path) => {
    return {type: FIND_PAGE_HEADER, curPath: path}
}

export default pageFunctionReducer