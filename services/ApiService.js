export default function ({ $axios, store, $storage, redirect }) {
    const currentUser =
      $storage.get("signInToken") || store?.state?.auth?.currentUser;
    const retry = 2
    $axios.onError(error => {
        // if (error.response && error.response.status === 500) {
        //   redirect('/')
        // }
        if (error.response && [401, 419].includes(error.response.status)) {
            if (retry <= 2) {
                window.location.reload()
                handleOnRequest()
            } else {
                redirect('/')
            }
        }
        return Promise.reject(error)
    })
    handleOnRequest($axios, currentUser)
}

function handleOnRequest($axios, currentUser) {
    console.log('current user', currentUser)
    $axios.onRequest(
        config => {
            config.headers.Authorization = currentUser.email
            return config
        },
        error => {
            return Promise.reject(error)
        },
    )
}
