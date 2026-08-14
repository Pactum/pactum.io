export type TechKind = "language" | "tool" | "concept";

export type TechWord = {
  label: string
  kind: TechKind
  weight: 1 | 2 | 3 | 4 | 5
  x: number
  y: number
  rotate: number
};

export const techKinds: { id: TechKind; label: string; x: number; y: number }[] = [
  { id: "language", label: "Languages", x: 18, y: 8 },
  { id: "concept", label: "Concepts", x: 50, y: 8 },
  { id: "tool", label: "Tools", x: 82, y: 8 },
];

export const technologies: TechWord[] = [
  { label: "TypeScript", kind: "language", weight: 5, x: 20, y: 42, rotate: -4 },
  { label: "Python", kind: "language", weight: 4, x: 10, y: 26, rotate: 6 },
  { label: "Java", kind: "language", weight: 3, x: 7, y: 54, rotate: 10 },
  { label: "C#", kind: "language", weight: 3, x: 16, y: 68, rotate: -10 },
  { label: "SQL", kind: "language", weight: 4, x: 28, y: 58, rotate: 5 },
  { label: "JavaScript", kind: "language", weight: 3, x: 14, y: 16, rotate: -7 },
  { label: "Node.js", kind: "language", weight: 3, x: 29, y: 32, rotate: 8 },
  { label: "Solidity", kind: "language", weight: 2, x: 9, y: 80, rotate: 4 },
  { label: "Bash", kind: "language", weight: 2, x: 24, y: 80, rotate: -8 },

  { label: "SaaS", kind: "concept", weight: 5, x: 48, y: 22, rotate: 3 },
  { label: "AI", kind: "concept", weight: 5, x: 52, y: 46, rotate: -8 },
  { label: "Multi-tenancy", kind: "concept", weight: 3, x: 58, y: 14, rotate: -5 },
  { label: "Serverless", kind: "concept", weight: 3, x: 40, y: 16, rotate: 7 },
  { label: "Payments", kind: "concept", weight: 3, x: 40, y: 34, rotate: -6 },
  { label: "Auth", kind: "concept", weight: 3, x: 58, y: 34, rotate: 6 },
  { label: "API", kind: "concept", weight: 3, x: 46, y: 60, rotate: 4 },
  { label: "REST", kind: "concept", weight: 2, x: 38, y: 52, rotate: -11 },
  { label: "GraphQL", kind: "concept", weight: 2, x: 60, y: 54, rotate: 8 },
  { label: "ETL", kind: "concept", weight: 3, x: 42, y: 74, rotate: -4 },
  { label: "RAG", kind: "concept", weight: 2, x: 58, y: 66, rotate: 5 },
  { label: "Ethereum", kind: "concept", weight: 4, x: 50, y: 80, rotate: -6 },
  { label: "Smart Contracts", kind: "concept", weight: 3, x: 58, y: 88, rotate: 3 },
  { label: "Blockchain", kind: "concept", weight: 3, x: 40, y: 86, rotate: 7 },
  { label: "CI/CD", kind: "concept", weight: 3, x: 36, y: 66, rotate: -8 },
  { label: "Observability", kind: "concept", weight: 2, x: 62, y: 74, rotate: 4 },

  { label: "AWS", kind: "tool", weight: 5, x: 80, y: 24, rotate: -6 },
  { label: "React", kind: "tool", weight: 5, x: 88, y: 40, rotate: 5 },
  { label: "Lambda", kind: "tool", weight: 4, x: 70, y: 16, rotate: 7 },
  { label: "Vite", kind: "tool", weight: 3, x: 92, y: 16, rotate: -8 },
  { label: "CDK", kind: "tool", weight: 3, x: 70, y: 30, rotate: -5 },
  { label: "S3", kind: "tool", weight: 3, x: 78, y: 38, rotate: 8 },
  { label: "DynamoDB", kind: "tool", weight: 2, x: 92, y: 28, rotate: 4 },
  { label: "Stripe", kind: "tool", weight: 4, x: 76, y: 52, rotate: -3 },
  { label: "Plaid", kind: "tool", weight: 2, x: 68, y: 46, rotate: 9 },
  { label: "Claude", kind: "tool", weight: 3, x: 90, y: 54, rotate: -4 },
  { label: "Cursor", kind: "tool", weight: 3, x: 82, y: 62, rotate: 6 },
  { label: "ChatGPT", kind: "tool", weight: 3, x: 92, y: 66, rotate: 3 },
  { label: "Docker", kind: "tool", weight: 3, x: 70, y: 62, rotate: -7 },
  { label: "Terraform", kind: "tool", weight: 3, x: 68, y: 74, rotate: 5 },
  { label: "PostgreSQL", kind: "tool", weight: 3, x: 80, y: 76, rotate: -6 },
  { label: "Snowflake", kind: "tool", weight: 3, x: 90, y: 80, rotate: 4 },
  { label: "Redis", kind: "tool", weight: 2, x: 72, y: 86, rotate: -8 },
  { label: "EventBridge", kind: "tool", weight: 2, x: 84, y: 88, rotate: 6 },
  { label: "CloudWatch", kind: "tool", weight: 2, x: 94, y: 90, rotate: -4 },
];
