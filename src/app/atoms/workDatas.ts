import { atom } from "jotai";
import { WorkData } from "../workspace/types";

export const WORK_DATAS = atom<WorkData[]>([]);
