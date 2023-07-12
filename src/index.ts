// Express and its types
import express ,{ Express, Request, Response } from "express"

const path = require("path")

// GRPC Client
const GRPCClient = require('@grpc/grpc-js')

// Proto Path
const PROTO_PATH = path.resolve(__dirname, "../proto/owner/proto")

// Initialize Express
const app: Express = express()
const port: number = 8080

// Initialize RPC Client
const client = new GRPCClient(PROTO_PATH, "owner", "OwnerService", 50051 )

interface ArgOwner {
    id: string,
    name: string
}

// Argument
const newOwner: ArgOwner = {
    id: "5",
    name: "foo"
}

// Running service
client.runService('CreateOwner', newOwner, (err: any, res: any) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(res)
})

// Test Route
app.get("/", (req: Request, res: Response): void => {
    res.json({
        message : "Welcome to RPC Client!"
    })
})


app.listen(port, (): void => {
    console.log("Server is running on port ${port}")
})

