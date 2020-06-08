// const filters = {
//     searchText: '',
//     hideCompleted: false
// }

// const getFilters = () => filters

// const setFilters = (updates) => {
//     if (typeof updates.searchText === 'string') {
//         filters.searchText = updates.searchText
//     }
//     if (typeof updates.hideCompleted === 'boolean') {
//         filters.hideCompleted = updates.hideCompleted
//     }
// }

// export { getFilters, setFilters }

//destructured codes here

const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }