export default interface CloudinaryResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  original_filename: string;
  uploaded_by: string;
  moderation: string;
  access_mode: string;
  context: Record<string, unknown>;
  metadata: Record<string, unknown>;
  uploaded_at: string;
  timestamp: number;
}
