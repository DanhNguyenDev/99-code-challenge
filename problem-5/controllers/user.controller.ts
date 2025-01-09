import { Request as RequestExpress, Response } from "express";
import UserService from "../services/user.service";
export default class UserController {
  public static async create(req: RequestExpress, res: Response): Promise<any> {
    return res.send(await UserService.createUser(req.body));
  }

  public static async getUser(
    req: RequestExpress,
    res: Response
  ): Promise<any> {
    return res.send(await UserService.getUser(req.params.id));
  }

  public static async update(req: RequestExpress, res: Response): Promise<any> {
    return res.send(await UserService.updateUser(req.params.id, req.body));
  }

  public static async getUsers(
    req: RequestExpress,
    res: Response
  ): Promise<any> {
    const { page, size } = req.query;
    return res.send(
      await UserService.getUsers({ page: Number(page), size: Number(size) })
    );
  }

  public static async delete(req: RequestExpress, res: Response): Promise<any> {
    return res.send(await UserService.deleteUser(req.params.id));
  }
}
