import { WebAppChat } from "@vkruglikov/react-telegram-web-app"

export type WebAppUser = {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: boolean;
  added_to_attachment_menu?: boolean;
  _is_premium: boolean;
  allows_write_to_pm?: boolean;
};

export type InitDataUnsafe = {
  query_id?: string;
  user?: WebAppUser;
  receiver?: WebAppUser;
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
  chat_instance?: string;
  start_param?: string;
  auth_date: number;
  hash: string;
  chat?: WebAppChat;
  can_send_after?: number;
};



export type ApiRequestConfig = {
  path: string;             // The endpoint path
  data?: object;               // Optional data payload
  method: string;
  contentType?: string;
  removeAuth?: boolean;     // Optional flag to remove authorization
}


export type Auth = {
  password: string;
  username: string;
  first_name?: string;
  is_premium_user?: boolean;
  referral_code?: string;
}

export type TokenAuth = {
  refresh: string;
  access: string;
}


export enum AccountType {
  SUPER_ADMINISTRATOR,
  ADMINISTRATOR,
  TAPPERS
}

export enum Rank {
  ROOKIE,
  VETERAN,
  ELITE,
  PRO,
  MASTER,
  GRANDMASTER,
  LEGENDARY
}

export enum BotLevel {
  INTERMEDIATE,
  PRO,
  EXPERT,
  BOT = "NON MINER"
}


export interface UserData {
  id: bigint;
  is_admin: boolean;
  coins_to_level_up: number;
  can_rank_up: boolean;
  can_upgrade_bot: boolean;
  can_increase_energy: boolean;
  can_increase_tap: boolean;
  daily_income: number;
  last_login: Date;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  date_joined: Date;
  date_added: Date;
  date_last_updated: Date;
  username: string;
  account_type: AccountType;
  user_id?: number;
  balance: number;
  tap_energy_level: number;
  tap_energy: number;
  rank: Rank;
  earn_per_tap_level: number;
  earn_per_tap: number;
  profit_per_hour: number;
  bot_level: BotLevel;
  is_suspended: boolean;
  suspend_expiry_date: Date | null;
  suspend_duration_in_minutes: number;
  referral_code: string;
  referrer_id: number | null;
  is_invited: boolean;
  address: string;
  is_premium_user: boolean;
  token: TokenAuth;
}

export interface TopUpCreateType {
  amount: number;
}


export interface AuthLogin {
  username: string;
  password: string;
}
export type TaskCompletionType = {
  title: string,
  reward: number,
  task_url: string,
  avater: string
}


export type DailyStreakCreateType = {
  last_checkin_date: string,
  owner: number,
}