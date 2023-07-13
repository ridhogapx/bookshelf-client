// Path module
const path = require("path")

// GRPC Client
const grpc = require("@grpc/grpc-js")

// Proto loader
const protoLoader = require("@grpc/proto-loader")

// Proto Path
const PROTO_PATH = path.resolve(__dirname, "../../proto/owner.proto")

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

export default client