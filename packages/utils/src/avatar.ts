export const getInitialNickname = (username?: string): string => {
  if (!username) return '';
  const names = username.split(' ');
  const firstName = names[0];
  const lastName = names[names.length - 1];
  const nickname = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  return nickname;
};

// Source: https://hypercolor.dev/
export const gradients = [
  'bg-gradient-to-b from-green-300 via-blue-500 to-purple-600',
  'bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400',
  'bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100',
  'bg-gradient-to-b from-red-200 via-red-300 to-yellow-200',
  'bg-gradient-to-b from-green-200 via-green-300 to-blue-500',
  'bg-gradient-to-b from-indigo-300 to-purple-400',
  'bg-gradient-to-b from-green-200 to-green-500',
  'bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500',
];

/** Select a random gradient from the array of gradients based on a
 *  hash of the username string. If the username has already been hashed,
 *  reuse the same graident picked.
 */
export function getGradient(username?: string) {
  function hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  if (username) {
    const hash = hashCode(username);
    const index = hash % gradients.length;
    return gradients[Math.abs(index)];
  } else {
    return gradients[Math.floor(Math.random() * gradients.length)];
  }
}
