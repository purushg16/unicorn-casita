export interface AdminLogin {
  userId: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  name: string;
  phone: number;
}

export interface OTPVerify {
  email: string;
  otp: number;
}

export interface ChangePassword {
  password: string;
}
