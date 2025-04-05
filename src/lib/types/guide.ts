export interface RepairStep {
  title: string;
  description: string;
  warningNote?: string;
  tools?: string[];
  imageUrl?: string;
}

export interface RepairGuide {
  id: string;
  brand: string;
  model?: string;
  part: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeRequired: string;
  steps: RepairStep[];
  tools: string[];
  warnings: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type RepairCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  commonSteps: RepairStep[];
};