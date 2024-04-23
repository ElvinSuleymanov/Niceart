export interface Partners {
  id: number;
  name: string | null;
  description: string | null;
  file: { id: number; url: string } | null;
  site: string | null;
  tag: string | null;
}
