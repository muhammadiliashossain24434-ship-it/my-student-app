
export type Language = 'en' | 'bn';
export type Theme = 'light' | 'dark';

export enum Screen {
  SPLASH = 'SPLASH',
  REGISTRATION = 'REGISTRATION',
  OTP = 'OTP',
  PROFILE_SETUP = 'PROFILE_SETUP',
  DASHBOARD = 'DASHBOARD',
  TASKS = 'TASKS',
  HABITS = 'HABITS',
  AI_CORNER = 'AI_CORNER',
  PROFILE = 'PROFILE'
}

export interface Task {
  id: string;
  title: string;
  note?: string;
  date: string;
  completed: boolean;
}

export interface Habit {
  id: string;
  title: string;
  streak: number;
  completedToday: boolean;
  history: Record<string, boolean>; // date string -> status
}

export interface User {
  name: string;
  username: string;
  phone: string;
  photo?: string;
}

export interface AppState {
  language: Language;
  theme: Theme;
  user: User | null;
  tasks: Task[];
  habits: Habit[];
  currentScreen: Screen;
}
