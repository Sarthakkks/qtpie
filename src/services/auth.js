// src/services/auth.js

const STORAGE_KEY = "qtpie_users";
const CURRENT_KEY = "qtpie_current_user";

function loadUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user) {
  if (user) localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  else localStorage.removeItem(CURRENT_KEY);
}

export function signupUser(name, email, password) {
  const users = loadUsers();
  const exists = users.find((u) => u.email === email);
  if (exists) {
    throw new Error("An account with this email already exists.");
  }
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
  return { id: newUser.id, name: newUser.name, email: newUser.email };
}

export function loginUser(email, password) {
  const users = loadUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error("Invalid email or password.");
  }
  const safeUser = { id: user.id, name: user.name, email: user.email };
  setCurrentUser(safeUser);
  return safeUser;
}

export function logoutUser() {
  setCurrentUser(null);
}
