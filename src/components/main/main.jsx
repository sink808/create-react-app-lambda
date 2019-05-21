
import React from "react"
// import { HashRouter } from "react-router-dom"
// import { TopBlock } from '../topBlock'
import {TodoListTitle} from '../todoListTitle'
import {TodoLists} from '../todoListContainer'

import {todoListStore} from "../../store"
import {Provider} from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)
class Main extends React.Component {
    render() {
        return (
            // <HashRouter>
            //     <TopBlock />
            // </HashRouter>
            <Provider store={todoListStore}>
                <div className="main">
                    <TodoListTitle />
                    <TodoLists />
                </div>
            </Provider>
        )
    }
}
window.store = todoListStore
export { Main }