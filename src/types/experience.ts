import { Period } from './date';

export type JobDetails = 'simple' | 'extended';

export type WorkSummary = (string | string[])[];

export type RoleExperience = {
  name: string;
  period: Period;
  summary: WorkSummary;
  skillsUsed?: string[];
};

export type WorkExperience = {
  company: string;
  roles: RoleExperience[];
};
