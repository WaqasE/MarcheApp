import * as SecureStore from 'expo-secure-store'

const key = 'Marche'

const save = async (token) => {
    try {
        await SecureStore.setItemAsync(key, token)
    }
    catch (err) {
        console.log(err)
    }
}

const retrieve = async () => {
    try {
        const sucess = await SecureStore.getItemAsync(key)
        return sucess
    }
    catch (err) {
        console.log(err)
    }
}

const dump = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    }
    catch (err) {
        console.log(err)
    }
}

export { save, retrieve, dump };