import { Period } from "./date";

export type WorkSummary = (string | string[])[];

export type Role = {
  name: string;
  period: Period
  summary: WorkSummary;
  skillsUsed: string[];
};

export type WorkExperience = {
  company: string;
  roles: Role[];
};