export enum Collections {
  POSTS = 'posts',
  CATEGORIES = 'categories',
  PRODUCTS = 'products',
  USERS = 'users',
}

export const config = () => ({
  jwt: {
    accessTokenExpireTime: process.env.EXPIRES_IN || '15d',
    secret: process.env.SECRET_KEY || 'sanmario',
  },
});
