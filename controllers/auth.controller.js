import {
    authenticateEmailAndPassword,
    createUserWithEmailAndPassword
} from "../services/auth.service.js";
import { createToken } from "../services/token.service.js";
export const login = async (req, res) => {
    const data = req.body
    if (data.email != null && data.email != ""
        && data.password != null && data.password != "") {
        authenticateEmailAndPassword(data)
            .then(data => {
                var accessToken = createToken(data.data.id)
                res.send({
                    error: null,
                    data: {
                        success: true,
                        accessToken: accessToken,
                        refreshToken: null
                    }
                })
            })
            .catch(err => {
                console.log(err)
                res.send({
                    error: err,
                    data: null
                })
            })
    } else {
        res.send({
            error: "Required parameters cannot be empty",
            data: null
        })
    }
}

export const register = async (req, res) => {
    const data = req.body
    if (data.admin_token != null && data.admin_token != ""
        && data.profile_image != null && data.profile_image != ""
        && data.user_email != null && data.email != ""
        && data.github_url != null && data.github_url != ""
        && data.user_name != null && data.name != ""
        && data.password != null && data.password != ""
        && data.phone != null && data.phone != "") {
        createUserWithEmailAndPassword(data)
            .then(data => {
                res.send({
                    error: null,
                    data: data
                })
            })
            .catch(err => {
                res.send({
                    error: err,
                    data: null
                })
            })
    }else{
        res.send({
            error: "Required parameters cannot be empty",
            data: null
        })
    }
}