import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd070108-da2d-47ec-bd5a-e22f291be6bf"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    },
    updatePhoto(photo: string) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response =>{
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    },
    login(data: LoginParamsType) {
        return instance.post('auth/login', data)
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}