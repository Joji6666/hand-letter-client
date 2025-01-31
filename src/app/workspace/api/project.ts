import ky, { KyResponse } from "ky";
import { ProjectResponse } from "../types/response";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const END_POINT = "/project";

const projectApi = ky.create({
  prefixUrl: `${BASE_URL}${END_POINT}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        console.log(`Response status: ${response.status}`);

        // ✅ 400~500대 에러 처리
        if (!response.ok) {
          const errorData = await response.json().catch(() => null); // JSON 파싱 실패 방지
          const errorMessage = `HTTP Error ${response.status}`;
          throw new Error(errorMessage);
        }

        return response;
      }
    ]
  }
});

const getUserProjects = async (
  userId: number
): Promise<ProjectResponse[] | undefined> => {
  const res: KyResponse<ProjectResponse[]> | undefined = await projectApi.get(
    `${userId}`
  );

  console.log(res, "res@@");

  return res ? res.json() : undefined;
};

export { getUserProjects };
