import { Request, Response } from "express"
import client from "../../config/rpc_client"
import { Owners } from "../../types/Owner"

export const GetOwner = (req: Request, res: Response): void => {
    // Handler
    client.GetOwners({}, (err: string, resRPC: Owners) => {
        res.json(resRPC)
    })
}