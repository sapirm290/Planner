import { connect } from 'react-redux'
import Item from './Item'

// const REMOVE = "REMOVE"
// const UPDATEITEM = "UPDATEITEM"
// const SETDONE = "SETDONE"
// const SETSTARRED = "SETSTARRED"



// const initialState = {
//     items:
//         [
//         ]
// }
// const removeItemAction = (index) => {
//     return {
//         type: REMOVE,
//         index: index
//     }
// }
// const setItemDoneAction = (item) => {
//     return {
//         type: UPDATEITEM,
//         item: {...item, title: 'changed'}
//     }
// }
// const setItemStarredAction = (index) => {
//     return {
//         type: SETSTARRED,
//         index: index
//     }
// }
const mapDispatchToProps = dispatch => {
    return {
        // removeItem: (index) => {

        //     dispatch(removeItemAction(index))
        // },
        // setItemDone: (index) => {

        //     dispatch(setItemDoneAction(index))
        // },
        // setItemStarred: (index) => {

        //     dispatch(setItemStarredAction(index))
        // }
    }
}

const mapStateToProps = (state, props) => {
    return props.item
}

const ItemLogic = connect(
    mapStateToProps,
    null
)(Item)


export default ItemLogic
