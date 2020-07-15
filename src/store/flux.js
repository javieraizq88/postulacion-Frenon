const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: "Juan Perez",
            buscarHotel: "",

        },
        actions: {

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },



        }
    }
}
export default getState;
