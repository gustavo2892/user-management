import type { TUserDTO } from "../users.types";
import { list, getById, create, update, remove } from "./users.service";
import api from "@/shared/api/api.service";

jest.mock("@/shared/api/api.service", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

const mockedApi = api as jest.Mocked<typeof api>;

beforeEach(() => {
  jest.clearAllMocks();
});

test("list should return users", async () => {
  mockedApi.get.mockResolvedValueOnce({ data: [{ id: 1, name: "John" }] });

  const data = await list();
  expect(mockedApi.get).toHaveBeenCalledWith("/users");
  expect(data).toEqual([{ id: 1, name: "John" }]);
});

test("getById should fetch the correct user", async () => {
  mockedApi.get.mockResolvedValueOnce({ data: { id: "1", name: "John" } });

  const data = await getById("1");
  expect(mockedApi.get).toHaveBeenCalledWith("/users/1");
  expect(data).toEqual({ id: "1", name: "John" });
});

test("create should send user data and return created user", async () => {
  mockedApi.post.mockResolvedValueOnce({
    data: { id: "abc123", name: "John" },
  });

  const payload = {
    name: "John",
    email: "test@test.com",
    status: "active",
  } satisfies TUserDTO;
  const data = await create(payload);

  expect(mockedApi.post).toHaveBeenCalledWith(
    "/users",
    expect.objectContaining(payload),
  );
  expect(data).toEqual({ id: "abc123", name: "John" });
});

test("update should send user update data and return updated user", async () => {
  mockedApi.put.mockResolvedValueOnce({
    data: { name: "Johnny", email: "test@test.com", status: "active" },
  });

  const updated = await update("1", {
    name: "Johnny",
    email: "test@test.com",
    status: "active",
  });

  expect(mockedApi.put).toHaveBeenCalledWith("/users/1", updated);
  expect(updated).toEqual({
    name: "Johnny",
    email: "test@test.com",
    status: "active",
  });
});

test("remove should call delete on the correct route", async () => {
  mockedApi.delete.mockResolvedValueOnce({ data: undefined });

  const result = await remove("1");

  expect(mockedApi.delete).toHaveBeenCalledWith("/users/1");
  expect(result).toBeUndefined();
});
