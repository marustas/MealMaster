const letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers: string = '0123456789';
const specialChars: string = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

export function generateWeakPassword(): string {
  return generateRandomPassword(8);
}

export function generateMediumPassword(): string {
  return generateRandomPassword(10);
}

export function generateStrongPassword(): string {
  return generateRandomPassword(12);
}

function shuffleString(str: string): string {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

function generateRandomPassword(length: number): string {
  const allChars = letters + numbers + specialChars;

  let password = '';

  for (let i = 0; i < 4; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

  while (password.length < length) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  password = shuffleString(password);

  return password;
}
