import { z } from "zod";

export const getUsersPaginationSchema = z.object({
  limit: z.coerce.number().min(0).optional(),
  offset: z.coerce.number().min(0).optional(),
});

export type UsersPaginationData = z.infer<typeof getUsersPaginationSchema>;

export const filterByNameSchema = z.object({
  name: z.string().min(1),
});

export const filterByEmailSchema = z.object({
  email: z.string().email(),
});

// export const updateUsersStatusesSchema = z.object({
//   users: z.array({id: String, status: String}).
// })

export type User = {
  name: String;
  email: String;
  status: UserStatus;
  group?: String;
};

export enum UserStatus {
  pending,
  active,
  blocked,
}

export enum GroupStatus {
  empty,
  notEmpty,
}
