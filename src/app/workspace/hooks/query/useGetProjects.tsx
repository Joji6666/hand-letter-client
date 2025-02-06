import { useQuery, type UseQueryResult } from "@tanstack/react-query";

import { getUserProjects } from "../../api/project";
import { type ProjectResponse } from "../../types/response";

const USER_PROJECTS_QUERY_KEY = "user_projects";

export const useGetProjects = (
  userId: number
): UseQueryResult<ProjectResponse[] | undefined> => {
  return useQuery<ProjectResponse[] | undefined>({
    queryFn: () => getUserProjects(userId),
    queryKey: [USER_PROJECTS_QUERY_KEY]
  });
};
