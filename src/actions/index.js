// STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

// action creator - fn that "creates" and _returns_ actions

//write an action creator for removing a feature
export const removeFeature = () => {
    console.log('remove action invoked');
    return {type: "REMOVE_FEATURE"}
}

//write an action creator that lets you add a feature

export const addFeature = () => {
    console.log('remove action invoked');
    return {type: "ADD_FEATURE"}
}