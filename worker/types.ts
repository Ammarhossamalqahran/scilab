// Minimal Cloudflare types so the Worker needs no extra dependency.
export interface D1Result<T = unknown> { results: T[]; success: boolean; meta?: { changes?: number } }
export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(): Promise<T | null>;
  all<T = unknown>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
}
export interface D1Database { prepare(sql: string): D1PreparedStatement; batch(statements: D1PreparedStatement[]): Promise<D1Result[]> }
export interface Env { DB?: D1Database; ADMIN_KEY?: string; GOOGLE_CLIENT_ID?: string; ASSETS: { fetch(request: Request): Promise<Response> } }
