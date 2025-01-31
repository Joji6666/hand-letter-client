export interface ProjectResponse {
  id: number;
  url: string;
  endDate: string;
  effect: string;
  createUserId: number;
}

export interface ProjectContentResponse {
  id: number;
  type: string;
  content: string;
  subContent: string;
  backgroundColor: string;
  font: string;
  fontSize: string;
  animation: string;
}
