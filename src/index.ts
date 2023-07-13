// Express and its types
import express ,{ Express } from "express"
import { AllOwners } from "./controller/owner_controller"

// Initialize Express
const app: Express = express()
const port: number = 8080

app.get("/owner", AllOwners)

app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`)
})

