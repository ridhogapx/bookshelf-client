import express ,{ Express, Request, Response } from "express"

// Initialize Express
const app: Express = express()
const port: number = 8080

// Test Route
app.get("/", (req: Request, res: Response): void => {
    res.json({
        message : "Welcome to RPC Client!"
    })
})

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`)
})

