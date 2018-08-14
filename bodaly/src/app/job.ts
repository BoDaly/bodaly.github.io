import { Bullet } from './bullet'
export class Job {
  company_name: string;
  title: string;
  from: string;
  to: string;
  summary: string;
  bullets: Bullet[] = []
}
