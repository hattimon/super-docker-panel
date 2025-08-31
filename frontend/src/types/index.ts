export interface Container {
  id: string;
  name: string;
  status: 'running' | 'stopped';
  ports: number[];
}
