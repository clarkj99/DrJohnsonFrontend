export const addLogin = (user) => {
    return {
        type: "ADD_LOGIN",
        user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const updateLoginProfile = (profile) => {
    return {
        type: 'UPDATE_LOGIN_PROFILE',
        profile
    }
}

export const addEncounters = (encounters) => {
    return {
        type: 'ADD_ENCOUNTERS',
        encounters
    }
}

export const addEncounter = (encounter) => {
    return {
        type: 'ADD_ENCOUNTER',
        encounter
    }
}

export const selectEncounter = (encounter) => {
    return {
        type: 'SELECT_ENCOUNTER',
        encounter
    }
}

export const deleteEncounter = (encounter) => {
    return {
        type: 'DELETE_ENCOUNTER',
        encounter
    }
}

export const clearEncounter = () => {
    return {
        type: 'CLEAR_ENCOUNTER'
    }
}

export const startEncounter = (encounter) => {
    return {
        type: 'START_ENCOUNTER',
        encounter
    }
}

export const stopEncounter = () => {
    return {
        type: 'STOP_ENCOUNTER'
    }
}

export const updateEncounterChild = (model, value) => {
    return {
        type: 'UPDATE_ENCOUNTER_CHILD',
        model,
        value
    }
}

export const setStep = (stepNumber) => {
    return {
        type: 'SET_STEP',
        stepNumber
    }
}

export const addUsers = (userType, userList) => {
    return {
        type: 'ADD_USERS',
        userType,
        userList
    }
}

export const addUser = (userType, user) => {
    return {
        type: 'ADD_USER',
        userType,
        user
    }
}

export const addPatientToList = (user) => {
    return {
        type: 'ADD_PATIENT_TO_LIST',
        user
    }
}

export const selectPatient = (user) => {
    return {
        type: 'SELECT_PATIENT',
        user
    }
}

export const updatePatientProfile = (profile) => {
    return {
        type: 'UPDATE_PATIENT_PROFILE',
        profile
    }
}

export const updatePatientHistory = (history) => {
    return {
        type: 'UPDATE_PATIENT_HISTORY',
        history
    }
}

export const setCreatingPatient = (value) => {
    return {
        type: 'SET_CREATING_PATIENT',
        value
    }
}
export const clearUser = () => {
    return {
        type: 'CLEAR_USER'
    }
}

export const resetStep = () => {
    return {
        type: 'RESET_STEP'
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER'
    }
}

export const resetEncounter = () => {
    return {
        type: 'RESET_ENCOUNTER'
    }
}