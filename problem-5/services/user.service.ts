import { AppDataSource } from "../config/database";
import { User } from "../model/user.model";
import { status } from "http-status";
import { getPagination, getPagingData } from "../utils/paginator";

export default class UserService {
  private static userRepository = AppDataSource.getRepository(User);
  public static async createUser(data: Partial<User>) {
    await this.userRepository.save(data);
    return {
      message: "Create User Successfully",
      status: status.OK,
    };
  }

  public static async updateUser(id: string, data: Partial<User>) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        message: "Not found User",
        status: status.BAD_REQUEST,
      };
    }
    Object.assign(user, data);
    await this.userRepository.save(user);
    return {
      message: "Update User Successfully",
      status: status.OK,
    };
  }

  public static async getUser(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        message: "Not found User",
        status: status.BAD_REQUEST,
      };
    }
    return {
      message: "Get User Successfully",
      status: status.OK,
      data: user,
    };
  }

  public static async getUsers({ size, page }: { size: number; page: number }) {
    const { limit, offset } = getPagination(page, size);
    const [rows, count] = await this.userRepository.findAndCount({
      take: limit,
      skip: offset,
    });

    return {
      message: "Get User success",
      data: getPagingData(
        { rows, count },
        page,
        limit,
        (users: Array<User>) => {
          return users.map((user) => {
            return { id: user.id, name: user.name, active: user.active };
          });
        }
      ),
      status: status.OK,
    };
  }

  public static async deleteUser(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        message: "Not found User",
        status: status.BAD_REQUEST,
      };
    }
    await this.userRepository.delete({ id });
    return {
      message: "Delete User Successfully",
      status: status.OK,
    };
  }
}
