import { type ReactNode } from "react";

export interface WorkData {
  type: NodeType;
  element: ReactNode;
  page: number;
  imageUrl?: string;
  font?: string;
  backgroundColor?: string;
  align?: Align;
  textAlign?: Align;
  textColor?: string;
  insertAnimation?: string;
}

export interface Template {
  name: string;
  elements: WorkData[];
  imageUrl?: string;
}

export type NodeType =
  | "main"
  | "header"
  | "splash"
  | "page"
  | "gallery"
  | "location"
  | "guestBook"
  | "attendanceStatus"
  | "accountInformation"
  | "personInformation"
  | "countdown";

export type Align = "start" | "center" | "end";
