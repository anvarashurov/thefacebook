export const SHOW_DROPDOWN = "SHOW_DROPDOWN";
export const HIDE_DROPDOWN = "HIDE_DROPDOWN";

export const showDropdown = (component, componentId) => {
    return {
        type: SHOW_DROPDOWN,
        displayed: true,
        component,
        componentId
    }
}

export const hideDropdown = () => {
    return {
        type: HIDE_DROPDOWN,
        displayed: false,
    }
}
