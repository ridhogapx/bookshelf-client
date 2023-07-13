import { Request, Response } from "express"
import client from "../../config/rpc_client"
import { Owners } from "../../types/Owner"

export const AllOwners = (req: Request, res: Response) =>  {
    client.GetOwners({}, (err: string, resRPC: Owners) => {
        if (err) return res.json({
            error: err
        })
       return res.json(resRPC)
    })
}
