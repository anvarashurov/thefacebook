export const SHOW_DROPDOWN = "SHOW_DROPDOWN"

const showDropdown = bool => ({
    type: SHOW_DROPDOWN,
    show: bool
})

export const logoutDropdown = dispatch => {
    return dispatch(showDropdown(show))
}