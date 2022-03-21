import { getInstance } from "../datalayer/DatabaseInstance.js"
import crypto from "crypto"


const _encryptPassword =
    async (password) =>
        new Promise(async (resolve, reject) => {
            const salt = crypto.randomUUID()
            crypto.pbkdf2(password,
                salt,
                1000, 64, 'sha512',
                (err, derivedKey) => {
                    if (err) reject(err)
                    resolve({
                        password_hash: derivedKey.toString('hex'),
                        password_salt: salt
                    })
                })
        })

const _matchPassword = (password, password_hash, password_salt) =>
    new Promise(async (resolve, reject) => {
        crypto.pbkdf2(password,
            password_salt,
            1000, 64, 'sha512',
            (err, derivedKey) => {
                if (err) reject(err)
                if (derivedKey.toString('hex') == password_hash) {
                    resolve(true)
                } else {
                    reject(false)
                }
            })
    })

export const authenticateEmailAndPassword =
    async ({ email, password }) => {
        return new Promise(async (resolve, reject) => {
            const prisma = getInstance()
            prisma.users.findFirst({
                where: {
                    email: email
                }
            })
                .then((data) => {
                    console.log(data)
                    var user = data
                    _matchPassword(password, user.password_hash, user.password_salt)
                        .then(_ => resolve({
                            success: true,
                            data: data
                        }))
                        .catch(err => reject(err))
                })
                .catch((err) => reject(err))
        })
    }

export const createUserWithEmailAndPassword =
    async ({ user_email, github_url,
        user_name, password, phone,
        profile_image }) => {
        return new Promise(async (resolve, reject) => {
            const prisma = getInstance()
            _encryptPassword(password)
                .then(({ password_hash, password_salt }) => {
                    prisma.users.create({
                        data: {
                            admin_token: "",
                            email: user_email,
                            github_url: github_url,
                            name: user_name,
                            password_hash: password_hash,
                            password_salt: password_salt,
                            phone: phone,
                            profile_image: profile_image,
                            role: "USER",
                        }
                    })
                        .then(data => {
                            resolve({
                                success: true,
                                data: data
                            })
                        })
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    }