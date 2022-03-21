import { connectDB, disconnectDB, connectionState } from "../datalayer/DatabaseInstance.js"

describe("Database Connection", ()=>{
    it("Should connect to database", async ()=>{
        const result = await connectDB()
        expect(result.success).toEqual(true)
    })
    it("Should return connection status successful", async ()=>{
        const result = connectionState()
        expect(result).toEqual(true)
    })
    it("Should disconnect database", async ()=>{
        const result = await disconnectDB()
        expect(result.success).toEqual(true)
    })
})