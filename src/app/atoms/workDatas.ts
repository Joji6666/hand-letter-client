import { atom } from "jotai";

import { type WorkData } from "../workspace/types";

export const WORK_DATAS = atom<WorkData[]>([]);
