import bcrypt from 'bcryptjs';

export interface AdminSession {
  isAuthenticated: boolean;
  username?: string;
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  console.log('🔍 Environment check:');
  console.log('  ADMIN_USERNAME:', process.env.ADMIN_USERNAME);
  console.log('  ADMIN_PASSWORD_HASH exists:', !!process.env.ADMIN_PASSWORD_HASH);
  console.log('  ADMIN_PASSWORD_HASH length:', process.env.ADMIN_PASSWORD_HASH?.length);
  console.log('  All env vars:', Object.keys(process.env).filter(k => k.startsWith('ADMIN')));
  
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminPasswordHash) {
    console.error('❌ ADMIN_PASSWORD_HASH not set in environment variables');
    return false;
  }

  if (username !== adminUsername) {
    console.log('❌ Username mismatch. Expected:', adminUsername, 'Got:', username);
    return false;
  }

  const isValid = bcrypt.compareSync(password, adminPasswordHash);
  console.log('✅ Password comparison result:', isValid);
  
  return isValid;
}

export function createSessionToken(): string {
  // Simple session token (in production, use JWT or better method)
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}