// Express and its types
import express ,{ Express, Request, Response } from "express"

const path = require("path")

// GRPC Client
const grpc = require("@grpc/grpc-js")

// Proto loader
const protoLoader = require("@grpc/proto-loader")

// Proto Path
const PROTO_PATH = path.resolve(__dirname, "../proto/owner.proto")

// Initialize Express
const app: Express = express()
const port: number = 8080

// Options RPC
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
const proto = grpc.loadPackageDefinition(packageDefinition).proto

// Client RPC
const client = new proto.OwnerService(
    "localhost:50051",
    grpc.credentials.createInsecure()
) 

interface ArgOwner {
    id: string,
    name: string
}

client.GetOwners({}, (err: any, res: any) => {
    if (err) throw(err)

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

